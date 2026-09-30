# P — Design & Implement AI Learning Map UI

## 1. METADATA

> - **Role:** PRIMARY
> - **Skills:** `$ui-ux-pro-max` (required: derive the visual system, responsive layout, interaction patterns, accessibility, and UI quality), `$frontend-expert` (required: implementation quality), `$nextjs-expert` (if available: Next.js App Router conventions)
> - **Interaction mode:** plan-then-implement
> - **Output mode:** code change
> - **Approval gate:** review the proposed UI direction before major implementation if the workflow supports an approval gate
> - **Canonical output:** current Next.js project
> - **Target:** responsive single-page web application
> - **Stack:** Next.js App Router + TypeScript + Tailwind CSS + Lucide React
> - **Optional:** Framer Motion only when animation improves comprehension or interaction
> - **Primary specification:** `AI Learning Map` docs/specification.md

---

## 2. WHEN TO USE

Use this prompt when the **AI Learning Map content/specification has already been defined and accepted**, and the next task is to transform that specification into a polished, usable, responsive web interface.

This phase is NOT for redefining the AI curriculum or researching new educational content.

The goal is to:

**Specification → UI/UX System → Component Architecture → Responsive Implementation → Validation**

Use the supplied specification as the source of truth.

---

## 3. INPUTS

Read and understand all available project context before making changes.

### Required inputs

1. **AI Learning Map specification**
   - Contains the six-stage learning journey:
     `Machine Learning → NLP / Text Data → Attention & GPT → RAG → Agent → Multi-Agent`
   - Contains definitions, roles, inheritance, examples, keywords, and textbook sources.
   - Contains Curriculum Books section.
   - Contains Evaluation Mindset and Production Mindset.
   - Contains Hardest Phase analysis.
   - Contains Core Relationships.

2. **Existing Next.js project**
   - Inspect the current project structure.
   - Inspect existing dependencies.
   - Inspect Tailwind/global styles.
   - Reuse working configuration instead of replacing it unnecessarily.

3. **Design requirements from specification**
   - Dark technical aesthetic.
   - Deep slate background.
   - Subtle cyan / purple / emerald accents.
   - Frosted-glass surfaces.
   - Responsive layout.
   - Interactive learning path.
   - Smooth navigation.
   - Accessible interaction.

### Skills

Use `$ui-ux-pro-max` before implementation to determine:

- visual hierarchy;
- design system;
- typography;
- spacing;
- responsive behavior;
- component patterns;
- information density;
- interaction states;
- accessibility;
- appropriate animation;
- visual consistency.

Use frontend/Next.js skills to validate implementation decisions.

Do NOT skip the UI/UX reasoning and immediately generate arbitrary components.

---

## 4. TASK

Design and implement a polished **single-page AI Learning Map** based on the supplied specification.

### Step 1 — Understand the information architecture

Identify the hierarchy of the page and preserve this learning progression:

```text
AI Learning Map
        ↓
Interactive Learning Path
        ↓
Evaluation + Production Mindset Rails
        ↓
Six Learning Stage Details
        ↓
Curriculum Books
        ↓
Evaluation & Production Mindsets
        ↓
Hardest Phase
        ↓
Core Relationships
```

The page must feel like an **interactive technical learning map**, NOT a generic SaaS landing page.

---

### Step 2 — Establish the UI/UX direction

Use `$ui-ux-pro-max` to define a coherent design system before implementation.

The design should communicate:

- progression;
- technical depth;
- relationships between concepts;
- increasing system complexity;
- continuous evaluation;
- continuous production awareness.

Prefer a modern dark technical interface.

Suggested visual language:

```text
Background
#0B0F17 / deep slate

Surfaces
glass / subtle elevated dark panels

Primary accents
cyan
purple
emerald

Typography
Inter / clean system sans-serif

Technical labels
monospace

Borders
subtle white transparency

Effects
soft glow only where hierarchy benefits
```

Do not mechanically use every suggested color or effect.

Use the skill to create a balanced system.

---

### Step 3 — Design the Learning Path as the primary visual

The Learning Path must be the visual centerpiece.

Desktop:

```text
[ ML ]
   →
[ NLP ]
   →
[ Attention / GPT ]
   →
[ RAG ]
   →
[ Agent ]
   →
[ Multi-Agent ]
```

Use meaningful connectors to communicate progression.

Each node should have:

