You are an expert Frontend Engineer and UI/UX Designer. Build a highly polished, interactive, responsive single-page web application titled "AI Learning Map" using Next.js (App Router), TypeScript, Tailwind CSS, and Lucide React icons (or Framer Motion for animations).

### CONTEXT & PURPOSE
The web app visualizes a progressive learning path for engineers mastering Generative AI:
Machine Learning → NLP / Text Data → Attention & GPT → RAG → Agent → Multi-Agent

It incorporates continuous "Evaluation Mindset" and "Production Mindset" bars across the entire journey. All content provided below is grounded in 5 key AI textbooks (Grokking Machine Learning, Build a LLM From Scratch, AI Engineering, AI Agents and Applications, AI Agents in Action).

---

### PAGE STRUCTURE & SECTIONS

1. **Hero Header & Navigation Bar**
   - Title: "AI Learning Map" with a gradient text effect.
   - Subtitle: "A Comprehensive Grounded Roadmap from ML Fundamentals to Multi-Agent Engineering".
   - Quick jump links to sections: [Learning Path], [Book Roles], [Mindsets], [Hardest Phase], [Relationships].

2. **Visual Interactive Learning Path (Diagram Component)**
   - Display a horizontal flow on desktop (vertical on mobile) connecting 6 stages:
     `ML` → `NLP / Text Data` → `Attention & GPT` → `RAG` → `Agent` → `Multi-Agent`
   - Beneath or framing the diagram, display two prominent indicator rails/banners:
     - 🛡️ **Evaluation Mindset Rail** (Evaluation-Driven Development, Automatic Benchmarks)
     - ⚙️ **Production Mindset Rail** (Latency, API Cost, Guardrails, Data Flywheel)
   - Clicking any stage node smoothly scrolls to or opens its detailed card.

3. **Stage Details Grid / Cards Section**
   Render 6 rich interactive cards for each learning stage:
   
   - **Stage 1: Machine Learning Fundamentals**
     - Short Definition: Set of techniques enabling computers to make decisions from data/experience rather than rigid rules.
     - Role in AI: Core engine transitioning AI from rule-based systems to data-driven learning.
     - Inherits From: Algorithmic thinking & mathematical statistics.
     - Simple Example: Email Spam/Ham classifier predicting based on word frequencies.
     - Keywords: `Remember-Formulate-Predict`, `Supervised Learning`, `Perceptron`, `Weights & Bias`, `Loss Function`.
     - Key Sources: *Grokking Machine Learning* (Ch. 1, 2, 5).

   - **Stage 2: NLP & Text Data Representation**
     - Short Definition: Intersection field enabling computers to process, parse, and encode unstructured human text into semantic numerical vectors.
     - Role in AI: Converts unstructured text into dense vector embeddings for neural network processing.
     - Inherits From: Machine Learning classification algorithms applied to textual sequence features.
     - Simple Example: Mapping alien words "Aack beep" into a frequency vector `[1]` to classify sentiment.
     - Keywords: `Unstructured Text`, `Tokenization`, `Vocabulary`, `Embeddings`, `Vector Space`.
     - Key Sources: *Grokking Machine Learning* (Ch. 5); *Build a Large Language Model From Scratch* (Ch. 1, 2).

   - **Stage 3: Attention & GPT (Transformers)**
     - Short Definition: Deep neural network architecture utilizing Self-Attention mechanisms and Decoder-only blocks for autoregressive next-token prediction.
     - Role in AI: Replaced sequential RNN bottlenecks with parallelizable computations, triggering emergent reasoning capabilities at scale.
     - Inherits From: Tokenization/Embeddings from NLP, extending them with trainable Query-Key-Value attention matrices.
     - Simple Example: Autocompleting text: "Breakfast is the..." → "most important meal of the day".
     - Keywords: `Self-Attention`, `Transformer Decoder`, `Next-Token Prediction`, `Autoregressive`, `Emergent Capabilities`.
     - Key Sources: *Build a Large Language Model From Scratch* (Ch. 1, 3, 4); *AI Engineering* (Ch. 2).

   - **Stage 4: RAG Systems (Retrieval-Augmented Generation)**
     - Short Definition: Design pattern combining external vector knowledge retrieval with LLM generation at query time.
     - Role in AI: Grounds LLM outputs in verified external facts, drastically reducing hallucinations without retraining model weights.
     - Inherits From: LLM generation capabilities, augmented with dynamic context window expansion from vector stores.
     - Simple Example: Internal HR chatbot answering exact policy questions from uploaded PDF handbooks.
     - Keywords: `Vector Database`, `Semantic Retrieval`, `Grounding`, `Hallucination Mitigation`, `Context Window`.
     - Key Sources: *AI Engineering* (Ch. 6); *AI Agents and Applications* (Ch. 1, 6, 7); *AI Agents in Action* (Ch. 8).

   - **Stage 5: AI Agents (Single-Agent Systems)**
     - Short Definition: Autonomous system using an LLM as a central reasoning brain to perceive environments, plan steps, and invoke external tools/APIs.
     - Role in AI: Shifts LLMs from passive text generators (Chatbots) to active decision-makers executing multi-step workflows.
     - Inherits From: RAG (as a retrieval tool), prompt engineering, and chain-of-thought reasoning loops.
     - Simple Example: Travel agent receiving a prompt, checking flight APIs, querying weather data, and booking trips.
     - Keywords: `Tool Calling / Function Calling`, `State Management`, `ReAct Pattern`, `Action Loop`, `Dynamic Planning`.
     - Key Sources: *AI Agents and Applications* (Ch. 1, 5, 11); *AI Agents in Action* (Ch. 1, 8); *AI Engineering* (Ch. 2).

   - **Stage 6: Multi-Agent Systems**
     - Short Definition: Architecture coordinating multiple specialized agents with distinct personas to collaborate, critique, and solve complex goals.
     - Role in AI: Overcomes single-agent task complexity limits through modular specialization and parallel execution.
     - Inherits From: Single-agent tool execution, organized into state graphs with supervisor orchestrators.
     - Simple Example: Software team with Coder Agent, Tester Agent, and Reviewer Agent iterating until unit tests pass.
     - Keywords: `Supervisor Pattern`, `Peer Critique`, `Agent Collaboration`, `State Graph`, `Distributed Orchestration`.
     - Key Sources: *AI Agents and Applications* (Ch. 12); *AI Agents in Action* (Ch. 1).

