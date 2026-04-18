// Authored-companies registry.
// Every invented company name used in a use-case or authored testimonial must
// be appended here. Names must not repeat across pages — the validator in
// scripts/validate-pages.ts checks this registry for duplicates.
//
// Add an entry immediately when a new company name is introduced, alongside
// the page slug that introduced it and a one-line note. This prevents "Meridian
// Exchange" showing up on two different pages with two different outcomes.

export interface AuthoredCompany {
  name: string;                 // exact display name used in prose
  firstUsedOn: string;          // page slug, e.g. "/services/development/exchange"
  industry: string;             // short tag for future filtering
  region?: string;
  note?: string;                // brief context on who they are in the story
}

export const authoredCompanies: AuthoredCompany[] = [
  // Start empty — entries get appended as pages are written in Wave 1 onward.
];

// ---------------------------------------------------------------------------
// Helper (used by authoring flow + validator)
// ---------------------------------------------------------------------------

export function nameIsTaken(name: string): boolean {
  const normalised = name.trim().toLowerCase();
  return authoredCompanies.some((c) => c.name.trim().toLowerCase() === normalised);
}

/**
 * Idempotent registration.
 *
 * If the same name+firstUsedOn tuple is registered repeatedly (HMR re-imports,
 * build validator re-evaluations), this is a no-op.
 *
 * If the same name is registered against a DIFFERENT page slug, that indicates
 * an actual cross-page collision. We log a console warning so the dev sees it,
 * but we do NOT throw — throwing at module-eval time breaks HMR and the
 * validator. The validator in `scripts/validate-pages.ts` is the authoritative
 * duplicate check (see `checkAuthoredCompanies`).
 */
export function registerCompany(entry: AuthoredCompany): void {
  const normalised = entry.name.trim().toLowerCase();
  const existing = authoredCompanies.find((c) => c.name.trim().toLowerCase() === normalised);
  if (existing) {
    if (existing.firstUsedOn !== entry.firstUsedOn) {
      // Cross-page collision — validator will flag this as a hard failure.
      // eslint-disable-next-line no-console
      console.warn(
        `[authored-companies] Name "${entry.name}" is used on both "${existing.firstUsedOn}" and "${entry.firstUsedOn}". Validator will fail the build.`,
      );
    }
    return; // idempotent — same tuple or already reported; do nothing
  }
  authoredCompanies.push(entry);
}