- stage number;
- short stage name;
- icon;
- short descriptor;
- hover state;
- active/focus state;
- click interaction.

Clicking a node should smoothly navigate to the corresponding Stage Detail.

The roadmap must NOT look like six unrelated cards.

It should visually communicate that each stage builds toward increasingly capable AI systems.

### Mobile transformation

Do NOT squeeze the desktop roadmap horizontally.

Transform it into a vertical timeline:

```text
● ML
│
● NLP
│
● Attention / GPT
│
● RAG
│
● Agent
│
● Multi-Agent
```

Maintain the same semantic order.

---

### Step 4 — Integrate the two continuous mindsets

Evaluation Mindset and Production Mindset are NOT Stage 7 and Stage 8.

They must visually span the entire learning journey.

Represent them as persistent rails/bands beneath or around the roadmap.

Example conceptual representation:

```text
ML → NLP → GPT → RAG → Agent → Multi-Agent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Evaluation Mindset
Evaluate • Benchmark • Analyze Errors

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Production Mindset
Latency • Cost • Guardrails • Feedback
```

The UI must communicate:

> Every stage should be evaluated.

and:

> Every stage should eventually be considered under real-world production constraints.

---

### Step 5 — Implement Stage Details

Create six reusable Stage Detail components/cards.

Each stage must preserve the supplied specification content:

- Stage number;
- title;
- short definition;
- role in AI;
- inherits from;
- simple example;
- keywords;
- key sources.

Do not render these as six huge identical text boxes.

Create clear internal hierarchy.

For example:

```text
01 / MACHINE LEARNING

Machine Learning Fundamentals

Short explanation...

ROLE IN AI
...

INHERITS FROM
...

SIMPLE EXAMPLE
...

KEYWORDS
[Supervised Learning] [Perceptron] [Loss Function]

SOURCE
Grokking Machine Learning · Ch. 1, 2, 5
```

Keywords should behave visually like technical tags.

Source information should be visible but lower in hierarchy than the educational content.

---

### Step 6 — Implement supporting sections

#### Curriculum Books

Create a grid for the five books:

- Grokking Machine Learning
- Build a Large Language Model From Scratch
- AI Engineering
- AI Agents and Applications
- AI Agents in Action

Each item should communicate:

**Book → Role in this learning journey**

Do not fabricate book covers.

If no legitimate local image assets exist, use typography, icons, stage associations, or abstract book representations instead.

Allow summaries to expand/collapse if this improves information density.

---

#### Mindsets

Create a dedicated comparison/integration section for:

**Evaluation Mindset**

and

**Production Mindset**

Make their distinction immediately understandable:

```text
Evaluation
"Does the AI system actually work well?"

Production
"Can the AI system work reliably in the real world?"
```

Then explain why both span the entire roadmap.

Represent the Last-Mile Challenge visually rather than only through a paragraph when appropriate.

---

#### Hardest Phase

Visually emphasize:

**RAG / Single-Agent → Multi-Agent under Evaluation & Production constraints**

Explain the three supplied difficulties:

1. Compounded Nondeterminism
2. Trajectory Evaluation
3. Last-Mile Bottleneck

This section should feel like the complexity peak of the roadmap.

---

#### Core Relationships

Implement the five relationships:

```text
NLP → LLM
Foundation Model → LLM
LLM → RAG
RAG → Agent
Agent → Multi-Agent
```

Use an accessible accordion or relationship visualization.

Each relationship should answer:

> What does the first concept provide, and how does the second concept extend/use it?

---

### Step 7 — Component architecture

Prefer reusable components such as:

```text
components/
├── navbar
├── hero
├── learning-path
├── stage-node
├── mindset-rail
├── stage-card
├── books-grid
├── book-card
├── mindsets-section
├── hardest-phase
└── relationships-accordion
```

Exact filenames are flexible.

Do not over-engineer components that are used only once if abstraction provides no benefit.

Keep educational content/data separate from presentation where practical.

---

## 5. CONSTRAINTS

### Content

The supplied AI Learning Map specification is the **source of truth**.

Do NOT:

- invent textbook quotations;
- invent chapter references;
- change provided sources;
- introduce unsupported technical claims;
- rewrite relationships in ways that change their meaning;
- treat NLP, LLM, RAG, Agent, and Multi-Agent as simple inheritance categories.

This diagram represents a **learning progression**, not a strict taxonomy.

---

### Visual

Avoid common AI-generated landing-page patterns.

