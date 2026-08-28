# Image source and licence register

Last reviewed: 28 August 2026

The repository contains image files but, for most existing files, no source URL,
creator, invoice or licence snapshot was committed. A filename or recollection is
not sufficient evidence of usage rights. Existing published files were preserved;
none were removed.

## First-party or custom assets requiring ownership evidence

| Files | Status | Required evidence |
| --- | --- | --- |
| `src/assets/firat-barca.jpg`, `apple-touch-icon.png`, `favicon.svg`, `mrfiba-mark.png` | Source record missing | Record photographer/designer or first-party creation and any release needed |
| `src/assets/solutions/*` | Source record missing | Record whether each cover/icon is first-party, commissioned, generated or licensed, with the applicable terms |

## Blog covers requiring source records

All current files under `src/assets/blog/` are marked **Source record missing**:

`Audit_ESG.jpg`, `ai-esg-efficiency-claims.jpg`,
`ai-in-esg-reporting-assistant-not-author.jpg`, `ai-materiality-judgment.jpg`,
`alphatradezone.jpg`, `automating-esg.jpg`, `california-deadline-slips.jpg`,
`carbon-clean-up.jpg`, `carbon-removal-audit-trail.jpg`, `climate-migration.jpg`,
`emission-factor-nobody-owns.jpg`, `esg-career-after-simplification.jpg`,
`esg-data-quality.jpg`, `fewer-datapoints-higher-bar.jpg`,
`how-to-restate-a-sustainability-figure.jpg`,
`limited-assurance-ai-disclosures.jpg`, `logistics-scope-3.jpg`,
`omnibus-raised-threshold-not-ambition.jpg`, `out-of-scope-not-out-of-question.jpg`,
`political-scientist-reads-a-standard.jpg`,
`reading-a-sustainability-report-sceptically.jpg`,
`reporting-boundary-acquisitions.jpg`, `spend-based-estimate-deadline.jpg`,
`the-95-percent-rule.jpg`, `the-question-that-survives-every-framework.jpg`,
`who-audits-the-esg-raters.jpg`, and `working-with-your-assurance-provider.jpg`.

## Going-forward control

`scripts/fetch_image.sh` now saves the selected Pexels photo ID, source page,
photographer and current licence URL under `docs/compliance/image-sources/` whenever
it downloads a new cover. Keep the source record and a dated licence copy. Do not
assume that this proves the provenance of images downloaded before the control was
added.
