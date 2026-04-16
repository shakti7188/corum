// WebGL2 animated cloud background.
// A single fragment shader samples 3D simplex noise over time, then blends a
// user-supplied palette to form smooth drifting color fields.

const VERT = /* glsl */ `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 frag;
uniform float u_time;
uniform vec2 u_res;
uniform vec3 u_palette[5];

// Ashima simplex noise (public domain)
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float s = 0.0, a = 0.5, f = 1.0;
  for (int i = 0; i < 5; i++) {
    s += a * snoise(p * f);
    f *= 2.05;
    a *= 0.52;
  }
  return s * 0.5 + 0.5;
}

vec3 palette(float t) {
  t = clamp(t, 0.0, 0.9999) * 4.0;
  int i = int(floor(t));
  float f = fract(t);
  vec3 a = u_palette[i];
  vec3 b = u_palette[i + 1];
  return mix(a, b, smoothstep(0.0, 1.0, f));
}

void main() {
  vec2 uv = v_uv;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0) * 1.4;
  float t = u_time * 0.06;
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, -t)));
  vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + 0.5 * t),
                fbm(p + 4.0 * q + vec2(8.3, 2.8) - 0.4 * t));
  float n = fbm(p + 4.0 * r);
  vec3 col = palette(n);
  // subtle vignette
  float v = smoothstep(1.2, 0.3, length(uv - 0.5));
  col = mix(col * 0.88, col, v);
  // soft film grain
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * 0.015;
  frag = vec4(col, 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error('Shader compile failed: ' + log);
  }
  return shader;
}

function link(gl: WebGL2RenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram {
  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error('Program link failed: ' + log);
  }
  return program;
}

export function initCloud(host: HTMLElement): void {
  const canvas = host.querySelector('canvas');
  if (!(canvas instanceof HTMLCanvasElement)) return;
  if (canvas.dataset.ready === 'true') return;
  canvas.dataset.ready = 'true';

  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: false });
  if (!gl) return; // graceful: CSS fallback already paints the host bg

  const palette: number[][] = JSON.parse(host.dataset.palette ?? '[]');
  const speed = Number(host.dataset.speed ?? 1);
  if (palette.length < 5) return;

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  const prog = link(gl, vs, fs);

  const quad = new Float32Array([-1, -1,  1, -1, -1,  1, -1,  1,  1, -1,  1,  1]);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(prog, 'a_pos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_res');
  const uPal = gl.getUniformLocation(prog, 'u_palette');

  gl.useProgram(prog);
  gl.uniform3fv(uPal, new Float32Array(palette.flat()));

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const rect = host.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    }
  };
  resize();
  new ResizeObserver(resize).observe(host);

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const start = performance.now();
  let raf = 0;
  let visible = true;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
  io.observe(host);

  const tick = (now: number) => {
    const t = reduced ? 0 : ((now - start) / 1000) * speed;
    gl.uniform1f(uTime, t);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    raf = visible ? requestAnimationFrame(tick) : 0;
    if (!visible) {
      const wake = () => { if (visible) return; visible = true; raf = requestAnimationFrame(tick); };
      io.disconnect();
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting) wake();
      }, { threshold: 0 }).observe(host);
    }
  };
  raf = requestAnimationFrame(tick);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && raf) cancelAnimationFrame(raf);
    else if (!document.hidden && visible) raf = requestAnimationFrame(tick);
  });
}