4. **Curriculum Books Section**
   Display a clean grid featuring the 5 foundational books and their exact roles:
   - **Grokking Machine Learning (Luis G. Serrano):** Builds intuitive first-principles understanding of ML through the *Remember-Formulate-Predict* framework.
   - **Build a Large Language Model From Scratch (Sebastian Raschka):** Bottom-up code guide implementing every GPT Transformer component from scratch in PyTorch.
   - **AI Engineering (Chip Huyen):** Top-down system engineering architecture for adapting Foundation Models, building evaluation pipelines, and deploying to production.
   - **AI Agents and Applications (Roberto Infante):** Practical blueprint for LLM application patterns (Engines, Chatbots, Agents) using LangChain & LangGraph.
   - **AI Agents in Action (Micheal Lanham):** Advanced deep-dive into agentic architecture, 5 core agentic components, and multi-agent coordination.

5. **Mindsets Integration Section (Evaluation & Production)**
   - **Evaluation Mindset:** Evaluation-Driven Development (EDD) where automated benchmarks (AI-as-a-judge) are defined BEFORE app development due to open-ended LLM outputs.
   - **Production Mindset:** Engineering for probabilistic systems—managing API costs, latency, guardrails, and user feedback loops (Data Flywheel).
   - **Why Continuous?** The "Last-Mile Challenge": Demos take 1 week (0 to 60%), but production-ready reliability takes months (60% to 95%+). Without continuous evaluation and production safeguards, multi-agent systems suffer non-deterministic failures and runaway API costs.

6. **The Hardest Phase Analysis Section**
   - Highlight: **Transitioning from RAG/Single-Agent to Multi-Agent Systems (under Production & Evaluation constraints)**.
   - Detailed Reasons:
     1. *Compounded Nondeterminism:* Multi-agent interactions create recursive feedback loops and edge-case drift.
     2. *Trajectory Evaluation:* Evaluating multi-agent systems requires grading intermediate tool choices and reasoning paths, not just final output text.
     3. *The Last-Mile Bottleneck:* Uncovered edge cases and hallucinations require months of systematic iteration to reach enterprise reliability thresholds.

7. **Core Relationships Matrix / Accordion**
   - **NLP ──► LLM:** NLP defines the problem domain; LLMs represent the state-of-the-art Transformer solution for natural language processing.
   - **Foundation Model ──► LLM:** Foundation Models encompass all multimodal base models (vision, audio, text); LLMs are text-focused foundation models.
   - **LLM ──► RAG:** LLM provides the core text understanding/generation engine; RAG provides dynamic external memory without weight updates.
   - **RAG ──► Agent:** RAG transitions from a static pipeline into an active tool that agents dynamically invoke during planning.
   - **Agent ──► Multi-Agent:** Single agents handle linear loops; multi-agent systems divide complex domains into specialized collaborative networks.

---

### DESIGN REQUIREMENTS
- Modern Tech-stack Aesthetics: Dark mode background (`#0B0F17` or similar deep slate), neon subtle accents (cyan, purple, emerald), frosted glass cards (`backdrop-blur-md bg-white/5 border border-white/10`).
- Responsive Layout: Mobile-first design, fluid flex/grid layouts.
- Interactive Features: Hover state highlights on keywords, accordion toggles for book summaries/relationships, smooth scroll navigation.
- Typography: Clean sans-serif (Inter or System UI) with monospace tags for keywords.