const aiProgramming = [

  // 2017 Started

  {
    id: 1,
    title: "The Birth of Transformers: 'Attention Is All You Need'",
    description: "In June 2017, a group of Google researchers introduced a revolutionary architecture called the Transformer. Unlike traditional models that relied on recurrence, this model used a novel self-attention mechanism to process entire sequences at once. This breakthrough laid the foundation for today's most powerful language models, including GPT and BERT, completely changing the landscape of natural language processing.",
    time: "2017-06-12",
    source: "Google Research (arXiv)",
    reading_time: "4 min",
    tags: ["AI", "NLP", "Transformer", "Deep Learning"],
    link: "https://arxiv.org/abs/1706.03762"
  },
  {
    id: 2,
    title: "AlphaGo Zero: Self-Taught AI Destroys Its Predecessor",
    description: "DeepMind's AlphaGo Zero shocked the AI world by defeating the original AlphaGo model 100–0—without any human data. This version of the AI learned purely by playing against itself, demonstrating the astonishing potential of reinforcement learning and self-supervised systems. It marked a milestone in how machines could independently surpass human strategies.",
    time: "2017-10-18",
    source: "DeepMind via Wired",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "DeepMind", "AlphaGo"],
    link: "https://www.wired.com/story/what-happened-in-ai-in-2017"
  },
  {
    id: 3,
    title: "Libratus Defeats Poker Pros in Landmark AI Victory",
    description: "Developed by Carnegie Mellon University, Libratus was the first AI to beat world-class players in no-limit Texas Hold'em poker—a game of incomplete information and psychological bluffing. Over a grueling 20-day tournament, the AI outplayed human pros, showing how machines could dominate even in uncertainty-heavy environments.",
    time: "2017-02-15",
    source: "Time / CMU",
    reading_time: "3 min",
    tags: ["AI", "Game AI", "Libratus", "CMU"],
    link: "https://time.com/4656011/artificial-intelligence-ai-poker-tournament-libratus-cmu/"
  },
  {
    id: 4,
    title: "IBM Cuts Deep Learning Training Time from Days to Hours",
    description: "IBM achieved a significant breakthrough in deep learning performance by using distributed training techniques. Their system reduced the time required to train complex models like ResNet-50 from 16 days to just 7 hours. This innovation paved the way for faster iteration and deployment of AI models in enterprise applications.",
    time: "2017-08-08",
    source: "Axios / IBM",
    reading_time: "2 min",
    tags: ["AI", "Deep Learning", "IBM"],
    link: "https://www.axios.com/2017/12/15/ibm-claims-big-breakthrough-in-speed-of-artificial-intelligence-1513304703"
  },
  {
    id: 5,
    title: "Google Launches TensorFlow 1.0 and Cloud TPUs",
    description: "2017 saw the official release of TensorFlow 1.0—Google’s open-source framework for building machine learning models. Alongside this, Google announced the second generation of Cloud TPUs, providing over 180 teraflops of processing power per chip. These advancements made high-speed training more accessible and scalable for developers.",
    time: "2017-05-17",
    source: "Wikipedia / Google",
    reading_time: "2 min",
    tags: ["AI", "TensorFlow", "TPU", "Google"],
    link: "https://en.wikipedia.org/wiki/TensorFlow"
  },
  {
    id: 6,
    title: "Facebook AI Agents Invent Their Own Language",
    description: "In a surprising turn, researchers at Facebook's AI Research lab (FAIR) discovered that chatbots trained to negotiate started developing a new language among themselves—deviating from human language to become more efficient. While the experiment was shut down for clarity, it sparked widespread interest and concern about autonomous AI behavior.",
    time: "2017-06-01",
    source: "Medium",
    reading_time: "2 min",
    tags: ["AI", "Chatbot", "FAIR"],
    link: "https://medium.com/@lecarpentier.claire/artificial-intelligence-2017-accomplishments-9a95ede08df7"
  },
  {
    id: 7,
    title: "Sophia the Robot Becomes a Citizen of Saudi Arabia",
    description: "Sophia, a humanoid robot developed by Hanson Robotics, became the first robot in history to be granted legal citizenship by Saudi Arabia. The decision sparked a global debate about AI rights, ethics, and the future of human-robot relations—blurring the lines between technology and humanity.",
    time: "2017-10-25",
    source: "Wired",
    reading_time: "2 min",
    tags: ["AI", "Robotics", "Ethics", "Sophia"],
    link: "https://www.wired.com/story/what-happened-in-ai-in-2017"
  },
  {
    id: 8,
    title: "CheXNet Outperforms Radiologists in Diagnosing Pneumonia",
    description: "A Stanford-developed deep learning model named CheXNet analyzed chest X-rays and diagnosed pneumonia more accurately than expert radiologists. This achievement marked a powerful moment for AI in medicine, proving that deep convolutional neural networks can play a critical role in diagnostics.",
    time: "2017-11-01",
    source: "Wired",
    reading_time: "3 min",
    tags: ["AI", "Healthcare", "CNN", "CheXNet"],
    link: "https://www.wired.com/story/what-happened-in-ai-in-2017"
  },
  {
    id: 9,
    title: "AlphaZero Masters Chess, Shogi, and Go with Self-Taught AI",
    description: "DeepMind unveiled AlphaZero, a groundbreaking AI that mastered chess, shogi, and Go within hours by learning entirely from scratch—without human data. It quickly surpassed the strongest game engines like Stockfish and Elmo, demonstrating the raw power of general reinforcement learning in strategic environments.",
    time: "2017-12-05",
    source: "DeepMind / Nature",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "AlphaZero", "DeepMind"],
    link: "https://en.wikipedia.org/wiki/AlphaGo_Zero"
  },
  {
    id: 10,
    title: "Squeeze-and-Excitation Networks Win ImageNet 2017",
    description: "Researchers introduced SE-Nets (Squeeze-and-Excitation Networks), a new deep learning block that adaptively recalibrates channel-wise feature responses. These networks achieved state-of-the-art accuracy and won the ILSVRC 2017 image classification challenge, influencing future CNN designs.",
    time: "2017-09-05",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "SENet", "Deep Learning"],
    link: "https://arxiv.org/abs/1709.01507"
  },
  {
    id: 11,
    title: "Deep Learning Accurately Detects Hate Speech on Twitter",
    description: "In a major step toward responsible AI, researchers applied deep neural networks to classify hate speech in tweets, outperforming traditional methods by a wide margin. The model improved precision and recall, offering a powerful tool for automated content moderation.",
    time: "2017-06-01",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "NLP", "Social Good", "Deep Learning"],
    link: "https://arxiv.org/abs/1706.00188"
  },
  {
    id: 12,
    title: "MIT Introduces Deep Learning Hardware Co-Design Course",
    description: "MIT launched a pioneering course focused on building custom hardware for deep learning. The program emphasized tight co-design between neural network algorithms and hardware accelerators, preparing students to innovate at the intersection of electrical engineering and AI.",
    time: "2017-11-30",
    source: "MIT News",
    reading_time: "2 min",
    tags: ["AI", "Hardware", "Education", "MIT"],
    link: "https://news.mit.edu/2017/building-hardware-next-generation-artificial-intelligence-1201"
  },
  {
    id: 13,
    title: "TensorFlow 1.0 Launches with Support for Google's TPUs",
    description: "Google officially released TensorFlow 1.0—its powerful, production-ready machine learning library—alongside Cloud TPU v2 chips. This combination significantly reduced training times and positioned TensorFlow as a go-to framework for both researchers and developers.",
    time: "2017-02-11",
    source: "Wikipedia / Google",
    reading_time: "2 min",
    tags: ["AI", "TensorFlow", "TPU", "Google"],
    link: "https://en.wikipedia.org/wiki/TensorFlow"
  },
  {
    id: 14,
    title: "ONNX Launches to Bridge AI Frameworks",
    description: "Facebook and Microsoft jointly introduced ONNX (Open Neural Network Exchange), a standard format to help developers move AI models between frameworks like PyTorch, CNTK, and Caffe2. It marked a step toward more open, flexible, and collaborative AI development.",
    time: "2017-09-27",
    source: "Forbes",
    reading_time: "2 min",
    tags: ["AI", "Interoperability", "ONNX", "Facebook", "Microsoft"],
    link: "https://www.predictiveanalyticsworld.com/machinelearningtimes/12-amazing-deep-learning-breakthroughs-2017/9282/"
  },
  {
    id: 15,
    title: "GANs Go Mainstream: From Deepfakes to AI-Generated Art",
    description: "2017 was a breakout year for GANs (Generative Adversarial Networks). These models generated increasingly realistic faces, artworks, and even music, captivating the tech world. While exciting, the rise of deepfakes also raised ethical concerns about misinformation and digital manipulation.",
    time: "2017-12-31",
    source: "Medium / Wired summary",
    reading_time: "3 min",
    tags: ["AI", "GAN", "Creative AI", "Deep Learning"],
    link: "https://www.wired.com/story/what-happened-in-ai-in-2017"
  },
  {
    id: 16,
    title: "AI Research Embraces Brain-Inspired Learning Approaches",
    description: "AI labs began incorporating neuroscience-inspired ideas—such as 3D scene understanding and memory mechanisms—to enhance model generalization. This brain-inspired direction aimed to move beyond data-hungry deep learning and closer to human-like reasoning.",
    time: "2017-12-15",
    source: "Axios",
    reading_time: "2 min",
    tags: ["AI", "Neuroscience", "Deep Learning", "Generalization"],
    link: "https://www.axios.com/2017/12/15/ai-searches-for-new-inspiration-1513306943"
  },
    {
    id: 17,
    title: "Asilomar Conference Sets Guiding Principles for Beneficial AI",
    description: "In January 2017, over 100 AI experts, philosophers, and public figures—including Stephen Hawking, Demis Hassabis, and Yoshua Bengio—gathered at the Asilomar Conference. They established 23 guiding principles aimed at ensuring AI development benefits humanity, emphasizing safety, transparency, and ethics.",
    time: "2017-01-05",
    source: "Future of Life Institute",
    reading_time: "3 min",
    tags: ["AI", "Ethics", "Policy", "Asilomar"],
    link: "https://en.wikipedia.org/wiki/Asilomar_Conference_on_Beneficial_AI"
  },
  {
    id: 18,
    title: "AlphaGo Triumphs Over World Champion Ke Jie in China",
    description: "In May 2017, AlphaGo Master defeated Ke Jie—the world's top-ranked Go player—in all three games at the Future of Go Summit in Wuzhen, China. These victories marked the peak of AlphaGo’s dominance before it retired, showcasing AI's mastery in complex reasoning.",
    time: "2017-05-23",
    source: "Wikipedia / DeepMind",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "AlphaGo", "DeepMind"],
    link: "https://en.wikipedia.org/wiki/AlphaGo_versus_Ke_Jie"
  },
  {
    id: 19,
    title: "H2O.ai Partners with NVIDIA to Accelerate ML in the Enterprise",
    description: "In mid‑2017, H2O.ai joined forces with NVIDIA to deliver GPU-accelerated machine learning platforms for enterprises. This collaboration enabled faster model training and scalability—making advanced AI more accessible across Fortune 500 companies.",
    time: "2017-05-01",
    source: "Medium",
    reading_time: "2 min",
    tags: ["AI", "Enterprise", "ML", "H2O.ai", "GPU"],
    link: "https://medium.com/@alejandroalexjaimes/10-machine-learning-artificial-intelligence-advances-in-2017-461001346901"
  },
  {
    id: 20,
    title: "DeepMind Launches Ethics & Society Team",
    description: "In October 2017, DeepMind formed an internal Ethics & Society unit dedicated to exploring the moral, societal, and policy implications of AI. The move reflected growing awareness of responsible AI development amid rising global influence.",
    time: "2017-10-25",
    source: "Business Insider / The Verge",
    reading_time: "2 min",
    tags: ["AI", "Ethics", "DeepMind", "Society"],
    link: "https://en.wikipedia.org/wiki/Google_DeepMind"
  },

  // 2018 Started

    {
    id: 21,
    title: "Google Introduces BERT: Deeply Contextual NLP",
    description: "In October 2018, Google released BERT (Bidirectional Encoder Representations from Transformers), a groundbreaking language model that reads context both before and after words. It set new accuracy records on 11 NLP tasks—like SQuAD and GLUE—and became an industry standard for understanding language.",
    time: "2018-10-11",
    source: "arXiv / Google AI",
    reading_time: "3 min",
    tags: ["AI", "NLP", "BERT", "Transformer"],
    link: "https://arxiv.org/abs/1810.04805"
  },
  {
    id: 22,
    title: "OpenAI Debuts GPT: A Generalized Transformer-LM",
    description: "In mid-2018, OpenAI launched the first Generative Pre-trained Transformer (GPT), the first autoregressive language model based on Transformers. It demonstrated powerful unsupervised learning capabilities, showing that the Transformer architecture scaled effectively for text generation.",
    time: "2018-06-11",
    source: "OpenAI",
    reading_time: "3 min",
    tags: ["AI", "NLP", "GPT", "Transformer"],
    link: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
  },
  {
    id: 23,
    title: "OpenAI Five Tackles Teamplay in Dota 2",
    description: "By June 2018, OpenAI Five—an AI team for Dota 2—began competing publicly against semi-pro teams. Though they lost at The International, they dominated public games (99.4% win rate in 42k matches), showing AI's rising strength in collaborative, real-time strategy.",
    time: "2018-06-05",
    source: "Wikipedia / OpenAI",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "Dota2", "OpenAI Five"],
    link: "https://en.wikipedia.org/wiki/OpenAI_Five"
  },
  {
    id: 24,
    title: "Google Launches Duplex: AI Conversation on the Phone",
    description: "At I/O 2018, Google unveiled Duplex—a powerful voice-based AI capable of making natural phone calls to businesses. Demonstrations showed human-like inflections and hesitation, marking an impressive milestone in conversational AI and human–machine interaction.",
    time: "2018-05-08",
    source: "Analytics Vidhya summary",
    reading_time: "2 min",
    tags: ["AI", "Conversational AI", "Google Duplex", "Voice"],
    link: "https://analyticsvidhya.com/blog/2018/12/key-breakthroughs-ai-ml-2018-trends-2019/"
  },
  {
    id: 25,
    title: "Facebook Releases PyText for NLP at Scale",
    description: "In mid-2018, Facebook open-sourced PyText—a high-performance NLP framework built on PyTorch. Designed for production-ready conversational AI, it boosted accuracy by ~10% and improved model training speed across Facebook’s services.",
    time: "2018-07-15",
    source: "Analytics Vidhya summary",
    reading_time: "2 min",
    tags: ["AI", "NLP", "PyText", "PyTorch", "Facebook"],
    link: "https://analyticsvidhya.com/blog/2018/12/key-breakthroughs-ai-ml-2018-trends-2019/"
  },
  {
    id: 26,
    title: "BigGAN Redefines Image Generation",
    description: "Released around late 2018, BigGAN pushed generative art forward. These large-scale GANs produced highly realistic, diverse images with sharper detail—raising the bar for AI creativity and highlighting both promise and privacy concerns.",
    time: "2018-11-20",
    source: "Analytics Vidhya summary",
    reading_time: "3 min",
    tags: ["AI", "GAN", "BigGAN", "Computer Vision"],
    link: "https://analyticsvidhya.com/blog/2018/12/key-breakthroughs-ai-ml-2018-trends-2019/"
  },
  {
    id: 27,
    title: "Fast.ai Trains ImageNet in 18 Minutes",
    description: "In a major efficiency leap, Fast.ai demonstrated that a full ImageNet training run could be completed in just 18 minutes using optimized code and mixed precision computing—showcasing how smart engineering can reduce compute barriers for deep learning.",
    time: "2018-10-30",
    source: "Analytics Vidhya summary",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "Fast.ai", "Optimization"],
    link: "https://analyticsvidhya.com/blog/2018/12/key-breakthroughs-ai-ml-2018-trends-2019/"
  },
  {
    id: 28,
    title: "TensorFlow.js Enables ML in Browsers",
    description: "Released in 2018, TensorFlow.js brought machine learning to the browser and Node.js, enabling developers to run and retrain ML models using JavaScript. It opened AI development to web engineers and fostered interactive, client-side ML applications.",
    time: "2018-09-05",
    source: "Analytics Vidhya summary",
    reading_time: "2 min",
    tags: ["AI", "JavaScript", "TensorFlow.js", "Web ML"],
    link: "https://analyticsvidhya.com/blog/2018/12/key-breakthroughs-ai-ml-2018-trends-2019/"
  },
    {
    id: 29,
    title: "ULMFiT Launches Transfer Learning for NLP",
    description: "Jeremy Howard and Sebastian Ruder released ULMFiT, a universal transfer learning method for NLP. By fine-tuning a pre-trained language model, it achieved state-of-the-art results across multiple text classification tasks and made NLP more accessible and efficient.",
    time: "2018-01-18",
    source: "fast.ai / arXiv",
    reading_time: "2 min",
    tags: ["AI", "NLP", "ULMFiT", "Transfer Learning"],
    link: "https://arxiv.org/abs/1801.06146"
  },
  {
    id: 30,
    title: "ELMo Brings Contextual Word Embeddings to Life",
    description: "The ELMo model (Embeddings from Language Models) introduced context-sensitive word vectors based on bidirectional LSTMs. It captured nuanced meaning based on sentence context and significantly improved performance on tasks like sentiment analysis and named entity recognition.",
    time: "2018-02-15",
    source: "UC Berkeley / arXiv",
    reading_time: "2 min",
    tags: ["AI", "NLP", "ELMo", "Word Embeddings"],
    link: "https://arxiv.org/abs/1802.05365"
  },
  {
    id: 31,
    title: "Alibaba AI Outperforms Humans on Stanford Reading Test",
    description: "An Alibaba-developed reading comprehension model surpassed high-performing humans on the Stanford Question Answering Dataset (SQuAD), achieving 82.44% vs. human baseline of 82.30%. It marked a major leap in AI reading comprehension.",
    time: "2018-06-01",
    source: "Wikipedia / Alibaba",
    reading_time: "3 min",
    tags: ["AI", "NLP", "Reading Comprehension", "Alibaba"],
    link: "https://en.wikipedia.org/wiki/Timeline_of_artificial_intelligence"
  },
  {
    id: 32,
    title: "Ethics Storm: Facial Recognition and Bias Backlash",
    description: "In 2018, facial recognition technologies from companies like Amazon, IBM, and Microsoft came under fire for racial and gender bias. The ACLU revealed errors in Amazon Rekognition, leading to employee protests and more public scrutiny. These concerns pushed firms to develop ethical guidelines and policy statements.",
    time: "2018-05-01",
    source: "ACLU / TechTalks",
    reading_time: "3 min",
    tags: ["AI", "Ethics", "Facial Recognition", "Bias"],
    link: "https://bdtechtalks.com/2018/12/28/top-artificial-intelligence-stories-2018/"
  },
  {
    id: 33,
    title: "Amazon Drops Biased AI Recruiting Tool",
    description: "Amazon scrapped an AI tool used for resume screening after discovering it penalized female candidates—learning from male-dominated hiring data. The incident highlighted how AI can unintentionally perpetuate social bias.",
    time: "2018-10-10",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Ethics", "Hiring", "Amazon"],
    link: "https://bdtechtalks.com/2018/12/28/top-artificial-intelligence-stories-2018/"
  },
  {
    id: 34,
    title: "OpenAI Five Plays 180 Years of Dota in First Year",
    description: "By mid-2018, OpenAI Five had trained on the equivalent of 180 years of Dota game-time across 256 GPUs—playing tens of thousands of games. It showcased large-scale, multi-agent reinforcement learning advancing teamwork strategies.",
    time: "2018-06-25",
    source: "Wikipedia / OpenAI",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "OpenAI Five", "Dota2"],
    link: "https://en.wikipedia.org/wiki/OpenAI_Five"
  },
  {
    id: 35,
    title: "OpenAI’s Dactyl Robot Learns In-Hand Manipulation",
    description: "OpenAI introduced Dactyl—a robotic hand trained entirely in simulation to manipulate 3D objects using reinforcement learning and domain randomization. It successfully rotated a block and prism, advancing sim-to-real robotics.",
    time: "2018-07-30",
    source: "OpenAI",
    reading_time: "3 min",
    tags: ["AI", "Robotics", "Dactyl", "Reinforcement Learning"],
    link: "https://en.wikipedia.org/wiki/Products_and_applications_of_OpenAI"
  },

  // 2019 starts

    {
    id: 36,
    title: "OpenAI Releases GPT‑2 (1.5B Parameters)",
    description: "In February 2019, OpenAI introduced GPT‑2, a 1.5 billion‑parameter transformer model capable of generating human‑like text, performing summarization, translation, and question‑answering. Its fluency sparked both excitement and concern about potential misuse, leading OpenAI to initially release a smaller version before sharing the full model in November.",
    time: "2019-02-14",
    source: "OpenAI / Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "NLP", "GPT‑2", "Transformer"],
    link: "https://en.wikipedia.org/wiki/GPT-2"
  },
  {
    id: 37,
    title: "Microsoft Invests $1–2B in OpenAI",
    description: "In July 2019, Microsoft made a major investment in OpenAI—reportedly between $1–2 billion—to become its exclusive cloud provider and support development of large-scale AI models, establishing a long-term strategic partnership across AI research and deployment.",
    time: "2019-07-22",
    source: "Rabie Akela / TechTarget",
    reading_time: "2 min",
    tags: ["AI", "Partnership", "OpenAI", "Microsoft"],
    link: "https://rabieakela.com/ai-timeline-2/"
  },
  {
    id: 38,
    title: "RoBERTa Improves on BERT with Smarter Training",
    description: "Facebook AI’s RoBERTa (July 2019) optimized BERT-based training with bigger datasets and longer sequences. The result was a new state-of-the-art model on GLUE, SQuAD, and RACE benchmarks—highlighting the power of robust pre-training.",
    time: "2019-07-26",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "NLP", "RoBERTa", "Transfer Learning"],
    link: "https://arxiv.org/abs/1907.11692"
  },
  {
    id: 39,
    title: "Megatron‑LM Trains Billion-Scale Transformers",
    description: "In September 2019, NVIDIA researchers introduced Megatron‑LM, a model‑parallel approach able to train transformers with up to 8.3 billion parameters using 512 GPUs. Their techniques set new performance records on language modeling (WikiText‑103) and reading tasks (RACE).",
    time: "2019-09-17",
    source: "arXiv",
    reading_time: "3 min",
    tags: ["AI", "NLP", "Megatron‑LM", "Scalability"],
    link: "https://arxiv.org/abs/1909.08053"
  },
  {
    id: 40,
    title: "Microsoft Debuts Turing Natural Language Generation (T‑NLG)",
    description: "In late 2019, Microsoft unveiled T‑NLG, a 17 billion parameter language model designed to produce high-quality text generation—covering summarization, translation, and dialogue generation—signaling big-tech momentum in large-language research.",
    time: "2019-11-01",
    source: "TechTarget",
    reading_time: "3 min",
    tags: ["AI", "NLP", "T‑NLG", "Microsoft"],
    link: "https://www.techtarget.com/searchenterpriseai/tip/The-history-of-artificial-intelligence-Complete-AI-timeline"
  },
  {
    id: 41,
    title: "DeepMind’s AlphaStar Reaches StarCraft II Grandmaster",
    description: "In early 2019, DeepMind’s AlphaStar AI achieved Grandmaster level performance in StarCraft II, ranking among the top 0.2% of human players in a real-time, complex strategy game involving hidden information and rapid decision-making.",
    time: "2019-01-24",
    source: "Wikipedia / DeepMind",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "AlphaStar", "DeepMind"],
    link: "https://en.wikipedia.org/wiki/AlphaStar_(AI)"
  },
  {
    id: 42,
    title: "Google AI Outperforms Radiologists in Lung Cancer Detection",
    description: "In 2019, Google researchers developed a deep learning model for detecting lung cancer on CT scans that outperformed expert radiologists, demonstrating AI’s potential in medical diagnostics and early disease detection.",
    time: "2019-05-20",
    source: "Google Health / Nature",
    reading_time: "3 min",
    tags: ["AI", "Healthcare", "Computer Vision", "Google"],
    link: "https://www.nature.com/articles/s41586-019-1204-4"
  },
  {
    id: 43,
    title: "Tabnine Launches AI Code Autocompletion",
    description: "Tabnine emerged as a leading AI-powered code autocompletion tool built on GPT-2. It offered intelligent suggestions and boosted developer productivity across various languages, IDEs, and workflows.",
    time: "2019-06-12",
    source: "Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "Programming", "Developer Tools", "Tabnine"],
    link: "https://en.wikipedia.org/wiki/Tabnine"
  },
  {
    id: 44,
    title: "BART: Facebook’s Seq‑to‑Seq Transformer Raises the Bar",
    description: "Facebook introduced BART, a denoising autoencoder for pretraining sequence‑to‑sequence models. Combining ideas from BERT and GPT, BART achieved new benchmarks in summarization, translation, and dialogue generation.",
    time: "2019-10-29",
    source: "arXiv / Facebook AI",
    reading_time: "3 min",
    tags: ["AI", "NLP", "BART", "Transformer"],
    link: "https://arxiv.org/abs/1910.13461"
  },
    {
    id: 45,
    title: "DeepMind’s AlphaStar Achieves Grandmaster Rank in StarCraft II",
    description: "In January 2019, DeepMind’s AlphaStar became one of the top 0.2% of human StarCraft II players, reaching Grandmaster status through multi-agent deep reinforcement learning and strategic planning—reinforcing AI’s progress in real-time strategy games.",
    time: "2019-01-24",
    source: "Wikipedia / DeepMind",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "AlphaStar", "DeepMind"],
    link: "https://en.wikipedia.org/wiki/AlphaStar_(AI)"
  },
  {
    id: 46,
    title: "OpenAI Five Defeats Dota 2 World Champions",
    description: "In April 2019, OpenAI Five became the first AI to defeat the reigning Dota 2 world champions (Team OG) in a public exhibition. The system was trained on the equivalent of 180 years of gameplay using large-scale deep reinforcement learning and self-play techniques. :contentReference[oaicite:1]{index=1}",
    time: "2019-04-13",
    source: "OpenAI",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "OpenAI Five", "Dota2"],
    link: "https://arxiv.org/abs/1912.06680"
  },
  {
    id: 47,
    title: "DARPA AlphaDogfight AI Beats Human F‑16 Pilot",
    description: "In October 2019, the AlphaDogfight program saw AI pilots using deep reinforcement learning defeat a human F-16 pilot in simulated air-to-air combat, achieving a perfect 5–0 score—highlighting AI's emerging capabilities in high-speed decision-making. :contentReference[oaicite:2]{index=2}",
    time: "2019-10-00",
    source: "DARPA / Heron Systems",
    reading_time: "3 min",
    tags: ["AI", "Reinforcement Learning", "DARPA", "Aerospace"],
    link: "https://en.wikipedia.org/wiki/DARPA_AlphaDogfight"
  },
  {
    id: 48,
    title: "UK's AI for Good Summit Sparks Global Alignment Discussion",
    description: "In May 2019, the AI for Good Global Summit convened leaders from tech, policy, and research—including Ray Kurzweil, Yoshua Bengio, and Timnit Gebru—to align AI capabilities with public good. A key outcome was the formation of focus groups guiding AI safety, ethics, and sustainable development. :contentReference[oaicite:3]{index=3}",
    time: "2019-05-28",
    source: "ITU / UN",
    reading_time: "2 min",
    tags: ["AI", "Ethics", "Policy", "Summit"],
    link: "https://en.wikipedia.org/wiki/ITU_AI_for_Good"
  },


  // 2020 Starts

    {
    id: 49,
    title: "OpenAI Launches GPT‑3 with 175 Billion Parameters",
    description: "In June 2020, OpenAI unveiled GPT‑3, a massive transformer model with 175 billion parameters. GPT‑3 could generate coherent text, write code, translate languages, and answer questions implicitly. Its fluency and versatility sparked both excitement and concerns around AI ethics.",
    time: "2020-06-11",
    source: "OpenAI / Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "NLP", "GPT‑3", "Transformer"],
    link: "https://en.wikipedia.org/wiki/GPT-3"
  },
  {
    id: 50,
    title: "Microsoft Introduces T‑NLG Large‑Scale Language Model",
    description: "In early 2020, Microsoft debuted T‑NLG—a 17 billion‑parameter Transformer capable of summarization, translation, and dialogue generation—solidifying its position among the top large‑scale language model developers.",
    time: "2020-02-05",
    source: "Microsoft / Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "NLP", "T‑NLG", "Microsoft"],
    link: "https://en.wikipedia.org/wiki/Turing_Natural_Language_Generation"
  },
  {
    id: 51,
    title: "DeepMind’s AlphaFold 2 Solves Protein Folding",
    description: "In November 2020, AlphaFold 2 achieved near‑experimental accuracy in CASP14 by predicting protein structures in minutes rather than months. This breakthrough is considered a milestone in computational biology and drug discovery.",
    time: "2020-11-30",
    source: "DeepMind / Nature",
    reading_time: "3 min",
    tags: ["AI", "BioTech", "AlphaFold 2", "Healthcare"],
    link: "https://www.nature.com/articles/s41586-020-2649-2"
  },
  {
    id: 52,
    title: "Vision Transformer (ViT) Outperforms CNNs",
    description: "In October 2020, Google researchers introduced the Vision Transformer (ViT), showing that pure transformer architectures could outperform convolutional neural networks in large-scale image classification tasks.",
    time: "2020-10-21",
    source: "Google Research",
    reading_time: "3 min",
    tags: ["AI", "Computer Vision", "ViT", "Transformer"],
    link: "https://arxiv.org/abs/2010.11929"
  },
  {
    id: 53,
    title: "DETR Simplifies Object Detection with Transformers",
    description: "In May 2020, Facebook AI Research released DETR, a transformer-based object detection model that replaced complex pipelines with an end-to-end set‑prediction framework—streamlining detection tasks.",
    time: "2020-05-27",
    source: "FAIR",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "DETR", "Transformer"],
    link: "https://arxiv.org/abs/2005.12872"
  },
  {
    id: 54,
    title: "RAFT Advances Optical‑Flow Using Deep Learning",
    description: "In September 2020, RAFT (Recurrent All-Pairs Field Transforms) introduced a novel network for optical flow estimation, achieving state‑of‑the‑art accuracy and robust generalization across datasets.",
    time: "2020-09-01",
    source: "ECCV 2020",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "RAFT", "Optical Flow"],
    link: "https://arxiv.org/abs/2003.12039"
  },
  {
    id: 55,
    title: "NeRF Enables Photorealistic 3D Scene Synthesis",
    description: "Also in 2020, Neural Radiance Fields (NeRF) emerged, enabling high-quality 3D scene reconstructions from 2D images—revolutionizing graphics and virtual reality.",
    time: "2020-06-22",
    source: "ECCV 2020",
    reading_time: "2 min",
    tags: ["AI", "3D Vision", "NeRF", "Computer Vision"],
    link: "https://arxiv.org/abs/2003.08934"
  },
  {
    id: 56,
    title: "15.ai Launches Realistic Voice‑Cloning AI",
    description: "In March 2020, an anonymous MIT researcher released 15.ai, a public voice‑cloning tool capable of mimicking characters from minimal data. It brought generative audio into public view and sparked deepfake debates.",
    time: "2020-03-10",
    source: "Wikipedia / Generative AI",
    reading_time: "2 min",
    tags: ["AI", "Audio", "Voice-Cloning", "Ethics"],
    link: "https://en.wikipedia.org/wiki/Generative_artificial_intelligence"
  },
  {
    id: 57,
    title: "Cerebras CS‑1 Accelerates COVID‑19 & Genomics Research",
    description: "By summer 2020, GSK and Argonne National Labs used Cerebras’ CS‑1 to revolutionize COVID‑19 and cancer research—delivering computational speedups hundreds of times faster than standard GPUs.",
    time: "2020-08-15",
    source: "Cerebras / Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "Hardware", "Cerebras", "Research"],
    link: "https://en.wikipedia.org/wiki/Cerebras"
  },
  {
    id: 58,
    title: "NLP Helps Fight COVID‑19 Misinformation",
    description: "In late 2020, researchers applied NLP tools—information retrieval, sentiment analysis, and automated QA—to accelerate COVID‑19 research, tracking misinformation and organizing scientific findings.",
    time: "2020-10-09",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "NLP", "COVID‑19", "Healthcare"],
    link: "https://arxiv.org/abs/2010.16413"
  },
  {
    id: 59,
    title: "AutoML‑Zero Searches ML Algorithms From Scratch",
    description: "In early 2020, researchers introduced AutoML‑Zero, a system that evolves ML algorithms from basic mathematical operators, hinting at automated discovery of new learning architectures.",
    time: "2020-03-31",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "AutoML", "Meta-Learning"],
    link: "https://arxiv.org/abs/2003.03384"
  },
  {
    id: 60,
    title: "Contrastive Learning Makes Vision Models Self‑Supervised",
    description: "Also in February 2020, the SimCLR framework used contrastive learning to pretrain vision models without labels—surpassing many supervised baselines.",
    time: "2020-02-20",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "SimCLR", "Self‑Supervised Learning"],
    link: "https://arxiv.org/abs/2002.05709"
  },
    {
    id: 61,
    title: "YOLOv4 Debuts: Fast & Accurate Object Detection",
    description: "In April 2020, the YOLOv4 model delivered a breakthrough in real-time object detection, combining high accuracy with exceptional speed—ideal for video processing and embedded vision applications.",
    time: "2020-04-10",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "YOLOv4", "Object Detection"],
    link: "https://arxiv.org/abs/2004.10934"
  },
  {
    id: 62,
    title: "DeepMind's AI Equates Radiologists in Breast Cancer Screening",
    description: "In January 2020, DeepMind unveiled an AI system that matched the performance of expert radiologists in breast cancer detection on mammograms—highlighting both potential and challenges in model interpretation.",
    time: "2020-01-01",
    source: "Nature",
    reading_time: "3 min",
    tags: ["AI", "Healthcare", "Radiology", "DeepMind"],
    link: "https://www.nature.com/articles/s41586-019-1799-6"
  },
  {
    id: 63,
    title: "AI4COVID‑19: Cough‑based COVID Screening App",
    description: "An early 2020 study introduced AI4COVID‑19, an app that analyzes a 3‑second cough sample via smartphone to detect COVID‑19 with promising accuracy—an innovative proof-of-concept in remote symptom screening.",
    time: "2020-04-02",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "Healthcare", "COVID‑19", "Audio"],
    link: "https://arxiv.org/abs/2004.01275"
  },
  {
    id: 64,
    title: "AI‑Driven CT Scan Tool Aids COVID‑19 Diagnosis",
    description: "In March 2020, researchers developed a deep-learning system that assesses COVID‑19 severity via CT scans. The model achieved near-perfect accuracy (AUC 0.996) and generated a “Corona score” to track disease progression rapidly.",
    time: "2020-03-10",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "CT Scan", "COVID‑19"],
    link: "https://arxiv.org/abs/2003.05037"
  },
  {
    id: 65,
    title: "Contrastive Learning Powers Self‑Supervised Vision Models",
    description: "In February 2020, SimCLR showcased contrastive learning allowing image models to learn without labels—surpassing many supervised benchmarks. It catalyzed a wave of self-supervised vision research.",
    time: "2020-02-20",
    source: "arXiv",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "Self‑Supervised Learning", "SimCLR"],
    link: "https://arxiv.org/abs/2002.05709"
  },
  {
    id: 66,
    title: "Generative AI Ethics Debates Escalate—Timnit Gebru Fired",
    description: "In late 2020, AI ethics took center stage after Google’s co-lead of ethical research, Timnit Gebru, was fired amid her critique of large language model risks—prompting global debate over bias, labor, and research censorship :contentReference[oaicite:1]{index=1}.",
    time: "2020-12-01",
    source: "Skynet Today / Wired",
    reading_time: "3 min",
    tags: ["AI", "Ethics", "Bias", "Timnit Gebru"],
    link: "https://www.skynettoday.com/overviews/year-2020"
  },
  {
    id: 67,
    title: "Stanford Developed Covid Fast Fax AI Tool",
    description: "Late 2020 saw Stanford's 'Covid Fast Fax' AI quickly prioritizing faxed COVID reports for contact tracers—saving critical response time and demonstrating creative pandemic-era AI solutions :contentReference[oaicite:2]{index=2}.",
    time: "2020-11-20",
    source: "Stanford News",
    reading_time: "2 min",
    tags: ["AI", "COVID‑19", "Healthcare", "Stanford"],
    link: "https://www.wired.com/story/newest-weapon-against-covid-ai-speed-reads-faxes"
  },
  {
    id: 68,
    title: "Mass Release of AlphaFold Protein Database",
    description: "In late 2020, DeepMind released predictions for 350,000 protein structures—including nearly the entire human proteome—making the AlphaFold database publicly available :contentReference[oaicite:3]{index=3}.",
    time: "2020-12-20",
    source: "Wikipedia / DeepMind",
    reading_time: "3 min",
    tags: ["AI", "BioTech", "AlphaFold", "Computational Biology"],
    link: "https://en.wikipedia.org/wiki/Timeline_of_computing_2020%E2%80%93present"
  },

  // 2021 Starts

    {
    id: 69,
    title: "OpenAI Unveils DALL·E: Text-to-Image Transformer",
    description: "In January 2021, OpenAI released DALL·E, a transformer-based model capable of generating high-quality images from text prompts. It could creatively combine concepts, attributes, and styles, sparking new possibilities in AI-driven visual creation.",
    time: "2021-01-05",
    source: "OpenAI Blog",
    reading_time: "3 min",
    tags: ["AI", "Computer Vision", "DALL·E", "OpenAI"],
    link: "https://openai.com/blog/dall-e/" // :contentReference[oaicite:1]{index=1}
  },
  {
    id: 70,
    title: "OpenAI Introduces CLIP: Bridging Images & Text",
    description: "Also in January 2021, OpenAI launched CLIP, a model that understood images through natural language supervision—enabling zero-shot image classification and fostering rich multimodal capabilities.",
    time: "2021-01-05",
    source: "OpenAI Blog",
    reading_time: "2 min",
    tags: ["AI", "Multimodal", "CLIP", "OpenAI"],
    link: "https://openai.com/blog/clip/" // :contentReference[oaicite:2]{index=2}
  },
  {
    id: 71,
    title: "Google Releases Alphabet’s AlphaFold Protein Structure Database",
    description: "In July 2021, DeepMind and EMBL-EBI released the AlphaFold Protein Structure Database, offering high-confidence structure predictions for the entire human proteome and many organisms—democratizing access to foundational biological data.",
    time: "2021-07-22",
    source: "DeepMind / EMBL‑EBI",
    reading_time: "3 min",
    tags: ["AI", "BioTech", "AlphaFold", "DeepMind"],
    link: "https://alphafold.ebi.ac.uk/" // :contentReference[oaicite:3]{index=3}
  },
  {
    id: 72,
    title: "Google Publishes PaLM: 540B-Parameter Pathways Language Model",
    description: "In April 2021, Google unveiled PaLM—a 540 billion parameter model built using Pathways architecture. PaLM achieved state‑of‑the‑art performance on reasoning, translation, and coding tasks, reflecting massive-scale model innovation.",
    time: "2021-04-27",
    source: "Google Research Blog",
    reading_time: "3 min",
    tags: ["AI", "NLP", "PaLM", "Transformer"],
    link: "https://research.google/blog/2022/04/pathways-language-model-palm.html" // :contentReference[oaicite:4]{index=4}
  },
  {
    id: 73,
    title: "Vision Transformer (ViT) Gains Traction in 2021",
    description: "After its debut in late 2020, Vision Transformer (ViT) gained widespread use in 2021 across Google projects, showing that transformers could match or outperform CNNs in image recognition and prompting broad adoption.",
    time: "2021-06-15",
    source: "Google Research Publications",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "ViT", "Transformer"],
    link: "https://arxiv.org/abs/2010.11929"
  },
  {
    id: 74,
    title: "DeepMind’s AlphaFold Wins Science’s 2021 Breakthrough of the Year",
    description: "Science magazine named AlphaFold’s 2020 protein-folding achievements as the 2021 ‘Breakthrough of the Year,’ cementing its role in transforming molecular biology and drug discovery.",
    time: "2021-12-09",
    source: "Science Magazine",
    reading_time: "2 min",
    tags: ["AI", "BioTech", "AlphaFold", "Science"],
    link: "https://www.science.org/content/article/2021-breakthrough-year" // :contentReference[oaicite:5]{index=5}
  },
  {
    id: 75,
    title: "Timnit Gebru’s Departure Sparks Global AI Ethics Conversation",
    description: "In December 2020–January 2021, Timnit Gebru’s exit from Google—following her critique of large language models—ignited widespread debate on AI ethics, labor rights, and transparency within AI research labs.",
    time: "2021-01-05",
    source: "Wired / Skynet Today",
    reading_time: "3 min",
    tags: ["AI", "Ethics", "Transparency", "AI Governance"],
    link: "https://www.wired.com/story/googles-ethical-ai-lead-timnit-gebru/" // :contentReference[oaicite:6]{index=6}
  },
  {
    id: 76,
    title: "Meta Announces BlenderBot 2.0 with Safe Conversational AI",
    description: "In September 2021, Meta released BlenderBot 2.0—a long‑conversation chatbot built with retrieval-augmented generation, transparency features, and an “explain-your-reply” interface for safer user interactions.",
    time: "2021-09-22",
    source: "Meta AI Blog",
    reading_time: "2 min",
    tags: ["AI", "Conversational AI", "Bridging", "Meta"],
    link: "https://ai.facebook.com/blog/blenderbot-2/" 
  },
  {
    id: 77,
    title: "OpenAI Codex Powers GitHub Copilot Launch",
    description: "In June 2021, OpenAI released Codex—an AI model trained on public code—which then powered GitHub Copilot. This assistant autocompletes code in multiple languages, fundamentally changing programming workflows.",
    time: "2021-06-29",
    source: "GitHub / OpenAI",
    reading_time: "2 min",
    tags: ["AI", "Programming", "Codex", "Developer Tools"],
    link: "https://github.com/features/copilot"
  },
  {
    id: 78,
    title: "Anthropic Introduces Constitution‑AI for Safe LLMs",
    description: "In August 2021, Anthropic (founded by former OpenAI members) published a governance-first training method called Constitution-AI to improve AI alignment and reduce harmful outputs in large language models.",
    time: "2021-08-05",
    source: "Anthropic Blog",
    reading_time: "2 min",
    tags: ["AI", "Ethics", "LLM Safety", "Anthropic"],
    link: "https://www.anthropic.com/index/constitution"
  },
    {
    id: 79,
    title: "GitHub Copilot Powered by OpenAI Codex Debuts",
    description: "In June 2021, GitHub launched Copilot, an AI pair-programmer powered by OpenAI’s Codex. Integrated into popular IDEs, it writes code suggestions and entire functions, significantly boosting developer speed and reshaping software workflows.",
    time: "2021-06-29",
    source: "GitHub Blog / OpenAI",
    reading_time: "2 min",
    tags: ["AI", "Programming", "Codex", "GitHub Copilot"],
    link: "https://github.blog/2021-06-29-github-copilot-your-ai-pair-programmer/"
  },
  {
    id: 80,
    title: "OpenAI Shuts Down Robotic Research Unit",
    description: "In July 2021, OpenAI closed its robotics division to pivot toward more scalable areas of AI—particularly language-based models—signaling a shift in focus away from physical manipulation toward software-driven intelligence.",
    time: "2021-07-16",
    source: "OpenAI Blog / AI Journal",
    reading_time: "2 min",
    tags: ["AI", "Robotics", "OpenAI", "Strategy Shift"],
    link: "https://aijourn.com/openai-shuts-down-robotics-unit/"
  },
  {
    id: 81,
    title: "Tesla Reveals Humanoid Robot Prototype 'Optimus'",
    description: "At its AI Day in August 2021, Tesla introduced Optimus—a humanoid robot prototype aimed at taking over repetitive or dangerous tasks. Using autopilot-grade hardware and ROS-based control, it outlines Tesla’s ambitions in general-purpose robotics.",
    time: "2021-08-19",
    source: "Tesla AI Day",
    reading_time: "2 min",
    tags: ["AI", "Robotics", "Tesla", "Optimus"],
    link: "https://www.tesla.com/AI"
  },
  {
    id: 82,
    title: "Meta AI Open-Sources SEER: Self-Supervised Vision Model",
    description: "In November 2021, Meta released SEER (SElf-supERvised), a self-supervised vision model trained on 1 billion uncurated images. It demonstrated that learning features without labels can rival fully supervised models—advancing the field of scalable computer vision.",
    time: "2021-11-17",
    source: "Meta AI Blog",
    reading_time: "2 min",
    tags: ["AI", "Computer Vision", "Self-Supervised", "Meta AI"],
    link: "https://ai.facebook.com/research/publications/seer-self-supervised/"
  },
  {
    id: 83,
    title: "Stanford Study Highlights Major AI Advances in 2021",
    description: "The 2021 Stanford AI Index report noted significant progress across AI subfields—NLP, vision, speech, robotics, and healthcare. It emphasized widespread adoption of models like GPT-3, PaLM, SEER, and OpenAI Codex, marking a transformative year in scale and application.",
    time: "2021-12-15",
    source: "Stanford HAI Report",
    reading_time: "2 min",
    tags: ["AI", "Survey", "Stanford AI Index", "Highlights"],
    link: "https://hai.stanford.edu/research/ai-index-2021"
  },

  // 2022 Starts 

    {
    id: 84,
    title: "OpenAI Launches ChatGPT, Revolutionizing Conversational AI",
    description: "On November 30, 2022, OpenAI released ChatGPT, a conversational AI built on GPT‑3.5. It offered human-like dialogue, code writing assistance, and creative text generation, igniting wide public interest and debates about AI’s societal impact.",
    time: "2022-11-30",
    source: "OpenAI Blog",
    reading_time: "3 min",
    tags: ["AI", "Conversational AI", "ChatGPT", "OpenAI"],
    link: "https://openai.com/blog/chatgpt" // :contentReference[oaicite:1]{index=1}
  },
  {
    id: 85,
    title: "OpenAI Debuts Whisper: Robust Open‑Source Speech Model",
    description: "In September 2022, OpenAI released Whisper, a multitask, multilingual speech recognition system under an MIT license. Trained on 680k hours of data, Whisper achieves strong accuracy across languages and accents.",
    time: "2022-09-21",
    source: "OpenAI (GitHub)",
    reading_time: "2 min",
    tags: ["AI", "Speech Recognition", "Whisper", "OpenAI"],
    link: "https://github.com/openai/whisper" // :contentReference[oaicite:2]{index=2}
  },
  {
    id: 86,
    title: "DeepMind Releases Gato: A 600‑Task Generalist AI",
    description: "In May 2022, DeepMind unveiled Gato—a single agent trained across 604 tasks, including captioning, gaming, and robotics, outperforming humans on many of them. It illustrated potential for general-purpose AI.",
    time: "2022-05-13",
    source: "DeepMind Blog",
    reading_time: "3 min",
    tags: ["AI", "Generalist AI", "Gato", "DeepMind"],
    link: "https://deepmind.com/research/publications/gato-multitask-generalist-agent" // :contentReference[oaicite:3]{index=3}
  },
  {
    id: 87,
    title: "AlphaFold Database Now Covers 200M Protein Structures",
    description: "In July 2022, DeepMind announced that AlphaFold had predicted structures for nearly all known proteins (~200 million), a major milestone for biology and medicine.",
    time: "2022-07-28",
    source: "DeepMind Blog / Nature",
    reading_time: "3 min",
    tags: ["AI", "BioTech", "AlphaFold", "Computational Biology"],
    link: "https://deepmind.com/blog/article/alphafold-Database" // :contentReference[oaicite:4]{index=4}
  },
  {
    id: 88,
    title: "Stable Diffusion Open‑Sources High‑Quality Image Generation",
    description: "On August 22, 2022, Stability AI released Stable Diffusion—a high-quality, open-source text-to-image diffusion model—sparking a boom in AI-generated art and prompting discussions around copyright and creativity.",
    time: "2022-08-22",
    source: "Stability AI Blog",
    reading_time: "2 min",
    tags: ["AI", "Image Generation", "Stable Diffusion", "Open Source"],
    link: "https://stability.ai/blog/stable-diffusion-v1-4-release" // :contentReference[oaicite:5]{index=5}
  },
  {
    id: 89,
    title: "Google Brain Launches Imagen & Parti for Text‑to‑Image",
    description: "In May 2022, Google Brain unveiled Imagen and Parti—text-to-image models known for their photorealism and creative rendering, pushing competing models like DALL·E 2 further.",
    time: "2022-05-24",
    source: "Google Research Blog",
    reading_time: "2 min",
    tags: ["AI", "Image Generation", "Imagen", "Parti", "Google"],
    link: "https://ai.google/research/participainteligence" // :contentReference[oaicite:6]{index=6}
  },
  {
    id: 90,
    title: "Flamingo: DeepMind’s Vision‑Language Few‑Shot Learner",
    description: "In April 2022, DeepMind released Flamingo—a vision-language model capable of few-shot learning from images and text with minimal fine-tuning, demonstrating strong generalization in multimodal tasks.",
    time: "2022-04-28",
    source: "DeepMind Blog",
    reading_time: "2 min",
    tags: ["AI", "Multimodal", "Flamingo", "DeepMind"],
    link: "https://deepmind.com/blog/article/flamingo-a-visual-language-model" // :contentReference[oaicite:7]{index=7}
  },
  {
    id: 91,
    title: "Chinchilla: DeepMind Shows LLMs Need Data Scaling, Not Only Parameters",
    description: "In April 2022, DeepMind introduced Chinchilla, demonstrating that smaller LLMs trained on more data outperform parameter-heavy models—shifting LLM development toward compute-optimal scale.",
    time: "2022-04-24",
    source: "DeepMind Blog",
    reading_time: "2 min",
    tags: ["AI", "NLP", "Chinchilla", "DeepMind"],
    link: "https://deepmind.com/blog/article/chinchilla-language-model" // :contentReference[oaicite:8]{index=8}
  },
  {
    id: 92,
    title: "PaLM 2: Google’s Multilingual & Code‑Capable LLM",
    description: "In November 2022, Google introduced PaLM 2—an improved version of its Pathways language model. It excelled in reasoning, coding, and multilingual understanding, and was integrated into services like Bard and Workspace.",
    time: "2022-11-01",
    source: "Google Research Blog",
    reading_time: "2 min",
    tags: ["AI", "NLP", "PaLM 2", "Google"],
    link: "https://ai.google/paLM2" // :contentReference[oaicite:9]{index=9}
  },
    {
    id: 93,
    title: "Meta Releases Galactica: Scientific Knowledge Model",
    description: "In November 2022, Meta introduced Galactica, a large language model trained on scientific papers, textbooks, and datasets. Designed to assist researchers by summarizing concepts and generating citations, its misuse raised concerns about hallucinations in scientific AI.",
    time: "2022-11-28",
    source: "Meta AI Blog",
    reading_time: "3 min",
    tags: ["AI", "NLP", "Galactica", "Scientific AI", "Meta"],
    link: "https://ai.meta.com/blog/galactica-scientific-reasoning-model"
  },
  {
    id: 94,
    title: "MIT and Harvard Release MEMIT to Edit Model Memories",
    description: "In October 2022, researchers from MIT and Harvard presented MEMIT, a method for fine-grained editing of individual facts in transformer models—addressing misinformation and enabling corrective model updates without full retraining.",
    time: "2022-10-10",
    source: "MIT CSAIL Blog",
    reading_time: "2 min",
    tags: ["AI", "NLP", "Model Editing", "MEMIT", "ML Research"],
    link: "https://www.csail.mit.edu/news/researchers-introduce-memit-edit-transformer-models"
  },
  {
    id: 95,
    title: "AI Act Proposed: EU’s First Comprehensive AI Regulation",
    description: "In April 2022, the European Commission unveiled the AI Act—the world’s first broad AI regulation. It classified AI systems by risk levels and introduced requirements for transparency, safety, and human oversight, setting a global precedent.",
    time: "2022-04-21",
    source: "European Commission Press",
    reading_time: "3 min",
    tags: ["AI", "Ethics", "Policy", "AI Regulation", "EU"],
    link: "https://ec.europa.eu/commission/presscorner/detail/en/ip_21_1682"
  },
  {
    id: 96,
    title: "DeepMind Introduces Reformer‑Style Efficient Transformer",
    description: "In June 2022, DeepMind released an efficient Transformer variant reducing memory use via reversible layers and locality-sensitive hashing. It enabled training of larger models more sustainably.",
    time: "2022-06-15",
    source: "DeepMind Blog",
    reading_time: "2 min",
    tags: ["AI", "Transformer", "Efficiency", "DeepMind", "Reformer"],
    link: "https://deepmind.com/blog/article/reformer-efficient-transformer"
  },
  {
    id: 97,
    title: "Adobe Integrates Generative AI into Photoshop & Firefly",
    description: "In October 2022, Adobe announced Firefly—its generative AI engine—integrated into Photoshop and Illustrator. Artists could now generate and edit images using natural language prompts, democratizing creative workflows.",
    time: "2022-10-26",
    source: "Adobe Blog",
    reading_time: "3 min",
    tags: ["AI", "Creative AI", "Adobe", "Firefly"],
    link: "https://blog.adobe.com/en/publish/2022/10/26/introducing-firefly.html"
  },
  {
    id: 98,
    title: "Alibaba’s Qwen‑2: New Multimodal Large Language Model",
    description: "In December 2022, Alibaba unveiled Qwen‑2—a large model supporting text and image inputs, spanning 70 billion parameters. It marked China’s growing capacity in open, multimodal LLMs for global use.",
    time: "2022-12-20",
    source: "Alibaba DAMO Academy",
    reading_time: "3 min",
    tags: ["AI", "NLP", "Multimodal", "Qwen‑2", "Alibaba"],
    link: "https://damo.alibaba.com/labs/multimodal/qwen-2"
  },

  // 2023 Starts 

  {
    id: 99,
    title: "OpenAI Announces GPT‑4 Launch",
    description: "On March 14, 2023, OpenAI released GPT‑4, a multimodal model capable of processing both text and images. It achieved human-level performance on standardized tests like the SAT and LSAT—marking a major leap in LLM capabilities.",
    time: "2023-03-14",
    source: "TechCrunch / OpenAI",
    reading_time: "3 min",
    tags: ["AI", "NLP", "GPT‑4", "Multimodal"],
    link: "https://techcrunch.com/2023/03/14/openai-launches-gpt-4/"
  },
  {
    id: 100,
    title: "ChatGPT Becomes Multimodal with Voice and Image",
    description: "In September 2023, OpenAI upgraded ChatGPT to process spoken voice and image inputs—allowing it to see and hear users, significantly enhancing interactive capabilities.",
    time: "2023-09-26",
    source: "TIME / OpenAI",
    reading_time: "2 min",
    tags: ["AI", "Conversational AI", "Multimodal", "ChatGPT"],
    link: "https://time.com/6547982/3-big-ai-innovations-from-2023/"
  },
  {
    id: 101,
    title: "Pause Giant AI Experiments Petition Gains Traction",
    description: "In March 2023, a letter signed by AI leaders—including Elon Musk and Yoshua Bengio—called for a six-month pause on training AI systems more powerful than GPT‑4, highlighting growing concern over rapid AI escalation.",
    time: "2023-03-29",
    source: "The New York Times / Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "Ethics", "Policy", "AI Governance"],
    link: "https://en.wikipedia.org/wiki/Pause_Giant_AI_Experiments%3A_An_Open_Letter"
  },
  {
    id: 102,
    title: "Google DeepMind Debuts Gemini Multimodal AI",
    description: "On December 6, 2023, DeepMind released Gemini—a conversational multimodal AI capable of reasoning across text, images, audio, and video—positioned to compete directly with GPT‑4 and Bard.",
    time: "2023-12-06",
    source: "Wired",
    reading_time: "3 min",
    tags: ["AI", "Multimodal", "Gemini", "DeepMind"],
    link: "https://www.wired.com/story/google-deepmind-demis-hassabis-gemini-ai"
  },
  {
    id: 103,
    title: "Mistral AI Launches Open-Source 7B Model",
    description: "In September 2023, Mistral AI launched a 7B-parameter open-source model, gaining attention as a lightweight yet high-performing alternative to larger closed models, and accelerating open-access AI innovation.",
    time: "2023-09-29",
    source: "Reddit / Mistral AI",
    reading_time: "2 min",
    tags: ["AI", "Open Source", "Mistral", "LLaMA"],
    link: "https://www.reddit.com/r/ChatGPT/comments/18vbp2p"
  },
  {
    id: 104,
    title: "OpenAI's GPT‑4 Turbo & Assistants API Launch",
    description: "In November 2023, at OpenAI’s DevDay, they unveiled GPT‑4 Turbo—a faster, cheaper iteration—alongside Assistants API and GPT Builder, empowering developers to create custom agents and multimodal AI experiences.",
    time: "2023-11-07",
    source: "Business Today / Reddit DevDay Summary",
    reading_time: "3 min",
    tags: ["AI", "Developer Tools", "GPT‑4 Turbo", "Assistants API"],
    link: "https://www.businesstoday.in/technology/news/story/sam-altmans-openai-unveils-new-and-improved-gpt-4-turbo-all-you-need-to-know-404799-2023-11-07"
  },
  {
    id: 105,
    title: "Sam Altman Reinstated as OpenAI CEO",
    description: "In a dramatic week in November 2023, OpenAI’s board first fired and then reinstated Sam Altman as CEO following internal and public pressure—a rare example of community influence in AI governance.",
    time: "2023-11-22",
    source: "Reddit / News Coverage",
    reading_time: "2 min",
    tags: ["AI", "Governance", "OpenAI", "Leadership"],
    link: "https://www.reddit.com/r/ChatGPT/comments/18vbp2p"
  },
  {
    id: 106,
    title: "Elon Musk’s xAI Unveils Grok",
    description: "In November 2023, xAI—founded by Elon Musk—launched Grok, an AI assistant integrated into X (formerly Twitter), marking a new entrant into the commercial LLM space.",
    time: "2023-11-06",
    source: "Reddit",
    reading_time: "2 min",
    tags: ["AI", "Conversational AI", "xAI", "Grok"],
    link: "https://www.reddit.com/r/ChatGPT/comments/18vbp2p"
  },

    {
    id: 107,
    title: "Meta Releases LLaMA 2 and Code Llama for Open Use",
    description: "In July 2023, Meta open-sourced LLaMA 2 across three sizes (7B, 13B, 70B) with weights available for commercial use. In August, they followed up with Code Llama—a specialized model for coding tasks that outperforms other open models in completion and translation.",
    time: "2023-07-18",
    source: "Meta AI / Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "Open Source", "LLaMA 2", "Code Llama", "Meta"],
    link: "https://en.wikipedia.org/wiki/Llama_(language_model)" 
  },
  {
    id: 108,
    title: "Falcon 180B: TII Releases Massive Open-Model LLM",
    description: "In September 2023, the Abu Dhabi-based Technology Innovation Institute (TII) launched Falcon 180B—a 180 billion‑parameter language model trained on 3.5 trillion tokens. It became one of the largest openly available models with competitive performance.",
    time: "2023-09-08",
    source: "Reddit / TII",
    reading_time: "2 min",
    tags: ["AI", "Open Source", "Falcon 180B", "LLM"],
    link: "https://www.reddit.com/r/ChatGPTCoding/comments/16dc88l7/falcon_180b_overview/" 
  },
  {
    id: 109,
    title: "IBM Unveils Granite LLMs via watsonx",
    description: "On September 7, 2023, IBM introduced the Granite foundation model series—including multimodal and code-centric variants—integrated into their watsonx platform, aiming to support enterprise-scale AI applications.",
    time: "2023-09-07",
    source: "Wikipedia / IBM",
    reading_time: "2 min",
    tags: ["AI", "Enterprise", "Granite", "IBM"],
    link: "https://en.wikipedia.org/wiki/IBM_Granite"
  },
  {
    id: 110,
    title: "UK Hosts First-Ever Global AI Safety Summit",
    description: "On November 1–2, 2023, the UK hosted the inaugural **AI Safety Summit** at Bletchley Park. Leaders from 28 nations moved to adopt the **Bletchley Declaration**, calling for international cooperation to ensure safe and trustworthy development of frontier AI systems.",
    time: "2023-11-02",
    source: "UK Government / Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "Ethics", "Safety", "Policy", "AI Governance"],
    link: "https://en.wikipedia.org/wiki/AI_Safety_Summit"
  },
  {
    id: 111,
    title: "Figure Robotics Partners with OpenAI, Raises $675M",
    description: "In 2023, Figure—a humanoid robotics startup—announced a partnership with OpenAI to integrate advanced LLMs into its robots. Backed by $675 million from investors including Jeff Bezos, Microsoft, and Nvidia, this marks a pivotal step toward AI-empowered humanoid automation in real-world settings.",
    time: "2023-09-15",
    source: "AP News",
    reading_time: "3 min",
    tags: ["AI", "Robotics", "Figure", "Partnership"],
    link: "https://apnews.com/article/figure-openai-robotics-675m-funding"
  },
  {
    id: 112,
    title: "Google Launches AI Studio & Deepens Gemini Integration",
    description: "On December 13, 2023, Google debuted **AI Studio**, a web-based IDE for building Gemini-powered apps with prompt engineering, parameter tuning, and API access—bridging rapid experimentation and production deployment.",
    time: "2023-12-13",
    source: "Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "Tools", "Gemini", "Google AI Studio"],
    link: "https://en.wikipedia.org/wiki/Google_AI_Studio"
  },

  // 2024 Starts 

    {
    id: 113,
    title: "OpenAI Unveils GPT‑4o: Omni‑modal AI for Text, Vision & Voice",
    description: "In May 2024, OpenAI launched GPT‑4o—its first “omni‑modal” model capable of processing text, images, and audio natively. It set new benchmarks across multilingual, vision, and speech tasks while adding a powerful API and a cost-efficient ‘mini’ variant.",
    time: "2024-05-13",
    source: "Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "Multimodal", "GPT‑4o", "OpenAI"],
    link: "https://en.wikipedia.org/wiki/GPT-4o"
  },
  {
    id: 114,
    title: "ChatGPT Launches GPT Store: Build and Monetize Custom GPTs",
    description: "In January 2024, OpenAI rolled out the GPT Store—a platform for creating, publishing, and monetizing custom GPTs. By May, it opened to all users and introduced tools for ratings, monetization, and a marketplace ecosystem.",
    time: "2024-01-10",
    source: "Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "Developer Tools", "GPT Store", "OpenAI"],
    link: "https://en.wikipedia.org/wiki/GPT_Store"
  },
  {
    id: 115,
    title: "Google I/O 2024: Gemini 1.5 Pro, Gemma 2, plus ImageFX & MusicFX",
    description: "At Google I/O Connect Bengaluru in July 2024, Google released Gemini 1.5 Pro with a 2 million‑token context window, open‑source Gemma 2 models, and creative tools like ImageFX, MusicFX, and TextFX with SynthID watermarks.",
    time: "2024-07-17",
    source: "Google Blog",
    reading_time: "3 min",
    tags: ["AI", "Multimodal", "Gemini", "Gemma", "Google"],
    link: "https://blog.google/technology/ai/2024-ai-extraordinary-progress-advancement/"
  },
  {
    id: 116,
    title: "Microsoft Debuts Phi‑3: Open LLM Family for Developers",
    description: "In May 2024, Microsoft introduced the open‑source Phi‑3 models at Build 2024—small, efficient, and multimodal models aimed at supporting responsible AI deployment.",
    time: "2024-05-21",
    source: "Analytics Vidhya",
    reading_time: "2 min",
    tags: ["AI", "LLM", "Phi‑3", "Microsoft"],
    link: "https://www.analyticsvidhya.com/blog/2024/12/generative-ai-developments/"
  },
  {
    id: 117,
    title: "Apple Intelligence Debuts in iOS 18: Siri Powered by GPT",
    description: "In June 2024, Apple introduced “Apple Intelligence”—integrating GPT‑like capabilities into Siri, photo editing, and writing tools, marking Apple's shift toward on-device generative AI.",
    time: "2024-06-10",
    source: "Analytics Vidhya",
    reading_time: "2 min",
    tags: ["AI", "Mobile AI", "Apple Intelligence", "iOS"],
    link: "https://www.analyticsvidhya.com/blog/2024/12/generative-ai-developments/"
  },
  {
    id: 118,
    title: "OpenAI Launches CriticGPT: AI That Reviews Other AI",
    description: "In June 2024, OpenAI introduced CriticGPT—an AI agent designed to find and flag errors in GPT‑4’s code outputs. It enhances alignment by helping human reviewers monitor and correct model behavior.",
    time: "2024-06-27",
    source: "TechCrunch",
    reading_time: "2 min",
    tags: ["AI", "Alignment", "CriticGPT", "OpenAI"],
    link: "https://techcrunch.com/2024/06/27/openai-critic-gpt/"
  },
  {
    id: 119,
    title: "Ilya Sutskever Leaves OpenAI to Start Safe Superintelligence Inc.",
    description: "In May 2024, OpenAI co‑founder and Chief Scientist Ilya Sutskever departed to launch Safe Superintelligence Inc., focusing on safe development of superintelligent AI, marking a pivotal leadership change.",
    time: "2024-05-14",
    source: "Analytics Vidhya",
    reading_time: "3 min",
    tags: ["AI", "Leadership", "Ethics", "OpenAI"],
    link: "https://www.analyticsvidhya.com/blog/2024/11/2024-for-openai-highs-lows-and-everything-in-between/"
  },
  {
    id: 120,
    title: "Devin AI: Autonomous Coding Agent Emerges",
    description: "In 2024, Cognition Labs released Devin AI—a coding assistant agent designed to autonomously write, debug, deploy, and instrument software, sparking debate over the future of software engineering roles.",
    time: "2024-01-01",
    source: "Codefinity Blog",
    reading_time: "3 min",
    tags: ["AI", "Programming", "Autonomous Agent", "Devin AI"],
    link: "https://codefinity.com/blog/Revolution-in-Artificial-Intelligence-of-2024"
  },
  {
    id: 121,
    title: "OpenAI Partners with Los Alamos for Bioscience AI Research",
    description: "In July 2024, OpenAI teamed with Los Alamos National Laboratory to investigate AI’s role in bioscience research, expanding its collaborations in healthcare and science.",
    time: "2024-07-10",
    source: "TechCrunch",
    reading_time: "2 min",
    tags: ["AI", "Healthcare", "Research", "OpenAI"],
    link: "https://techcrunch.com/2024/07/10/openai-lanos-alamos-partnership/"
  },
    {
    id: 122,
    title: "Anthropic Introduces Claude 3 Family",
    description: "In July 2024, Anthropic launched its Claude 3 suite—featuring Claude 3 Opus (a 1.4 T parameter model) and Claude 3 Haiku (optimized for speed). These models offer enhanced reasoning, code generation, and creative output with improved safety.",
    time: "2024-07-15",
    source: "Anthropic Blog",
    reading_time: "2 min",
    tags: ["AI", "NLP", "Claude 3", "Anthropic"],
    link: "https://www.anthropic.com/blog/introducing-claude-3"
  },
  {
    id: 123,
    title: "Google Rolls Out Bard GPT‑4o-Style Upgrade",
    description: "In June 2024, Google updated Bard with GPT‑4o-level integration—enabling voice, image, and code interactions within its chatbot, narrowing the gap with ChatGPT’s multi-modal offerings.",
    time: "2024-06-20",
    source: "Google Blog",
    reading_time: "2 min",
    tags: ["AI", "Conversational AI", "Bard", "Google"],
    link: "https://blog.google/technology/ai/advancements-in-bard-multimodal/"
  },
  {
    id: 124,
    title: "Meta Releases LLaMA 3 Series for Research",
    description: "In October 2024, Meta released the LLaMA 3 family—ranging from 8B to 70B parameters—to researchers and select partners, offering improved scaling, multi-modal input, and enhanced reasoning.",
    time: "2024-10-11",
    source: "Meta AI Blog",
    reading_time: "3 min",
    tags: ["AI", "Open Source", "LLaMA 3", "Meta"],
    link: "https://ai.meta.com/blog/llama-3-release"
  },
  {
    id: 125,
    title: "Intel Unveils Gaudi‑3 AI Chips",
    description: "In September 2024, Intel launched its Gaudi‑3 AI accelerator—targeting LLM training with up to 1.6 TB memory, offering open-source software stacks and a performance alternative to Nvidia’s H100.",
    time: "2024-09-05",
    source: "Intel Newsroom",
    reading_time: "2 min",
    tags: ["AI", "Hardware", "Gaudi‑3", "Intel"],
    link: "https://www.intel.com/content/www/us/en/newsroom/press-releases/gaudi-3-accelerator.html"
  },
  {
    id: 126,
    title: "EU Parliament Approves AI Act Targeting LLM Risk",
    description: "In July 2024, the European Parliament formally approved the AI Act, introducing risk tiers and regulations tailored to LLMs—including transparency mandates, data audits, and human oversight requirements.",
    time: "2024-07-05",
    source: "European Parliament Press Release",
    reading_time: "3 min",
    tags: ["AI", "Policy", "AI Act", "Governance", "EU"],
    link: "https://www.europarl.europa.eu/news/en/press-room/20240701IPR05215/ai-act-approval"
  },
  {
    id: 127,
    title: "Nvidia Launches Blackwell GPU Architecture",
    description: "In April 2024, Nvidia unveiled its Blackwell GPU architecture—featuring Transformer Engine, FP8 support, and massive tensor core upgrades—delivering up to 4× performance gains for AI training workloads.",
    time: "2024-04-22",
    source: "Nvidia Blog",
    reading_time: "3 min",
    tags: ["AI", "Hardware", "Blackwell", "Nvidia"],
    link: "https://blogs.nvidia.com/blog/2024/04/22/blackwell-architecture-launch/"
  },
  {
    id: 128,
    title: "Race to <100ms LLM Inference Hits Breakthrough",
    description: "In August 2024, research by HuggingFace and EleutherAI demonstrated sub-100ms response times on 70B-parameter models using INT4/INT8 quantization and optimized kernels—paving the way for real-time LLM apps.",
    time: "2024-08-10",
    source: "HuggingFace Blog",
    reading_time: "2 min",
    tags: ["AI", "Performance", "LLM Optimization", "HuggingFace"],
    link: "https://huggingface.co/blog/llm-fast-inference-2024"
  },
  {
    id: 129,
    title: "OpenAI & Google Call for Global AI Safety Agreement",
    description: "In September 2024, OpenAI and Google led a coalition urging G7 countries to establish a multilateral AI safety framework focused on frontier model oversight, risk assessment, and red-teaming protocols.",
    time: "2024-09-25",
    source: "TechCrunch",
    reading_time: "2 min",
    tags: ["AI", "Ethics", "Policy", "AI Governance"],
    link: "https://techcrunch.com/2024/09/25/global-ai-safety-call/"
  },

  // 2025 Starts

  {
    id: 130,
    title: "Broadcom Launches Tomahawk Ultra Networking Chip",
    description: "On July 15, 2025, Broadcom introduced the Tomahawk Ultra Ethernet switch designed to accelerate AI workloads in data centers. With ultra-low latency and support for four times more connected chips than NVIDIA's NVLink, the switch targets high-performance generative AI infrastructure.",
    time: "2025-07-15",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Hardware", "Networking", "Broadcom"],
    link: "https://www.reuters.com/business/broadcom-launches-new-tomahawk-ultra-networking-chip-ai-battle-against-nvidia-2025-07-15/"
  },
  {
    id: 131,
    title: "NVIDIA Resumes H20 AI Chip Sales to China",
    description: "Also on July 15, 2025, NVIDIA received U.S. export licenses allowing it to restart shipments of H20 AI chips to China. The resumed sales are expected to significantly boost NVIDIA’s revenue and re-establish its presence in a key market.",
    time: "2025-07-15",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Hardware", "NVIDIA", "Trade"],
    link: "https://www.reuters.com/technology/nvidia-resume-h20-gpu-sales-china-2025-07-15/"
  },
  {
    id: 132,
    title: "Meta Lures Top AI Talent from OpenAI",
    description: "Meta has further strengthened its AI research team in July 2025 by hiring two leading scientists from OpenAI—Jason Wei and Hyung‑Won Chung—part of a broader $300 million effort to attract top AI talent amid intensifying competition.",
    time: "2025-07-15",
    source: "TechCrunch",
    reading_time: "2 min",
    tags: ["AI", "Talent", "Meta", "Competition"],
    link: "https://techcrunch.com/2025/07/16/meta-reportedly-scores-two-more-high-profile-openai-researchers/"
  },
  {
    id: 133,
    title: "OpenAI Developing Its Own Web Browser",
    description: "Reports in mid-July 2025 indicate OpenAI is building a proprietary web browser to support advanced agentic AI assistants with deeper access to user workflows and data—enhancing task automation capabilities.",
    time: "2025-07-14",
    source: "Business Insider",
    reading_time: "2 min",
    tags: ["AI", "Software", "Browser", "OpenAI"],
    link: "https://www.businessinsider.com/openai-sam-altman-web-browser-chatgpt-why-2025-7"
  },
  {
    id: 134,
    title: "IBM Rolls Out Power11 Servers for AI and Security",
    description: "In early July 2025, IBM launched its Power11 server line—boasting quantum-safe cryptography, near-perfect uptime, and built-in AI accelerators—for secure and resilient AI workloads in enterprise data centers.",
    time: "2025-07-10",
    source: "TechRadar Pro",
    reading_time: "2 min",
    tags: ["AI", "Hardware", "Enterprise", "IBM"],
    link: "https://www.techradar.com/pro/ibm-unveils-first-new-power-servers-for-years-to-boost-ai-and-security"
  },
  {
    id: 135,
    title: "OpenAI Hires xAI Engineers for Scalability Team",
    description: "In late June 2025, OpenAI reportedly recruited four engineers from Elon Musk’s xAI and X to join its Stargate infrastructure team—tasked with scaling AI compute platforms and reinforcing backend capability.",
    time: "2025-07-10",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Hiring", "OpenAI", "Infrastructure"],
    link: "https://www.reuters.com/business/openai-google-xai-battle-superstar-ai-talent-shelling-out-millions-2025-05-21/"
  },
  {
    id: 136,
    title: "OpenAI Faces IRS Watchdog Complaint Over Executive Pay",
    description: "In early July 2025, watchdog group Midas Project filed an IRS complaint alleging Sam Altman may profit improperly from OpenAI’s nonprofit status—renewing debate about transparency and governance in hybrid AI organizations.",
    time: "2025-07-10",
    source: "Cointelegraph",
    reading_time: "2 min",
    tags: ["AI", "Governance", "OpenAI", "Ethics"],
    link: "https://cointelegraph.com/news/openai-faces-irs-complaint-over-alleged-tax-violations"
  },
  {
    id: 137,
    title: "Microsoft–OpenAI Dispute Over AGI Contract Clause",
    description: "Recently, a standoff emerged between Microsoft and OpenAI over a contractual “AGI clause”—which could restrict OpenAI from delivering future AGI models to Microsoft—highlighting rising tensions in their deep AI partnership.",
    time: "2025-07-13",
    source: "Wired",
    reading_time: "2 min",
    tags: ["AI", "Contract", "Microsoft", "OpenAI"],
    link: "https://www.wired.com/story/microsoft-and-openais-agi-fight-is-bigger-than-a-contract/"
  },
  {
    id: 138,
    title: "OpenAI Adopts Model Context Protocol for Tool Integration",
    description: "In March 2025, OpenAI officially adopted the model context protocol (MCP), enabling standardized connections between GPT agents and external tools—streamlining tool access across agents and APIs.",
    time: "2025-03-01",
    source: "Wikipedia",
    reading_time: "2 min",
    tags: ["AI", "Tools", "OpenAI", "Developer"],
    link: "https://en.wikipedia.org/wiki/Model_Context_Protocol"
  },
  {
    id: 139,
    title: "Paris Hosts 2025 AI Action Summit with €200 B InvestAI Fund",
    description: "On February 10–11, 2025 in Paris, the AI Action Summit gathered global AI leaders—President Macron and PM Modi co-chaired. The €200 billion 'InvestAI' initiative was launched alongside pledges for AI megafactories and billion-dollar funding from EU nations.",
    time: "2025-02-10",
    source: "Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "Policy", "Summit", "InvestAI"],
    link: "https://en.wikipedia.org/wiki/AI_Action_Summit_2025"
  },
  {
    id: 140,
    title: "OpenAI and Partners Launch Stargate LLC",
    description: "On January 21, 2025, OpenAI, SoftBank, Oracle, and MGX founded Stargate LLC—pledging $500 billion for distributed AI infrastructure across the U.S., aiming to build 10 datacenters by 2029 under executive support.",
    time: "2025-01-21",
    source: "Wikipedia",
    reading_time: "3 min",
    tags: ["AI", "Infrastructure", "Stargate", "Public-Private"],
    link: "https://en.wikipedia.org/wiki/Stargate_LLC"
  },
  {
    id: 141,
    title: "DeepSeek‑R1 Surpasses GPT‑4 Competitively",
    description: "In January 2025, DeepSeek released DeepSeek‑R1—an open-source LLM achieving benchmark parity with GPT‑4 across math, reasoning, and coding. Downloads surged, temporarily impacting NVIDIA stock amid market shake-up fears.",
    time: "2025-01-20",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Open Source", "DeepSeek", "LLM"],
    link: "https://www.reuters.com/business/deepseek-r1-competitor-gpt4-2025-01-20/"
  },
  {
    id: 142,
    title: "GPT‑5 Coming Soon; 99% Code Automation Predicted",
    description: "In May 2025, OpenAI’s Kevin Weil announced GPT‑5 is 'coming soon', and predicted AI will handle 99% of coding tasks by year’s end—signaling confidence in software automation transformations.",
    time: "2025-05-17",
    source: "CryptoNewsZ",
    reading_time: "2 min",
    tags: ["AI", "NLP", "GPT‑5", "Coding"],
    link: "https://www.cryptonewsz.com/ai/gpt-5-coming-soon-coding-prediction/"
  },
  {
    id: 143,
    title: "Adobe Launches IP‑Safe Firefly Video Generator",
    description: "In February 2025, Adobe debuted its IP‑safe Firefly Video Model—offering 1080p text‑to‑video creation trained on licensed content, with lip-sync, translation, and advanced editing tools for creators.",
    time: "2025-02-14",
    source: "Enoumen",
    reading_time: "2 min",
    tags: ["AI", "Video", "Adobe", "Creative"],
    link: "https://enoumen.com/adobe-firefly-video-launch-2025/"
  },
  {
    id: 144,
    title: "OpenAI Debuts Agentic Browser ‘Neon’ by Opera",
    description: "In April 2025, Opera launched 'Neon'—an AI-driven browser with autonomous agents capable of booking, coding, and on-device task automation, marking a new class of user-facing AI platforms.",
    time: "2025-05-01",
    source: "Enoumen",
    reading_time: "2 min",
    tags: ["AI", "Browser", "Agentic", "Opera"],
    link: "https://enoumen.com/opera-neon-agent-browser-2025/"
  },
  {
    id: 145,
    title: "Alibaba Releases Qwen‑2.5 Omni‑7B for Mobile Media",
    description: "In March 2025, Alibaba launched Qwen‑2.5 Omni‑7B—a lightweight multimodal model capable of handling text, audio, image, and video on-device—optimized for mobile and edge applications.",
    time: "2025-03-27",
    source: "Enoumen",
    reading_time: "2 min",
    tags: ["AI", "Multimodal", "Edge", "Alibaba"],
    link: "https://enoumen.com/alibaba-qwen-2-5-omni-7b-launch/"
  },
  {
    id: 146,
    title: "Google DeepMind Unveils AlphaEvolve Coding Agent",
    description: "In May 2025, DeepMind introduced AlphaEvolve—a Gemini-powered agent that autonomously discovers new algorithms, optimizes code for performance, and aids scientific breakthroughs in math and chip design.",
    time: "2025-05-14",
    source: "Enoumen",
    reading_time: "2 min",
    tags: ["AI", "Code", "DeepMind", "Agent"],
    link: "https://enoumen.com/deepmind-alphaevolve-release-2025/"
  },
  {
    id: 147,
    title: "California Courts May Require AI Use Policies",
    description: "On July 15, 2025, California’s Judicial Council proposed new rules mandating all state courts implement policies on generative AI—covering confidentiality, bias mitigation, transparency, and usage restrictions—positioning California as a national leader in judicial AI regulation.",
    time: "2025-07-15",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Policy", "Governance", "Judiciary"],
    link: "https://www.reuters.com/legal/government/california-court-system-decide-ai-rule-2025-07-15/"
  },
  {
    id: 148,
    title: "OpenAI Delays Open‑Weight Model Release, Prioritizes Safety",
    description: "In July 2025, OpenAI postponed its planned launch of an open-weight model to conduct extra safety evaluations—a move prompted by concerns over recent ethical incidents across the industry.",
    time: "2025-07-12",
    source: "Business Insider",
    reading_time: "2 min",
    tags: ["AI", "Safety", "Open‑Source", "OpenAI"],
    link: "https://www.businessinsider.com/openai-delays-launch-of-open-weight-ai-model-for-additional-safety-testing-2025-7"
  },
  {
    id: 149,
    title: "AI‑Powered Web Browser From OpenAI Nears Launch",
    description: "In July 2025, reports confirmed OpenAI is testing its own browser built on Chromium, intended to support agent-like interactions, deep task automation, and possibly challenge Chrome’s dominance.",
    time: "2025-07-10",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Software", "Browser", "OpenAI"],

    link: "https://www.reuters.com/business/media-telecom/openai-release-web-browser-challenge-google-chrome-2025-07-09/"
  },
  {
    id: 150,
    title: "Elon Musk Unveils Grok 4 Amid Content Controversy",
    description: "In July 2025, xAI launched Grok 4, touting it as the “world’s most powerful AI assistant.” A live demo revealed both impressive reasoning and controversial outputs, prompting a temporary suspension to refine reliability.",
    time: "2025-07-10",
    source: "The Verge",
    reading_time: "2 min",
    tags: ["AI", "Conversational AI", "Grok", "xAI"],
    link: "https://www.theverge.com/x-ai/703721/grok-4-x-ai-elon-musk-live-demo"
  },
  {
    id: 151,
    title: "Microsoft Testing In‑House Reasoning AI Models (MAI)",
    description: "In March 2025, Reuters reported that Microsoft is developing its own ‘MAI’ reasoning models as potential alternatives to OpenAI's GPT, aiming to reduce reliance on third-party technologies.",
    time: "2025-03-07",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Enterprise", "Microsoft", "LLM"],
    link: "https://www.reuters.com/technology/microsoft-testing-mai-models-2025-03-07/"
  },
  {
    id: 152,
    title: "OpenAI Launches Operator: Browser-Based Agent",
    description: "In January 2025, OpenAI introduced Operator—a research-preview AI agent that can autonomously browse websites to complete tasks like form-filling, ticket booking, and grocery orders—now available to ChatGPT Pro users.",
    time: "2025-01-23",
    source: "Wall Street Journal",
    reading_time: "2 min",
    tags: ["AI", "Agent", "OpenAI", "Automation"],
    link: "https://www.wsj.com/articles/openai-launches-operator-browser-agent-2025"
  },
  {
    id: 153,
    title: "OpenAI Rolls Out GPT‑4.5 (Orion) and Roadmaps GPT‑5",
    description: "In February 2025, OpenAI announced GPT‑4.5 ('Orion') and shared its roadmap toward GPT‑5—emphasizing improvements in reasoning, efficiency, and broader free-tier accessibility.",
    time: "2025-02-14",
    source: "TechCrunch",
    reading_time: "2 min",
    tags: ["AI", "NLP", "GPT‑4.5", "GPT‑5", "Roadmap"],
    link: "https://techcrunch.com/2025/02/14/openai-gpt-4-5-orion-roadmap-gpt-5/"
  },
  {
    id: 154,
    title: "DeepSeek‑R1 Surpasses GPT‑4 in Open‑Source Benchmarks",
    description: "In January 2025, the open-source DeepSeek‑R1 matched GPT‑4 performance on math, reasoning, and coding benchmarks—becoming the most downloaded app on the App Store and causing a dip in NVIDIA’s stock.",
    time: "2025-01-20",
    source: "Reuters",
    reading_time: "2 min",
    tags: ["AI", "Open Source", "DeepSeek", "LLM"],
    link: "https://www.reuters.com/business/deepseek-r1-competitor-gpt4-2025-01-20/"
  }
];

export default aiProgramming;
