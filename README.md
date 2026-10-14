# SheriaGuide Kenya

Sheria kwa kila mtu · Law for everyone

SheriaGuide helps people explore practical questions about Kenyan law and compliance in plain language. Browse topic guides or ask a question to find relevant steps, cited sources, and details that still need verification.

> SheriaGuide provides general information, not legal advice. Its catalogue is a source-linked starter resource, not a complete or professionally approved legal service. Laws and agency procedures can change; confirm current requirements with the responsible agency, Kenya Law, or a qualified Kenyan advocate.

## What the app does

- Organises guidance across 16 areas of Kenyan life and law.
- Provides a catalogue of 320 process guides, with a target of at least 20 guides per area.
- Matches questions to relevant guides and links claims to their listed sources.
- Identifies details such as fees or timelines that have not been verified.
- Declines unsupported or ambiguous questions rather than inventing an answer.
- Shows source-check dates and whether a guide has received independent legal review.

The current chat uses deterministic matching against the curated catalogue. It does not call an AI provider, and no API key is needed to run the app.

## Run locally

### Requirements

- [Bun](https://bun.sh/)
- Git, if you are cloning the repository

### Install and start

```powershell
git clone <repository-url>
cd SheriaGuide_Kenya
bun install
bun run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Useful commands

| Command | Description |
| --- | --- |
| `bun run dev` | Start the local development server |
| `bun run test` | Run the automated test suite |
| `bun run lint` | Run ESLint |
| `bun run build` | Create the production build |
| `bun run preview` | Preview the production build locally |

## Project structure

| Path | Purpose |
| --- | --- |
| `src/lib/domains.ts` | The 16 topic areas and their example questions |
| `src/lib/knowledge/types.ts` | Types for guides, sources, facts, and review metadata |
| `src/lib/knowledge/entries.ts` | Curated legal knowledge catalogue |
| `src/lib/knowledge/retrieval.ts` | Matching, coverage reporting, answer rendering, and catalogue validation |
| `src/lib/ai/chat.server.ts` | Server-side chat request handling and guide selection |
| `src/routes/index.tsx` | Landing page |
| `src/routes/topics.tsx` | Topic catalogue page |
| `src/routes/chat.tsx` | Chat interface |
| `src/test/` | Routing and knowledge-base tests |

## Maintaining the knowledge catalogue

When adding or updating a guide in `src/lib/knowledge/entries.ts`:

1. Keep it focused on one distinct process; different question phrasings belong in `queryExamples`, not duplicate guides.
2. Tie every factual statement to one or more listed sources. Prefer current legislation, official government or regulator pages, and court sources where relevant.
3. Put unconfirmed fees, timelines, documents, or requirements in `notVerified`; do not infer them.
4. Record when each source was checked and set an appropriate next-review date.
5. Increment the guide's `version` and add a corresponding `changeHistory` record when its content changes.
6. Keep `legalReviewStatus` as `pending` unless a Kenyan legal professional has actually reviewed the guide; record reviewer details only after that review.
7. Add realistic query examples and verify that they resolve to the intended guide.

Run `bun run test` after catalogue changes. The tests check source references, review metadata, question matching, topic coverage, and the 320-guide target.

## Configuration and privacy

The current source-backed chat does not require environment variables or send questions to an external AI provider. `.env.example` describes optional Gemini settings for possible future integrations; those settings are not used by the current chat. Do not put API keys or other secrets in source control.

## Legal information and limitations

Guide contents are starter information and have not necessarily been reviewed by a Kenyan legal professional. A source citation does not, by itself, establish that a guide is exhaustive, current, or applicable to a particular person's circumstances. For urgent, disputed, or case-specific matters, contact the relevant agency or seek help from a qualified advocate or legal aid provider.