Do NOT:

- create an oversized hero;
- fill the page with random gradients;
- use excessive neon glow;
- make every card visually identical;
- add decorative charts with meaningless data;
- use animations that distract from learning;
- hide important educational content behind unnecessary interactions.

Visual effects must support comprehension.

---

### Interaction

Use subtle interactions:

- smooth scrolling;
- hover/focus states;
- roadmap highlighting;
- keyword interactions;
- accordion expand/collapse;
- restrained entrance transitions.

Respect:

`prefers-reduced-motion`.

---

### Responsive

Validate at minimum:

- 375px
- 768px
- 1280px
- 1440px+

There must be:

- no horizontal overflow;
- no unreadable roadmap;
- no overlapping connectors;
- no clipped text;
- no inaccessible controls.

---

### Accessibility

Use:

- semantic HTML;
- proper heading hierarchy;
- keyboard navigation;
- visible focus indicators;
- sufficient contrast;
- appropriate ARIA attributes;
- buttons for interactive controls instead of clickable generic divs.

---

### Engineering

Use:

- Next.js App Router;
- TypeScript;
- Tailwind CSS;
- Lucide React.

Use Framer Motion only when justified.

Prefer Server Components.

Use `"use client"` only where interaction requires it.

Do not unnecessarily replace:

- package configuration;
- Tailwind configuration;
- existing project structure;
- working dependencies.

Avoid adding dependencies that are not needed.

---

## 6. EXPECTED OUTPUT

Deliver a complete working implementation of the **AI Learning Map**.

The final UI must include:

1. Compact Hero + Navigation
2. Interactive six-stage Learning Path
3. Evaluation Mindset Rail
4. Production Mindset Rail
5. Six Stage Detail views
6. Five-book Curriculum section
7. Evaluation vs Production section
8. Hardest Phase analysis
9. Core Relationships section
10. Responsive mobile/desktop behavior
11. Accessible interactions
12. Polished technical dark-mode visual system

### Required behavior

- Navigation links scroll to sections.
- Learning Path nodes navigate to Stage Details.
- Desktop roadmap is horizontal.
- Mobile roadmap becomes vertical.
- Relationships accordion is keyboard accessible.
- Interactive elements have hover/focus states.
- Content remains readable without animations.

### Quality target

The result should feel like:

> **an interactive engineering learning map / technical knowledge visualization**

rather than:

> a marketing landing page with AI-related text.

---

## 7. SAVE / UPDATE + HUMAN REVIEW + VALIDATION

### Before implementation

1. Read the complete specification.
2. Inspect the existing project.
3. Run `$ui-ux-pro-max`.
4. Determine:
   - visual direction;
   - design tokens;
   - layout system;
   - component hierarchy;
   - responsive strategy;
   - interaction strategy.

If the workflow supports an approval gate, present the proposed UI direction before making major visual implementation decisions.

Do not modify the educational specification itself.

---

### Implementation

After the UI direction is accepted or when approval is not required:

1. Implement the page.
2. Reuse existing project configuration.
3. Keep components maintainable.
4. Preserve all supplied educational content.
5. Ensure the roadmap remains the visual centerpiece.

---

### Validation

Before declaring completion, verify:

- [ ] All 6 stages exist in the correct order.
- [ ] Learning Path clearly communicates progression.
- [ ] Desktop roadmap is horizontal.
- [ ] Mobile roadmap is vertical.
- [ ] Evaluation Mindset spans the journey.
- [ ] Production Mindset spans the journey.
- [ ] Every Stage Detail contains all required information.
- [ ] All 5 books are represented.
- [ ] Hardest Phase contains all 3 supplied reasons.
- [ ] All 5 Core Relationships are represented.
- [ ] Navigation works.
- [ ] Stage navigation works.
- [ ] Accordions are keyboard accessible.
- [ ] No mobile horizontal overflow.
- [ ] No obvious contrast/accessibility problems.
- [ ] No unsupported sources were invented.
- [ ] TypeScript check passes.
- [ ] Production build passes.

Run the appropriate project validation commands.

Fix implementation issues discovered during validation instead of merely reporting them.

### Human Review

At completion, provide a concise summary containing:

- UI direction chosen;
- major components created;
- important interactions;
- responsive behavior;
- files created/modified;
- validation results;
- any remaining design trade-offs requiring human judgment.

Do not change the accepted learning-map content without explicit human approval.