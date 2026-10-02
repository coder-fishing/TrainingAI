export type Stage = {
  id: string;
  number: string;
  short: string;
  title: string;
  definition: string;
  role: string;
  inherits: string;
  example: string;
  keywords: string[];
  source: string;
};

export const stages: Stage[] = [
  {
    id: "ml",
    number: "01",
    short: "ML",
    title: "Machine Learning Fundamentals",
    definition:
      "Techniques enabling computers to make decisions from data and experience rather than rigid rules.",
    role: "The core engine moving AI from rule-based systems to data-driven learning.",
    inherits: "Algorithmic thinking and mathematical statistics.",
    example: "An email spam or ham classifier predicts from word frequencies.",
    keywords: [
      "Remember-Formulate-Predict",
      "Supervised Learning",
      "Perceptron",
      "Weights & Bias",
      "Loss Function",
    ],
    source: "Grokking Machine Learning · Ch. 1, 2, 5",
  },
  {
    id: "nlp",
    number: "02",
    short: "NLP",
    title: "NLP & Text Data",
    definition:
      "A field that lets computers process, parse, and encode unstructured human text as semantic numerical vectors.",
    role: "Converts text into dense vector representations for neural-network processing.",
    inherits:
      "Machine learning classification applied to textual sequence features.",
    example:
      "Map alien words ‘Aack beep’ into a frequency vector [1] to classify sentiment.",
    keywords: [
      "Unstructured Text",
      "Tokenization",
      "Vocabulary",
      "Embeddings",
      "Vector Space",
    ],
    source:
      "Grokking Machine Learning · Ch. 5; Build a Large Language Model From Scratch · Ch. 1, 2",
  },
  {
    id: "gpt",
    number: "03",
    short: "GPT",
    title: "Attention & GPT",
    definition:
      "A deep neural architecture using self-attention and decoder-only blocks for autoregressive next-token prediction.",
    role: "Replaces sequential RNN bottlenecks with parallel computation, enabling reasoning capabilities at scale.",
    inherits:
      "NLP tokenization and embeddings, extended with trainable Query-Key-Value attention.",
    example:
      "Autocomplete: ‘Breakfast is the…’ → ‘most important meal of the day.’",
    keywords: [
      "Self-Attention",
      "Transformer Decoder",
      "Next-Token Prediction",
      "Autoregressive",
      "Emergent Capabilities",
    ],
    source:
      "Build a Large Language Model From Scratch · Ch. 1, 3, 4; AI Engineering · Ch. 2",
  },
  {
    id: "rag",
    number: "04",
    short: "RAG",
    title: "RAG Systems",
    definition:
      "A pattern combining external vector knowledge retrieval with LLM generation at query time.",
    role: "Grounds outputs in verified external facts without retraining model weights.",
    inherits:
      "LLM generation augmented with dynamic context expansion from vector stores.",
    example:
      "An HR chatbot answers exact policy questions from uploaded PDF handbooks.",
    keywords: [
      "Vector Database",
      "Semantic Retrieval",
      "Grounding",
      "Hallucination Mitigation",
      "Context Window",
    ],
    source:
      "AI Engineering · Ch. 6; AI Agents and Applications · Ch. 1, 6, 7; AI Agents in Action · Ch. 8",
  },
  {
    id: "agent",
    number: "05",
    short: "Agent",
    title: "AI Agents",
    definition:
      "An autonomous system using an LLM as a reasoning brain to perceive, plan, and invoke external tools or APIs.",
    role: "Shifts LLMs from passive text generators to active multi-step decision makers.",
    inherits:
      "RAG as a retrieval tool, prompt engineering, and chain-of-thought reasoning loops.",
    example:
      "A travel agent checks flight APIs and weather data before booking trips.",
    keywords: [
      "Tool Calling",
      "State Management",
      "ReAct Pattern",
      "Action Loop",
      "Dynamic Planning",
    ],
    source:
      "AI Agents and Applications · Ch. 1, 5, 11; AI Agents in Action · Ch. 1, 8; AI Engineering · Ch. 2",
  },
  {
    id: "multi",
    number: "06",
    short: "Multi",
    title: "Multi-Agent Systems",
    definition:
      "An architecture coordinating specialized agents to collaborate, critique, and solve complex goals.",
    role: "Extends single-agent task limits with modular specialization and parallel execution.",
    inherits:
      "Single-agent tool execution, organized into state graphs with supervisor orchestrators.",
    example:
      "Coder, Tester, and Reviewer agents iterate until unit tests pass.",
    keywords: [
      "Supervisor Pattern",
      "Peer Critique",
      "Agent Collaboration",
      "State Graph",
      "Distributed Orchestration",
    ],
    source: "AI Agents and Applications · Ch. 12; AI Agents in Action · Ch. 1",
  },
];

export const books = [
  [
    "Grokking Machine Learning",
    "Luis G. Serrano",
    "Builds intuitive first-principles understanding through Remember-Formulate-Predict.",
    "01 · 02",
  ],
  [
    "Build a Large Language Model From Scratch",
    "Sebastian Raschka",
    "Bottom-up GPT transformer implementation in PyTorch.",
    "02 · 03",
  ],
  [
    "AI Engineering",
    "Chip Huyen",
    "Foundation models, evaluation pipelines, and production deployment.",
    "03 · 04 · 05",
  ],
  [
    "AI Agents and Applications",
    "Roberto Infante",
    "LLM application patterns for engines, chatbots, and agents.",
    "04 · 05 · 06",
  ],
  [
    "AI Agents in Action",
    "Micheal Lanham",
    "Agentic architecture and multi-agent coordination.",
    "04 · 05 · 06",
  ],
] as const;

export const relationships = [
  [
    "NLP",
    "LLM",
    "NLP defines the language problem domain; LLMs are a transformer-based solution for it.",
  ],
  [
    "Foundation Model",
    "LLM",
    "Foundation models include vision, audio, and text bases; LLMs are their text-focused form.",
  ],
  [
    "LLM",
    "RAG",
    "The LLM supplies understanding and generation; RAG adds external memory without weight updates.",
  ],
  [
    "RAG",
    "Agent",
    "RAG becomes an active tool an agent can dynamically invoke during planning.",
  ],
  [
    "Agent",
    "Multi-Agent",
    "A single agent handles a linear loop; multi-agent systems divide work into specialist networks.",
  ],
] as const;
