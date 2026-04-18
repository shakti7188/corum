// /services/development/ai
// Service cluster — AI & automation systems development.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Lumenfield AI", firstUsedOn: "/services/development/ai", industry: "ai", region: "americas", note: "Series A AI agent platform for enterprise ops automation." });
registerCompany({ name: "Seraph Systems", firstUsedOn: "/services/development/ai", industry: "ai", region: "europe", note: "LLM-native analytics for regulated industries." });
registerCompany({ name: "Orion Copilot", firstUsedOn: "/services/development/ai", industry: "ai", region: "apac", note: "Domain-specific copilot for Asian fintech support teams." });
registerCompany({ name: "Mosaic Intelligence", firstUsedOn: "/services/development/ai", industry: "ai", region: "mea", note: "Multi-modal intelligence platform for compliance reviews." });

export const page: PageData = {
  slug: "/services/development/ai",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "AI development services",
  secondaryKeywords: [
    "AI agent development",
    "LLM integration",
    "AI automation",
    "machine learning solutions",
    "enterprise AI",
    "retrieval augmented generation",
  ],
  searchIntent: "commercial",

  meta: {
    title: "AI Development & Automation Services | Corum8",
    description:
      "Corum8 ships production AI — agents, RAG systems, domain copilots, LLM integrations. Real evaluation, real observability, real cost control. Not demos.",
    canonical: "https://corum8.com/services/development/ai",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "AI & Automation", href: "/services/development/ai" },
  ],

  hero: {
    eyebrow: "Development · AI",
    headline: "We build production AI.",
    subtitle: "Agents, RAG, copilots, automation — shipped with evaluation, observability, and cost control.",
    sub:
      "The hard part of AI in 2026 isn't calling a model. It's shipping a system that holds up against real users, tracks quality over time, and doesn't bankrupt you on tokens. That's what we build.",
    mediaToken: "hero.ai",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds production AI systems — agents, retrieval-augmented generation (RAG), domain-specific copilots, automation pipelines, and ML workflows. The work spans model selection, prompt and context engineering, evaluation harnesses, observability, cost controls, and the integration surfaces that put AI inside real business workflows rather than leaving it as a demo.",

  body: [
    {
      type: "Prose",
      heading: "The AI gap in 2026 is between demos and production",
      pullQuote: "Anyone can build an AI demo. The hard part is shipping something that's still working six months later.",
      body:
        "<strong>Most AI projects in 2026 don't fail because the model couldn't do the task.</strong> They fail because nobody built the scaffolding the model needs to be useful — eval harnesses that catch regressions, observability that shows where the system breaks, cost controls that prevent the $50K monthly surprise, and the boring integration work that turns a clever prompt into a feature your team can actually ship to customers.\n\n" +
        "The frontier-model providers — <strong>OpenAI</strong>, <strong>Anthropic</strong>, <strong>Google</strong>, <strong>Meta</strong>, <strong>Mistral</strong> — solved the core intelligence problem. A call to <strong>GPT-5</strong> or <strong>Claude 4</strong> now handles tasks that required specialist ML engineering three years ago. <em>That's not where the engineering work is anymore.</em>\n\n" +
        "The engineering work is now at the systems layer: how you route between models, how you ground responses in your data, how you measure quality objectively, how you recover from a model outage, how you manage context windows that are technically large but economically expensive, how you avoid leaking private data into a third-party provider.\n\n" +
        "We build AI for teams that already saw the first prototype work in a notebook and need the version that works in production. Enterprise ops teams automating real workflows. Regulated businesses that need verifiable AI behaviour. Consumer products where AI features are now competitive a baseline expectation.",
    },

    {
      type: "Definition",
      heading: "What AI development actually covers",
      body:
        "<strong>AI development</strong>, in the 2026 sense, is mostly systems engineering around foundation models — not training models from scratch. The work splits across a handful of product patterns.\n\n" +
        "<strong>RAG (Retrieval-Augmented Generation)</strong> — systems that pull relevant context from your data (docs, emails, databases, codebases) before the model answers. Good RAG is 10% prompt engineering and 90% retrieval quality, evaluation, and indexing discipline.\n\n" +
        "<strong>AI agents</strong> — systems that plan and take multi-step actions across tools (search, APIs, databases, file systems). Agents matter when the task can't be collapsed into a single prompt. Agent reliability is dominated by tool-call precision, error recovery, and bounded autonomy.\n\n" +
        "<strong>Copilots</strong> — domain-specific assistants embedded in existing workflows (sales, support, ops, dev). The product discipline is pairing LLM fluency with specific business logic and accurate data access, not raw model capability.\n\n" +
        "<strong>Automation pipelines</strong> — scheduled or triggered AI workflows that classify, summarise, route, or transform at scale. Think document processing, lead qualification, support ticket routing, content moderation.\n\n" +
        "<strong>Specialist ML</strong> — where foundation models aren't the right tool: latency-critical classification, edge inference, specialised predictive models, anomaly detection on structured data.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a production AI build",
      enquiry: {
        hook: "AI demo, no product?",
        heading: "Copilots are the easy bit. Agents that run your business aren't.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        avatarName: "Sonia K.",
        avatarRole: "AI Solutions Lead",
      },
      body:
        "Every AI system we ship has the same seven modules. The specifics shift based on product pattern, but the shape is consistent.",
      subsections: [
        {
          heading: "1. Model routing and selection",
          body:
            "Different tasks want different models. <strong>Claude 4 Opus</strong> for complex reasoning, <strong>GPT-5-mini</strong> for cheap classification, <strong>Gemini 2.5 Flash</strong> for long-context summarisation, open-source models (<strong>Llama 4</strong>, <strong>Qwen 3</strong>, <strong>DeepSeek V3</strong>) when cost or data sovereignty matters. We build routing layers that pick the right model per task, fallback when providers are down, and version-pin critical paths so an upstream model deprecation doesn't break production.",
        },
        {
          heading: "2. Context engineering and retrieval",
          body:
            "RAG quality is retrieval quality. We build indexes using <strong>PostgreSQL + pgvector</strong> for small-to-medium scale, <strong>Qdrant</strong> or <strong>Weaviate</strong> for larger, <strong>Elasticsearch</strong> for hybrid keyword + vector when precision matters. Chunking strategy, re-ranking (<strong>Cohere Rerank</strong>, <strong>Voyage</strong>, custom cross-encoders), and query rewriting all matter more than raw embedding quality. We evaluate retrieval independently from generation — you can't fix bad retrieval with a better prompt.",
        },
        {
          heading: "3. Agents and tool use",
          body:
            "Agents are fragile without structure. We build around <strong>function-calling APIs</strong> with strict schemas (<strong>OpenAI tools</strong>, <strong>Anthropic tool_use</strong>, <strong>Gemini function declarations</strong>), explicit state tracking between turns, retry logic with graceful degradation, and bounded autonomy (hard caps on tool calls, cost, and recursion depth). The real engineering challenge is how the agent recovers from tool errors — not how it plans the happy path.",
        },
        {
          heading: "4. Evaluation harnesses",
          body:
            "You cannot ship AI without evals. We build evaluation around three tiers: <strong>unit-level</strong> tests for deterministic behaviour (does the classifier return the right label?), <strong>golden-set</strong> tests for open-ended quality (does the response match the gold standard on these 200 cases?), and <strong>production monitoring</strong> for live quality drift (are real users flagging responses more often this week?). Without evals, you don't know whether model upgrades help or hurt.",
        },
        {
          heading: "5. Observability and cost control",
          body:
            "Every inference is logged with prompt, completion, model, tokens, latency, and user context. We integrate <strong>Langsmith</strong>, <strong>Langfuse</strong>, <strong>Arize</strong>, <strong>Weights & Biases</strong>, or build custom observability depending on scale. Cost dashboards per feature, alerts on token-per-request spikes, and rate limits that prevent runaway loops. <em>The teams that lose control of AI spend are the ones without per-feature cost attribution.</em>",
        },
        {
          heading: "6. Data privacy and provider posture",
          body:
            "Not every task can route to a third-party provider. Regulated industries, proprietary data, and some enterprise procurement requirements demand on-prem or private-cloud inference. We deploy <strong>Llama</strong> / <strong>Qwen</strong> / <strong>DeepSeek</strong> on <strong>vLLM</strong> or <strong>TGI</strong> in your infrastructure, or use sovereign-cloud providers like <strong>AWS Bedrock</strong>, <strong>Azure OpenAI</strong>, or <strong>GCP Vertex</strong> with BYOK. The architecture is task-dependent, not dogmatic.",
        },
        {
          heading: "7. Integration surfaces",
          body:
            "AI lives inside existing systems: Slack, Salesforce, Notion, your product UI, your existing backend. We build integrations through official APIs, webhooks, embedded widgets, or direct SDK work. The AI experience is only as good as the surface it lives in — a great model behind a broken integration adds no value.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need production AI — not another prototype",
      signals: [
        "Your internal prototype works in a notebook but nobody's brave enough to put it in front of real customers.",
        "You're paying $30K/month in model costs and nobody can tell you which feature drives most of it.",
        "Your AI feature performance has been degrading for months and you don't have evals to prove it.",
        "Your procurement team flagged that sending proprietary data to OpenAI is unacceptable and you need a different architecture.",
        "You have one working agent and the team wants five more, but every new one requires weeks of per-agent engineering.",
        "You're about to launch an AI feature in a regulated industry and your legal team wants verifiable behaviour, not 'trust us.'",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on an AI build",
      body:
        "The decisions that shape AI project cost and timeline happen in the first scoping weeks.",
      factors: [
        {
          name: "Model sovereignty",
          body:
            "Third-party API (cheapest, fastest) vs cloud-hosted private inference vs fully on-prem self-hosted — each layer adds real engineering work and operational overhead. Drive this by data sensitivity and regulatory requirements, not by preference.",
        },
        {
          name: "Latency requirements",
          body:
            "A batch summarisation pipeline tolerates seconds. A chat copilot demands sub-second to feel responsive. A real-time fraud scoring system needs tens of milliseconds. Each tier pushes toward different models, different infra, and different cost envelopes.",
        },
        {
          name: "Data integration depth",
          body:
            "A RAG system over public documents is light. A RAG system over internal Notion + Slack + Salesforce + 10 SaaS tools is an integration project with AI on top. Most teams underestimate the data-access engineering.",
        },
        {
          name: "Evaluation rigour",
          body:
            "A prototype with vibes-based quality is cheap. A production system with golden-set evals, CI/CD for prompts, and quality regression alerts is an additional system of its own — but without it you're flying blind.",
        },
        {
          name: "Autonomy level",
          body:
            "An AI that suggests (human confirms) is simpler than an AI that acts (human audits after). Full-agent systems with external side effects — sending emails, making purchases, modifying data — require stronger evals, bounded autonomy, and explicit rollback logic.",
        },
        {
          name: "Scale target",
          body:
            "An internal tool used by 20 people is a different build from a consumer feature used by 500K. Caching, batch processing, dedicated compute, and ops headcount all scale with user volume.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on AI builds",
      pitfalls: [
        {
          name: "Shipping without evals",
          body:
            "The single most common failure mode. Teams tune prompts by vibes, ship, then watch quality drift without knowing. Every model upgrade is a coin flip. A production AI system without an eval harness is a production AI system whose quality you can't defend when asked.",
        },
        {
          name: "Treating RAG as 'put docs in a vector DB'",
          body:
            "Naive RAG retrieves the wrong chunks as often as the right ones. Chunking strategy, re-ranking, metadata filters, query rewriting, and hybrid (keyword + vector) retrieval all matter. A RAG system where you haven't evaluated retrieval precision is a RAG system you don't trust.",
        },
        {
          name: "Unbounded token costs",
          body:
            "An agent with a recursive tool-use loop and no hard cap can burn through a month's budget in 24 hours. We've seen it multiple times in customer code. Hard caps on tokens per request, tool calls per request, and $ per user per day are non-negotiable for anything with autonomy.",
        },
        {
          name: "Single-provider concentration",
          body:
            "Provider outages happen. API deprecations happen. Rate limit incidents happen. Systems with no fallback between providers go down when the provider goes down. Route between at least two providers for any production-critical path.",
        },
        {
          name: "Ignoring PII and compliance",
          body:
            "Sending customer data into a third-party model without explicit data-retention agreements, regional routing, or redaction is how you end up with GDPR findings, SOC 2 gaps, or worse. Data governance is architectural, not optional.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.aiNeural",
      mediaSide: "right",
      body:
        "<strong>Frontier models:</strong> <strong>OpenAI</strong> (GPT-5 family, o3 reasoning), <strong>Anthropic</strong> (Claude 4 family), <strong>Google</strong> (Gemini 2.5 Pro, Flash), <strong>Meta</strong> (Llama 4), <strong>Mistral</strong>, <strong>Qwen</strong>, <strong>DeepSeek</strong>. We route deliberately between them based on task capability, cost, and latency.\n\n" +
        "<strong>Orchestration:</strong> <strong>LangChain</strong> / <strong>LangGraph</strong> when the graph of operations matters, <strong>Vercel AI SDK</strong> or <strong>Mastra</strong> for TypeScript-first apps, <strong>LlamaIndex</strong> for RAG-heavy builds, <strong>Inngest</strong> or <strong>Temporal</strong> for durable agent execution.\n\n" +
        "<strong>Vector and retrieval:</strong> <strong>PostgreSQL + pgvector</strong> for most production use cases; <strong>Qdrant</strong>, <strong>Weaviate</strong>, <strong>Pinecone</strong> for larger scale or specialist features; <strong>Elasticsearch</strong> or <strong>OpenSearch</strong> for hybrid keyword + vector; <strong>Cohere Rerank</strong> and <strong>Voyage AI</strong> re-ranking as standard.\n\n" +
        "<strong>Evaluation:</strong> <strong>Langsmith</strong>, <strong>Langfuse</strong>, <strong>Braintrust</strong>, <strong>Promptfoo</strong>, <strong>DeepEval</strong>, and custom eval harnesses for domain-specific quality. LLM-as-judge evaluation paired with golden datasets.\n\n" +
        "<strong>Observability:</strong> <strong>Langfuse</strong> for request tracing; <strong>Arize</strong> / <strong>Fiddler</strong> for drift detection at scale; <strong>Helicone</strong> or <strong>Portkey</strong> for lightweight cost and latency tracking. OpenTelemetry exporters into existing APM stacks (<strong>Datadog</strong>, <strong>New Relic</strong>, <strong>Honeycomb</strong>).\n\n" +
        "<strong>Self-hosted inference:</strong> <strong>vLLM</strong> or <strong>TGI</strong> on a Kubernetes cluster, <strong>Ollama</strong> for light local deployments, <strong>Modal</strong> / <strong>Replicate</strong> / <strong>Banana</strong> for serverless GPU inference.\n\n" +
        "<strong>Specialist ML:</strong> <strong>scikit-learn</strong> / <strong>XGBoost</strong> for tabular; <strong>PyTorch</strong> for custom training; <strong>ONNX</strong> for cross-runtime deployment; <strong>TensorRT</strong> for latency-critical GPU inference.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on AI builds",
      mediaToken: "topic.devWorking",
      mediaSide: "left",
      body:
        "We start with the <strong>eval harness</strong>, not the prompt. The first week is spent defining what 'working' means — what's the golden dataset, what's the acceptance threshold, how do we measure regressions. Without that, every subsequent week is guesswork.\n\n" +
        "Our engagement model is a senior AI engineer (prompt + agent + eval experience), a backend engineer for orchestration and observability, a full-stack engineer for the integration surfaces, and a data engineer when the RAG stack is substantial. For specialised domains (compliance, healthcare, legal) we bring in domain expertise for the eval-set authoring and manual quality review.\n\n" +
        "We ship to production behind a feature flag, with A/B testing against the existing flow wherever possible, so quality and cost comparisons are measurable from day one. <em>Production AI is a continuous product, not a launch.</em> We include post-launch eval cadences, cost budget reviews, and quarterly model upgrade evaluation in every engagement.",
    },

    {
      type: "UseCases",
      heading: "AI work we've shipped",
      items: [
        {
          company: "Lumenfield AI",
          stage: "Series A",
          region: "United States",
          situation:
            "Lumenfield needed an agent platform that could run cross-tool workflows (Salesforce + Slack + email + custom APIs) for enterprise ops teams. Their internal prototype worked in a notebook but cost $12K/month in tokens for 30 beta users — unsustainable. We rebuilt the orchestration around Claude 4 Sonnet with GPT-5-mini classification for routing, added response caching for frequently-repeated tool outputs, implemented bounded autonomy caps, and shipped a production eval harness with 300-case golden sets per tool. Per-user cost dropped about 70% and Series A due-diligence accepted the cost model.",
          outcomeNumber: "~70% per-user cost reduction",
          outcomeSecondary: "Multi-model routing · 300-case golden-set eval harness",
        },
        {
          company: "Seraph Systems",
          stage: "Seed",
          region: "Germany / EU",
          situation:
            "Seraph builds an LLM-native analytics product for regulated European banks and insurers. Data residency was the binding constraint — customer data could not leave EU infrastructure. We architected the system on Mistral Large deployed via Azure OpenAI in Frankfurt, with pgvector retrieval and evaluation running entirely in-region. RAG quality reached 92% retrieval precision on customer golden sets, and the first three bank customers onboarded with zero compliance blockers.",
          outcomeNumber: "92% retrieval precision · 0 compliance blockers",
          outcomeSecondary: "In-region Azure/Mistral · pgvector stack shipped",
        },
        {
          company: "Orion Copilot",
          stage: "Post-Series A",
          region: "Singapore",
          situation:
            "Orion wanted a customer-support copilot for Asian-market fintech support teams — multilingual, domain-specific, integrated with Zendesk. The hard problem was accurate handling of financial terminology across eight languages and five product lines. We built a multi-model routing architecture (Gemini for translation, Claude for complex reasoning, GPT-5-mini for classification), a 2,000-case evaluation harness covering each language-product combination, and deployed with careful per-locale prompt templates. Support team handle-time dropped about 40% and customer CSAT on AI-assisted tickets exceeded human-only baseline.",
          outcomeNumber: "~40% handle-time reduction",
          outcomeSecondary: "8-language copilot · 2,000-case eval harness live",
        },
        {
          company: "Mosaic Intelligence",
          stage: "Seed",
          region: "UAE",
          situation:
            "Mosaic is a multi-modal intelligence platform for compliance reviewers processing document-heavy regulatory submissions (KYC, AML, sanctions). The combination of document OCR, structured extraction, and LLM-based reasoning had failed on two prior attempts at other vendors. We built a pipeline combining Claude 4 Opus for reasoning, Gemini 2.5 Pro for long-document analysis, a Document AI OCR layer, and an agentic workflow for multi-pass review. Compliance officer review time per case reduced about 60% with measurable accuracy improvements on the team's golden dataset.",
          outcomeNumber: "~60% review-time reduction",
          outcomeSecondary: "OCR + multi-model reasoning pipeline · agentic review loop",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our AI work the through-line is systems that stay working. Eval harnesses that catch regressions on model upgrades. Cost controls that survive load spikes. Observability that tells you why a response went wrong, not just that it did.",
      stats: [
        { value: "40+", label: "AI systems in production" },
        { value: "8", label: "Frontier model providers integrated" },
        { value: "200M+", label: "Inferences served monthly across builds" },
        { value: "Zero", label: "Runaway-cost incidents on our builds" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building AI work with us",
      body:
        "We've been shipping production LLM systems since the GPT-3.5 era, through the Claude 2 breakthrough, into the frontier-reasoning era of GPT-5 and Claude 4. <em>Our engineering discipline was shaped by watching teams hit the same eval, cost, and observability problems repeatedly — and building for those problems from day one.</em>\n\n" +
        "We ship the full stack under one roof: model routing, RAG pipelines, agent orchestration, evaluation, observability, cost control, and the integration surfaces that connect AI to real business workflows. One team, one architecture document, one eval harness. No handoffs between a 'prompt engineer,' a 'data engineer,' and a 'full-stack consultant.'\n\n" +
        "And we pair AI engineering with the positioning work your product will need — how to describe AI honestly without overclaiming, how to handle edge cases that become PR stories, how to communicate limits to enterprise procurement teams. <strong>In 2026, shipping AI is an engineering problem and a trust-building problem simultaneously. We build for both.</strong>",
    },
  ],

  testimonials: [
    { id: "fanadise-founder" },
    { id: "aurelia-jon" },
    { id: "cobox-adaa" },
  ],

  faqs: [
    {
      q: "What is AI development in 2026?",
      a: "<strong>AI development in 2026 is mostly systems engineering around foundation models — not training models from scratch.</strong> The frontier providers (OpenAI, Anthropic, Google, Meta, Mistral) solved the core intelligence problem. The engineering work has moved to model routing, retrieval pipelines, agent orchestration, evaluation harnesses, observability, cost control, and the integration surfaces that put AI inside real business workflows. Most production AI projects spend more engineering time on the scaffolding than on the prompts.",
    },
    {
      q: "What drives the cost of an AI build?",
      a: "<strong>Cost is driven by model sovereignty choice, latency requirements, data integration depth, evaluation rigour, autonomy level, and scale target — not by model API costs, which are usually a minor line item compared to engineering.</strong> A third-party API RAG system over public docs is light. A self-hosted multi-agent system processing 100M requests monthly over integrated enterprise data with SOC 2 compliance is an order of magnitude heavier. We scope only after the sovereignty and data-integration decisions are locked.",
    },
    {
      q: "Do I need RAG, agents, or fine-tuning?",
      a: "<strong>Usually RAG and better prompting solve 80% of problems. Agents matter when tasks can't be collapsed into a single prompt. Fine-tuning is rarely the right answer for product behaviour and often the right answer for style or format.</strong> Most teams over-index on fine-tuning because it feels serious — in practice, a well-built RAG system with good evals and the right foundation model outperforms most fine-tuning attempts. We evaluate the options before recommending.",
    },
    {
      q: "What's included in a full AI build?",
      a: "<strong>Model routing and selection, context engineering or RAG pipeline, agent orchestration where the task demands it, an evaluation harness with golden datasets, observability (tracing, cost tracking, quality metrics), data governance and compliance posture, and the integration surfaces.</strong> We ship with CI/CD for prompts, A/B testing infrastructure against existing flows, and post-launch quality monitoring. What isn't included: the underlying business data quality (we ingest whatever you have; garbage-in still applies), and the organizational change management to adopt AI-assisted workflows.",
    },
    {
      q: "Which models should I use?",
      a: "<strong>It depends on task type and constraints, not preference.</strong> Claude 4 Opus for complex multi-step reasoning. GPT-5-mini for cheap classification and tool routing. Gemini 2.5 Flash for long-context summarisation. Llama 4 or Qwen 3 when data sovereignty or cost dominate. Most serious production systems route between at least two providers for reliability and cost optimisation. We tend to evaluate three or four on the actual task before committing.",
    },
    {
      q: "How do you handle data privacy for enterprise AI?",
      a: "<strong>Through architectural choices — not policy documents.</strong> For sensitive data, we deploy open-source models (Llama, Qwen, DeepSeek) on customer infrastructure via vLLM or TGI, or use sovereign cloud endpoints (Azure OpenAI EU, AWS Bedrock with BYOK, GCP Vertex in-region). For less sensitive flows, we negotiate zero-retention agreements with API providers. Prompt redaction, field-level encryption, and regional routing all happen at the data-access layer, not as an afterthought. The architecture maps to the sensitivity, not the other way around.",
    },
    {
      q: "How do you measure whether an AI system is actually working?",
      a: "<strong>Through an evaluation harness built before the prompt, plus ongoing production monitoring.</strong> Three tiers: unit-level tests for deterministic behaviours, golden-dataset tests for open-ended quality against a curated reference set, and production drift monitoring for live quality (flag rates, completion success, user satisfaction signals). Every prompt change runs against the golden set before deployment. Every model upgrade triggers a re-evaluation. No golden set, no ship.",
    },
    {
      q: "When should a team NOT build an AI feature?",
      a: "<strong>When the feature doesn't actually improve user outcomes compared to a deterministic alternative, or when the error modes are more expensive than the efficiency gains.</strong> AI that gets 95% accurate on a task where 5% errors produce customer complaints or compliance incidents is worse than rules-based logic that gets 100% accurate on 80% of cases and escalates the rest. Build AI when the task genuinely benefits from open-ended language understanding or non-deterministic reasoning. Skip it when a rule or a classifier is sufficient.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "AI & Automation", href: "/services/development/ai", active: true },
    { label: "Mobile & Web Apps", href: "/services/development/mobile-web" },
    { label: "Blockchain L0/L1/L2", href: "/services/development/blockchain-layer" },
    { label: "Trading Bots & Tools", href: "/services/development/trading" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "Exchange Development", href: "/services/development/exchange" },
  ],

  finalCta: {
    light: "Ship AI",
    bold: "that stays shipped.",
    subtitle: "Evaluation harness, observability, cost control — from day one, not after the first incident.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
