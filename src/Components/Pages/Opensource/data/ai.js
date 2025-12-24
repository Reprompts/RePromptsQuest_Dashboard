const ai = {
  label: '🧠 AI/ML Projects',
  projects: [
    
{
  id: 1,
  title: 'fastai',
  creator: 'fast.ai Team (Jeremy Howard & Sylvain Gugger)',
  description: 'fastai is a deep learning library built on top of PyTorch that simplifies training fast and accurate neural nets using modern best practices. It aims to democratize AI through high-level APIs and a strong community.',
  link: 'https://github.com/fastai/fastai',
  demo_url: 'https://course.fast.ai/',
  tags: ['Deep Learning', 'PyTorch', 'NLP', 'CV', 'Education'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Beginner to Advanced',
  use_case: 'Rapidly train deep learning models with minimal code while following best practices.',
  quickstart: 'pip install fastai',
  highlight: 'Community Favorite',
  reviews: [
    'The best library for learning and experimenting with deep learning models.',
    'fastai saved me weeks of boilerplate code when working with image datasets.',
    'Very active community and excellent course support!',
    'Great documentation, examples, and support forums.',
    'Perfect entry point into deep learning with real-world applications.'
  ]
},
{
  id: 2,
  title: 'DeOldify',
  creator: 'Jason Antic',
  description: 'DeOldify is a deep learning-based project for colorizing and restoring old images and videos using Generative Adversarial Networks (GANs). It sparked viral interest on Reddit and GitHub in 2018.',
  link: 'https://github.com/jantic/DeOldify',
  demo_url: 'https://deepai.org/machine-learning-model/colorizer',
  tags: ['GAN', 'Image Processing', 'Restoration', 'Computer Vision', 'Media'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate to Advanced',
  use_case: 'Colorize black and white images and enhance old videos using AI.',
  quickstart: 'git clone https://github.com/jantic/DeOldify.git',
  highlight: 'Viral Project',
  reviews: [
    'Incredible results on historic photos! Brings old memories to life.',
    'One of the most impressive real-world uses of GANs I’ve seen.',
    'Running it locally with GPU works like a charm.',
    'Tutorials are easy to follow even for non-experts.',
    'Looks like magic when applied to family albums.'
  ]
},
{
  id: 3,
  title: 'BERT',
  creator: 'Google AI Research',
  description: 'BERT (Bidirectional Encoder Representations from Transformers) revolutionized NLP in 2018 by introducing deep bidirectional transformers for language understanding, becoming a base model for many downstream tasks.',
  link: 'https://github.com/google-research/bert',
  demo_url: 'https://huggingface.co/bert-base-uncased',
  tags: ['NLP', 'Transformers', 'Google', 'Pretrained Models', 'Language Models'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Advanced',
  use_case: 'Fine-tune BERT for tasks like text classification, Q&A, sentiment analysis.',
  quickstart: 'pip install transformers',
  highlight: 'Game Changer',
  reviews: [
    'BERT changed how we do NLP—this is foundational!',
    'Still one of the most used transformer architectures.',
    'Great accuracy boost with transfer learning.',
    'It powers modern applications like chatbots and search engines.',
    'Hard to beat BERT’s versatility across tasks.'
  ]
},
{
  id: 4,
  title: 'MMDetection',
  creator: 'OpenMMLab (Chinese Academy of Sciences)',
  description: 'MMDetection is an open-source object detection toolbox based on PyTorch. It supports many popular detection frameworks like Faster R-CNN, RetinaNet, Mask R-CNN, and more.',
  link: 'https://github.com/open-mmlab/mmdetection',
  demo_url: 'https://mmdetection.readthedocs.io/',
  tags: ['Object Detection', 'Computer Vision', 'PyTorch', 'OpenMMLab'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Train and evaluate a wide variety of object detectors with modular configs.',
  quickstart: 'pip install mmdet',
  highlight: 'Modular Design',
  reviews: [
    'One-stop shop for object detection research and deployment.',
    'Excellent architecture and reusable components.',
    'Supports dozens of detectors out-of-the-box.',
    'Super active development by the OpenMMLab team.',
    'Documentation and examples are solid for researchers and engineers alike.'
  ]
},
{
  id: 5,
  title: 'DeepSpeech',
  creator: 'Mozilla Research',
  description: 'DeepSpeech is an open-source automatic speech recognition (ASR) engine based on Baidu’s Deep Speech architecture. It enables offline and real-time voice-to-text transcription.',
  link: 'https://github.com/mozilla/DeepSpeech',
  demo_url: 'https://github.com/mozilla/DeepSpeech/releases',
  tags: ['Speech Recognition', 'ASR', 'Deep Learning', 'Audio', 'Voice'],
  language: 'Python, C++',
  license: 'MPL-2.0',
  level: 'Intermediate',
  use_case: 'Convert spoken language into text using a trained neural network.',
  quickstart: 'pip install deepspeech',
  highlight: 'Voice Tech Pioneer',
  reviews: [
    'A milestone project in open speech recognition!',
    'Easy to set up and run even on Raspberry Pi.',
    'Works surprisingly well offline with pre-trained models.',
    'Though discontinued, it’s still useful and widely forked.',
    'A great way to study speech-to-text models and datasets.'
  ]
},
   {
  id: 6,
  title: 'fastai',
  creator: 'fast.ai Research Group',
  description: 'fastai is a deep learning library that simplifies training neural networks using modern best practices. Built on top of PyTorch, it enables practitioners to train state-of-the-art models with minimal code.',
  link: 'https://github.com/fastai/fastai',
  demo_url: 'https://docs.fast.ai/',
  tags: ['Deep Learning', 'PyTorch', 'Research', 'API Wrapper', 'Education'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Beginner to Advanced',
  use_case: 'Train and deploy cutting-edge deep learning models for vision, text, tabular, and collaborative filtering.',
  quickstart: 'pip install fastai',
  highlight: 'Top Educational AI Library',
  reviews: [
    'Made deep learning more accessible than ever.',
    'Incredible documentation and supportive community.',
    'fastai abstracts away complexity but still allows fine-grained control.',
    'My go-to library for practical DL experiments.',
    'It’s like Keras but more powerful, thanks to PyTorch underneath.'
  ]
},
{
  id: 7,
  title: 'Faceswap',
  creator: 'deepfakes/faceswap Team',
  description: 'Faceswap is the leading open-source software for deepfake creation. It provides tools for training, converting, and creating realistic face-swapped videos using deep learning.',
  link: 'https://github.com/deepfakes/faceswap',
  demo_url: 'https://faceswap.dev/',
  tags: ['Deepfake', 'Computer Vision', 'Face Recognition', 'Video Processing'],
  language: 'Python',
  license: 'GNU GPLv3',
  level: 'Intermediate to Advanced',
  use_case: 'Create deepfake videos and understand facial recognition models.',
  quickstart: 'pip install -r requirements.txt',
  highlight: 'Most Popular Deepfake Toolkit',
  reviews: [
    'Incredibly powerful tool for face-swapping research.',
    'The UI and training pipeline are well-designed.',
    'Great for learning GAN-based video generation.',
    'Requires a good GPU, but results are amazing.',
    'Perfect blend of open-source and community-driven development.'
  ]
},
{
  id: 8,
  title: 'GluonCV',
  creator: 'Amazon AWS + Apache MXNet Contributors',
  description: 'GluonCV is a deep learning toolkit for computer vision tasks built on MXNet. It includes pre-trained models and tools for detection, segmentation, and classification.',
  link: 'https://github.com/dmlc/gluon-cv',
  demo_url: 'https://cv.gluon.ai/',
  tags: ['Computer Vision', 'Pretrained Models', 'MXNet', 'Detection', 'Segmentation'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate',
  use_case: 'Use state-of-the-art models for object detection, pose estimation, and image classification.',
  quickstart: 'pip install gluoncv',
  highlight: 'Strong MXNet CV Library',
  reviews: [
    'Very easy to get started with pre-trained vision models.',
    'Great for benchmarking classic CV tasks.',
    'Documentation is solid and community active.',
    'Alternative to PyTorch/TensorFlow for CV research.',
    'Good integration with Amazon ecosystem.'
  ]
},
{
  id: 9,
  title: 'DVC (Data Version Control)',
  creator: 'Iterative.ai',
  description: 'DVC is a version control system for machine learning projects. It handles data, models, and pipelines using Git-like operations to ensure reproducibility and collaboration.',
  link: 'https://github.com/iterative/dvc',
  demo_url: 'https://dvc.org/doc/start',
  tags: ['MLOps', 'Data Versioning', 'Pipeline Management', 'Reproducibility'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Version datasets and machine learning models in sync with code.',
  quickstart: 'pip install dvc',
  highlight: 'Essential MLOps Tool',
  reviews: [
    'Transforms ML workflows into reproducible pipelines.',
    'Like Git for your data and models.',
    'Works perfectly in team environments.',
    'No more model file mess in projects.',
    'A must-have tool for serious ML practitioners.'
  ]
},
{
  id: 10,
  title: 'DeepSpeech',
  creator: 'Mozilla',
  description: 'DeepSpeech is an open-source Speech-To-Text engine based on Baidu’s Deep Speech research. It allows developers to build speech recognition into any application.',
  link: 'https://github.com/mozilla/DeepSpeech',
  demo_url: 'https://deepspeech.readthedocs.io/',
  tags: ['Speech Recognition', 'STT', 'Deep Learning', 'Voice AI'],
  language: 'Python, C++',
  license: 'MPL-2.0',
  level: 'Intermediate',
  use_case: 'Build real-time or offline voice-to-text systems.',
  quickstart: 'pip install deepspeech',
  highlight: 'Best FOSS Voice Recognition Engine (2018)',
  reviews: [
    'Performs surprisingly well even on noisy data.',
    'Great performance with low resource usage.',
    'Easy to integrate and works offline!',
    'Still a solid alternative to paid APIs.',
    'Open-source voice tech done right.'
  ]
},
{
  id: 11,
  title: 'DVC (Data Version Control)',
  creator: 'Iterative.ai',
  description: 'DVC is a data version control system for ML projects, enabling reproducibility, experiment tracking, and seamless collaboration with Git.',
  link: 'https://github.com/iterative/dvc',
  demo_url: 'https://dvc.org/doc/use-cases',
  tags: ['Version Control', 'ML Workflow', 'Data Engineering', 'CLI'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate',
  use_case: 'Track datasets, models, and experiments as you would code with Git.',
  quickstart: 'pip install dvc',
  highlight: 'Featured at major ML ops conferences',
  reviews: [
    'A must-have tool for MLOps and team collaboration.',
    'Helps avoid the mess of tracking data manually.',
    'Seamlessly integrates into Git workflows.',
    'Excellent documentation and growing ecosystem.',
    'Perfect for enterprise and academic ML pipelines.'
  ]
},
{
  id: 12,
  title: 'Catalyst',
  creator: 'Catalyst Team / Scikit-Catalyst',
  description: 'Catalyst is a PyTorch-based framework for deep learning research and reproducible experimentation with clean abstractions.',
  link: 'https://github.com/catalyst-team/catalyst',
  demo_url: 'https://catalyst-team.com/',
  tags: ['PyTorch', 'DL Framework', 'Research', 'Reproducibility'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Run reproducible and scalable deep learning experiments easily.',
  quickstart: 'pip install catalyst',
  highlight: 'Widely adopted in research and competitions',
  reviews: [
    'Helps maintain clean, reproducible deep learning codebases.',
    'Supports distributed training and experiment logging.',
    'Loved the built-in callbacks and experiment tracking.',
    'Easy to use for both prototyping and production.',
    'Documentation is robust and beginner-friendly.'
  ]
},
{
  id: 13,
  title: 'MLflow',
  creator: 'Databricks',
  description: 'MLflow is an open-source platform for managing the complete machine learning lifecycle, including experiment tracking, model packaging, and deployment.',
  link: 'https://github.com/mlflow/mlflow',
  demo_url: 'https://mlflow.org/',
  tags: ['MLOps', 'Experiment Tracking', 'Model Registry', 'Deployment'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate',
  use_case: 'Track experiments, log models, and manage lifecycles across teams.',
  quickstart: 'pip install mlflow',
  highlight: 'Industry-standard for model lifecycle management',
  reviews: [
    'It brought order to our ML pipeline chaos!',
    'Easy to integrate with existing tools and platforms.',
    'The UI and tracking APIs are a huge productivity boost.',
    'Scales well from personal projects to teams.',
    'Great for reproducibility and audit trails.'
  ]
},
{
  id: 14,
  title: 'Chainer',
  creator: 'Preferred Networks',
  description: 'Chainer is a powerful, flexible, and intuitive deep learning framework that supports dynamic computation graphs.',
  link: 'https://github.com/chainer/chainer',
  demo_url: 'https://chainer.org/',
  tags: ['Deep Learning', 'Framework', 'Dynamic Graphs', 'Python'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Train complex DL models with ease using dynamic graph execution.',
  quickstart: 'pip install chainer',
  highlight: 'Early pioneer in dynamic computation graphs (pre-TF 2.0)',
  reviews: [
    'Loved its flexibility for dynamic models.',
    'Paved the way for PyTorch-like libraries.',
    'Used it in several early academic research papers.',
    'Solid documentation and active devs at the time.',
    'Eventually merged with CuPy and faded—but influential.'
  ]
},
{
  id: 15,
  title: 'TensorBoardX',
  creator: 'lanpa (GitHub)',
  description: 'TensorBoardX lets you log PyTorch training metrics to TensorBoard, bringing visualization support to PyTorch before native support existed.',
  link: 'https://github.com/lanpa/tensorboardX',
  demo_url: 'https://tensorboardx.readthedocs.io/',
  tags: ['Visualization', 'Logging', 'TensorBoard', 'PyTorch'],
  language: 'Python',
  license: 'MIT',
  level: 'Beginner to Intermediate',
  use_case: 'Visualize PyTorch training metrics using TensorBoard-style dashboards.',
  quickstart: 'pip install tensorboardX',
  highlight: 'Bridged the gap before native TensorBoard support in PyTorch',
  reviews: [
    'Was a game-changer in visualizing PyTorch models.',
    'Easy to integrate into existing training loops.',
    'Still useful for custom metrics and logs.',
    'Great example of community solving an ecosystem gap.',
    'Documentation was simple and effective.'
  ]
},

// Start 2019

{
  id: 16,
  title: 'Optuna',
  creator: 'Preferred Networks',
  description: 'Optuna is a hyperparameter optimization framework with an intuitive "define‑by‑run" API, efficient pruning, and easy parallelization—designed to automate ML experiment tuning.',
  link: 'https://github.com/optuna/optuna',
  demo_url: 'https://optuna.org/',
  tags: ['Hyperparameter Optimization', 'AutoML', 'Scalable', 'Python'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate to Advanced',
  use_case: 'Automate hyperparameter searches with Bayesian optimization and pruning.',
  quickstart: 'pip install optuna',
  highlight: 'Best-in-class HPO Framework',
  reviews: [
    'Dynamic search spaces make tuning models a breeze.',
    'Pruning functionality saved days of wasted compute.',
    'Great integration with Keras, PyTorch, XGBoost.',
    'Intuitive dashboard for monitoring trials.',
    'Fast becoming a staple in ML pipelines.'
  ]
},
{
  id: 17,
  title: 'fairseq',
  creator: 'Facebook AI Research',
  description: 'fairseq is a sequence‑modeling toolkit built on PyTorch, enabling training of custom models for translation, summarization, language modeling, and more, with distributed support.',
  link: 'https://github.com/pytorch/fairseq',
  demo_url: 'https://github.com/pytorch/fairseq',
  tags: ['NLP', 'Translation', 'PyTorch', 'Distributed Training'],
  language: 'Python',
  license: 'MIT',
  level: 'Advanced',
  use_case: 'Train SOTA transformer models for translation or summarization.',
  quickstart: 'pip install fairseq',
  highlight: 'SOTA NLP at Scale',
  reviews: [
    'Great for large-scale translation tasks.',
    'Built-in scripts simplify model training.',
    'Supports multi-GPU and mixed precision.',
    'Used by major universities and labs.',
    'Flexible for research and production.'
  ]
},
{
  id: 18,
  title: 'MediaPipe',
  creator: 'Google Research',
  description: 'MediaPipe is a cross-platform framework for building ML perception pipelines, offering ready-to-use modules like face detection, pose estimation, and hand tracking.',
  link: 'https://github.com/google/mediapipe',
  demo_url: 'https://solutions.mediapipe.dev/',
  tags: ['Computer Vision', 'Real-time', 'Cross-platform', 'Media Processing'],
  language: 'C++, Python, JavaScript',
  license: 'Apache-2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Build real-time vision apps with modular pipelines.',
  quickstart: 'pip install mediapipe',
  highlight: 'Real-Time Perception Framework',
  reviews: [
    'Face mesh and hand tracking are super smooth.',
    'Modular pipelines simplify CV workflows.',
    'Runs efficiently on mobile and web.',
    'Ideal for AR and interactive applications.',
    'Documentation covers everything from tutorials to APIs.'
  ]
},
{
  id: 19,
  title: 'NNI (Neural Network Intelligence)',
  creator: 'Microsoft Research',
  description: 'NNI is an AutoML toolkit for automating feature engineering, hyperparameter tuning, and neural architecture search across PyTorch, TensorFlow, and other frameworks.',
  link: 'https://github.com/microsoft/nni',
  demo_url: 'https://nni.readthedocs.io/',
  tags: ['AutoML', 'NAS', 'Hyperparameter Tuning', 'MLOps'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate to Advanced',
  use_case: 'Perform automated tuning and architecture search at scale.',
  quickstart: 'pip install nni',
  highlight: 'Enterprise-Grade AutoML',
  reviews: [
    'Feature-rich AutoML for production use.',
    'Supports custom search spaces and algorithms.',
    'Great for neural architecture search.',
    'Works across frameworks with minimal config.',
    'Dashboard simplifies experiment comparison.'
  ]
},
{
  id: 20,
  title: 'DeepRec',
  creator: 'Shuai Zhang et al.',
  description: 'DeepRec is an open-source toolkit featuring deep learning algorithms for recommendation systems, covering ranking, rating prediction, and sequential recommendations.',
  link: 'https://github.com/cheungdaven/DeepRec',
  demo_url: 'https://arxiv.org/abs/1905.10536',
  tags: ['Recommender Systems', 'Deep Learning', 'TensorFlow', 'Personalization'],
  language: 'Python (TensorFlow)',
  license: 'GPL-3.0',
  level: 'Intermediate to Advanced',
  use_case: 'Build and benchmark deep learning recommendation models.',
  quickstart: 'git clone https://github.com/cheungdaven/DeepRec.git',
  highlight: 'Complete DL RecSys Toolkit',
  reviews: [
    'Covers multiple recommendation scenarios.',
    'Easy to plug-and-play models.',
    'Enables research-level comparisons.',
    'Great starting point for recsys devs.',
    'Extensible and well-structured.'
  ]
},
{
  id: 21,
  title: 'Albumentations',
  creator: 'Alexander Buslaev et al.',
  description: 'Albumentations is a fast and flexible image augmentation library, offering a rich set of transforms built on OpenCV, ideal for CV pipelines.',
  link: 'https://github.com/albumentations-team/albumentations',
  demo_url: 'https://albumentations.ai/docs/',
  tags: ['Image Processing', 'Data Augmentation', 'Computer Vision', 'OpenCV'],
  language: 'Python',
  license: 'MIT',
  level: 'Beginner to Intermediate',
  use_case: 'Boost CV model robustness with diverse augmentations.',
  quickstart: 'pip install albumentations',
  highlight: 'Top CV Augmentation Toolkit',
  reviews: [
    'Transforms are powerful and easy to chain.',
    'Documentation includes use-case examples.',
    'Speeds up image pipelines significantly.',
    'GPU-compatible augmentations are a plus.',
    'Perfect for training robust vision models.'
  ]
},
{
  id: 22,
  title: 'Infer.NET',
  creator: 'Microsoft Research',
  description: 'Infer.NET is a framework for probabilistic programming and Bayesian ML, offering inference capabilities in graphical models and being open‑sourced in 2019.',
  link: 'https://github.com/dotnet/infer',
  demo_url: 'https://dotnet.github.io/infer/',
  tags: ['Probabilistic Programming', 'Bayesian Models', '.NET'],
  language: 'C#',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Build and perform inference on Bayesian graphical models.',
  quickstart: 'dotnet add package Microsoft.ML.Probabilistic',
  highlight: 'Bayesian Inference in .NET',
  reviews: [
    'Probabilistic programming made easy in C#.',
    'Ideal for complex graphical models.',
    'Microsoft’s backing gives confidence.',
    'Great for enterprise analytics scenarios.',
    'Good documentation and examples.'
  ]
},
{
  id: 23,
  title: 'RetinaNet (Keras)',
  creator: 'Fizyr Team',
  description: 'The Keras implementation of RetinaNet delivers state-of-the-art focal loss object detection with simple API and pre-trained weights.',
  link: 'https://github.com/fizyr/keras-retinanet',
  demo_url: 'https://github.com/fizyr/keras-retinanet#demo',
  tags: ['Object Detection', 'Keras', 'Computer Vision', 'Focal Loss'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate to Advanced',
  use_case: 'Train or fine-tune high-accuracy object detectors easily.',
  quickstart: 'pip install keras-retinanet',
  highlight: 'SOTA Object Detection Tool',
  reviews: [
    'Excellent results with minimal setup.',
    'Focal loss makes a real difference.',
    'Plugin to COCO and custom datasets is seamless.',
    'Active repo with community support.',
    'Great for both research and production.'
  ]
},
{
  id: 24,
  title: 'ChainerCV',
  creator: 'Preferred Networks',
  description: 'ChainerCV offers a set of vision models and tools built atop Chainer, providing implementations for detection, segmentation, pose estimation and more.',
  link: 'https://github.com/chainer/chainercv',
  demo_url: 'https://chainercv.github.io/',
  tags: ['Computer Vision', 'Chainer', 'Detection', 'Segmentation'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Use pre-built CV models and pipelines for Chainer users.',
  quickstart: 'pip install chainercv',
  highlight: 'CV Toolkit for Chainer',
  reviews: [
    'Great models ready to use.',
    'Simplified training pipelines.',
    'Useful for academic Chainer users.',
    'Good docs and tutorials.',
    'Bridged a gap in the Chainer ecosystem.'
  ]
},
{
  id: 25,
  title: 'OpenMined / PySyft',
  creator: 'OpenMined Community',
  description: 'PySyft is a Python framework for encrypted, privacy-preserving deep learning, enabling secure multi-party computation and federated learning.',
  link: 'https://github.com/OpenMined/PySyft',
  demo_url: 'https://github.com/OpenMined/PySyft',
  tags: ['Privacy', 'Federated Learning', 'Encrypted ML', 'Security'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Advanced',
  use_case: 'Build secure, privacy-compliant ML workflows.',
  quickstart: 'pip install syft',
  highlight: 'Privacy-Preserving ML Pioneer',
  reviews: [
    'Federated learning in Python—very impressive.',
    'Encrypted tensor operations feel magical.',
    'Great for GDPR-compliant applications.',
    'Active and growing open-source community.',
    'Advanced but game-changing for secure AI.'
  ]
},

// Start 2020 

{
  id: 26,
  title: 'DeepSpeed',
  creator: 'Microsoft Research',
  description: 'DeepSpeed is a deep learning optimization library for PyTorch that enables efficient training of massive models, including the Zero Redundancy Optimizer (ZeRO) for trillion‑parameter scale.',
  link: 'https://github.com/microsoft/DeepSpeed',
  demo_url: 'https://www.deepspeed.ai/',
  tags: ['Large‑Scale Training', 'PyTorch', 'ZeRO', 'Distributed'],
  language: 'Python, CUDA',
  license: 'Apache‑2.0',
  level: 'Advanced',
  use_case: 'Train ultra-large neural networks efficiently on limited hardware.',
  quickstart: 'pip install deepspeed',
  highlight: 'Training trillion‑parameter models made possible',
  reviews: [
    'Unbelievably efficient for large‑scale training.',
    'ZeRO optimizer is a game‑changer.',
    'Massive models now fit into affordable GPUs.',
    'Supports mixed precision, parallelism, and gradient clipping.',
    'Essential for cutting-edge research.'
  ]
},
{
  id: 27,
  title: 'MediaPipe',
  creator: 'Google Research',
  description: 'MediaPipe provides customizable, cross-platform pipelines for real‑time perception (e.g. hand tracking, face detection, pose estimation) in mobile/desktop/web environments.',
  link: 'https://github.com/google/mediapipe',
  demo_url: 'https://solutions.mediapipe.dev/',
  tags: ['Real‑Time ML', 'Computer Vision', 'Mobile', 'Cross‑Platform'],
  language: 'C++, Python, JavaScript',
  license: 'Apache‑2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Build interactive vision apps with modular pipeline graphs.',
  quickstart: 'pip install mediapipe',
  highlight: 'Real‑Time CV for mobile and web',
  reviews: [
    'Tracking is super smooth and accurate.',
    'Modular architecture makes prototyping quick.',
    'Runs well even on mobile CPUs.',
    'Great for AR and UX demos.',
    'Excellent documentation and sample pipelines.'
  ]
},
{
  id: 28,
  title: 'River',
  creator: 'Online-ML Community',
  description: 'River merges stream‑learning libraries (Creme & scikit‑multiflow), enabling machine learning on continuously arriving data with incremental and online algorithms.',
  link: 'https://github.com/online-ml/river',
  demo_url: 'https://river.readthedocs.io/',
  tags: ['Streaming ML', 'Continual Learning', 'Python'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Train and evaluate models on real‑time data streams efficiently.',
  quickstart: 'pip install river',
  highlight: 'Leading library for streaming ML',
  reviews: [
    'Seamlessly handle data streams in Python.',
    'Huge for time-series, logs, IoT apps.',
    'Integrates with incremental metrics and pipelines.',
    'Replaces old libraries with a cleaner design.',
    'Best open-source tool for online learning.'
  ]
},
{
  id: 29,
  title: 'Streamlit',
  creator: 'Streamlit Inc.',
  description: 'Streamlit lets Python users build ML & data apps with simple scripts—no frontend required—with live hot-reload and easy component integration.',
  link: 'https://github.com/streamlit/streamlit',
  demo_url: 'https://streamlit.io/',
  tags: ['ML Apps', 'Data Visualization', 'Rapid Prototyping'],
  language: 'Python',
  license: 'Apache‑2.0',
  level: 'Beginner to Intermediate',
  use_case: 'Build dynamic dashboards and AI demos using pure Python.',
  quickstart: 'pip install streamlit',
  highlight: 'Fastest way to prototyping ML apps',
  reviews: [
    'Makes front-end unnecessary for demos!',
    'Hot reload is super convenient.',
    'Integrates well with Pandas and Plotly.',
    'Great for hackathons and internal tools.',
    'Readable, maintainable code with little boilerplate.'
  ]
},
{
  id: 30,
  title: 'txtai',
  creator: 'Neuml.ai / Olivaw Team',
  description: 'txtai is a semantic search and extractive Q&A engine built with Sentence Transformers and FAISS, enabling embeddings-based search over documents.',
  link: 'https://github.com/neuml/txtai',
  demo_url: 'https://github.com/neuml/txtai',
  tags: ['Semantic Search', 'Embeddings', 'QA', 'Python'],
  language: 'Python',
  license: 'Apache‑2.0',
  level: 'Intermediate',
  use_case: 'Add intelligent search and question-answering capabilities to apps.',
  quickstart: 'pip install txtai',
  highlight: 'Context-aware search in minutes',
  reviews: [
    'Super easy to index and query documents.',
    'Retrieval‑augmented generation becomes simple.',
    'FAISS integration works beautifully.',
    'Very low latency embedding search.',
    'Ideal for knowledge base and chatbot integration.'
  ]
},
{
  id: 31,
  title: 'Kubeflow',
  creator: 'Google & CNCF community',
  description: 'Kubeflow is a Kubernetes-native platform for scalable ML workflows, including training, hyperparameter tuning, deployment, and serving.',
  link: 'https://github.com/kubeflow/kubeflow',
  demo_url: 'https://www.kubeflow.org/',
  tags: ['MLOps', 'Kubernetes', 'Workflow Orchestration', 'Scalable'],
  language: 'Python, Go',
  license: 'Apache‑2.0',
  level: 'Advanced',
  use_case: 'Run production-grade ML pipelines on Kubernetes clusters.',
  quickstart: 'kubectl apply -f manifests/kubeflow.yaml',
  highlight: 'Production ML pipelines at scale',
  reviews: [
    'MLOps on Kubernetes finally achievable.',
    'Supports TFJob, Katib, KFServing, Pipelines.',
    'Great for reproducible workflows.',
    'Steep setup but very powerful once configured.',
    'Active community, good CI/CD integration.'
  ]
},
{
  id: 32,
  title: 'MindsDB',
  creator: 'MindsDB Team',
  description: 'MindsDB lets developers build and deploy ML models directly from SQL. It integrates with databases like MySQL, PostgreSQL, and allows auto-generated models using simple SQL syntax.',
  link: 'https://github.com/mindsdb/mindsdb',
  demo_url: 'https://mindsdb.com/',
  tags: ['AutoML', 'SQL', 'Database Integration', 'Enterprise'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Enable SQL-first ML model creation and deployment.',
  quickstart: 'pip install mindsdb',
  highlight: 'SQL-native machine learning',
  reviews: [
    'We added ML to SQL without infrastructure overhaul.',
    'AutoML from your database tables is amazing.',
    'Simple integration, big impact.',
    'Great for business analysts and data teams.',
    'Surprisingly powerful and intuitive.'
  ]
},
{
  id: 33,
  title: 'NeMo',
  creator: 'NVIDIA AI Research',
  description: 'NeMo is a toolkit for building AI applications using reusable neural modules, supporting speech recognition, NLP, vision, and multilingual tasks with distributed training support.',
  link: 'https://github.com/NVIDIA/NeMo',
  demo_url: 'https://github.com/NVIDIA/NeMo',
  tags: ['NLP', 'ASR', 'Pretrained Models', 'Modular'],
  language: 'Python',
  license: 'Apache‑2.0',
  level: 'Advanced',
  use_case: 'Compose reusable modules for speech, text, and translation applications.',
  quickstart: 'pip install nemo-toolkit',
  highlight: 'Modular AI for speech and language',
  reviews: [
    'Super modular approach to building pipelines.',
    'Supports both speech and NLP models.',
    'Excellent for multi-language systems.',
    'Distributed training and NVIDIA optimizations included.',
    'Used widely in research and enterprise.'
  ]
},
{
  id: 34,
  title: 'EleutherAI / GPT-Neo',
  creator: 'EleutherAI Community',
  description: 'EleutherAI released GPT-Neo in 2020—a truly open-source replication of GPT-3 architecture—enabling access to large language models outside closed corporate APIs.',
  link: 'https://github.com/EleutherAI/gpt-neo',
  demo_url: 'https://www.eleuther.ai/projects/gpt-neo',
  tags: ['LLMs', 'NLP', 'Transformer', 'Open Access'],
  language: 'Python, TensorFlow, PyTorch',
  license: 'MIT',
  level: 'Advanced',
  use_case: 'Use open-source GPT-style models for text generation and research.',
  quickstart: 'pip install transformers',
  highlight: 'Open GPT‑3 alternative',
  reviews: [
    'Finally open access to GPT‑scale models.',
    'Excellent community‑driven initiative.',
    'Huge models—few trillion parameters—are manageable.',
    'Inspires transparency in NLP research.',
    'Still one of the most replicated GPT‑3 clones.'
  ]
},
{
  id: 35,
  title: 'Avatarify',
  creator: 'Ali Aliev and open-source contributors',
  description: 'Avatarify is a real‑time video face‑warping tool built on First Order Motion Model, used in streaming/call apps to drive avatars from live webcam input.',
  link: 'https://github.com/alievk/avatarify',
  demo_url: 'https://github.com/alievk/avatarify',
  tags: ['Deepfake', 'Computer Vision', 'Real‑Time', 'Streaming'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Drive animated avatars live from webcam for video calls and creative expression.',
  quickstart: 'pip install avatarify',
  highlight: 'Real‑time avatar generation',
  reviews: [
    'Fun and surprisingly accurate face retargeting.',
    'Impressive real-time performance.',
    'Makes calls entertaining with minimal setup.',
    'Easy GPU usage and integration.',
    'Great for livestreams and experimentation.'
  ]
},

// Start 2021
{
  id: 36,
  title: 'GPT-J',
  creator: 'EleutherAI',
  description: 'GPT-J‑6B is a fully open-source, 6‑billion‑parameter language model released in mid‑2021, delivering high-quality zero‑shot performance comparable to OpenAI’s Curie variant.',
  link: 'https://github.com/EleutherAI/gpt-neo',
  demo_url: 'https://www.eleuther.ai/projects/gpt-neo',
  tags: ['LLM', 'Transformers', 'NLP', 'Language Model'],
  language: 'Python, TensorFlow, JAX',
  license: 'MIT',
  level: 'Advanced',
  use_case: 'Generate human-like text, storytelling, code, and research prototyping.',
  quickstart: 'pip install transformers',
  highlight: 'Public GPT‑3‑scale model',
  reviews: [
    'Best-performing open-source GPT‑3‑like model available in 2021.',
    'Enabled researchers to run large LLMs outside closed APIs.',
    'Distributed training on TPUs made it accessible.',
    'Major foundation for open LLM research.',
    'Zero-shot performance surprised many users.'
  ]
},
{
  id: 37,
  title: 'OpenFL',
  creator: 'Intel / OpenFL Community',
  description: 'OpenFL is an open-source framework for federated learning—training ML models collaboratively across private datasets without sharing raw data.',
  link: 'https://github.com/intel/openfl',
  demo_url: 'https://github.com/intel/openfl',
  tags: ['Federated Learning', 'Privacy', 'Security', 'Collaboration'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Advanced',
  use_case: 'Train secure ML models across institutions like healthcare or finance without data exchange.',
  quickstart: 'pip install openfl',
  highlight: 'First scalable open FL platform',
  reviews: [
    'Emerging tool for privacy-aware ML.',
    'TensorFlow & PyTorch compatible.',
    'Enables real-world FL research collaborations.',
    'Documentation includes real healthcare use cases.',
    'Bridged a gap in practical federated model training.'
  ]
},

{
  id: 38,
  title: 'GitHub Copilot',
  creator: 'GitHub & OpenAI',
  description: 'Copilot is an AI-powered code assistant that uses a GPT-3‑like model to autocomplete code in editors like VS Code—openly released in 2021.',
  link: 'https://github.com/features/copilot',
  demo_url: 'https://github.com/features/copilot',
  tags: ['AI Coding Assistant', 'Autocompletion', 'Developers'],
  language: 'Multiple + API',
  license: 'Proprietary (limited free tier)',
  level: 'Beginner to Advanced',
  use_case: 'Augment developer productivity with inline code suggestions.',
  quickstart: 'Install GitHub Copilot extension',
  highlight: 'AI pair programmer debut',
  reviews: [
    'Changed coding workflows overnight.',
    'Often generates correct boilerplate with minimal prompts.',
    'Can introduce subtle bugs—requires manual review.',
    'Ideal for repetitive tasks and prototyping.',
    'Raised important license and ethics discussions.'
  ]

},

{
  id: 39,
  title: 'Ivy',
  creator: 'UnifyAI Community',
  description: 'Ivy is a library that allows code portability between frameworks like PyTorch, TensorFlow, JAX, and NumPy—helping developers write once and run anywhere.',
  link: 'https://github.com/unifyai/ivy',
  demo_url: 'https://ivy.dev/',
  tags: ['Framework Interoperability', 'Backend-Agnostic', 'Research'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate to Advanced',
  use_case: 'Create models once and deploy across different ML frameworks.',
  quickstart: 'pip install ivy',
  highlight: 'ML code compatibility layer',
  reviews: [
    'Bridged differences between major ML libraries.',
    'Ideal for multi-framework prototyping.',
    'Simplified cross-backend experimentation.',
    'Growing ecosystem of adapters.',
    'Key for reproducible research across tools.'
  ]
},

{
  id: 40,
  title: 'Kornia',
  creator: 'PyTorch/Kornia Team',
  description: 'Kornia is a differentiable computer vision library for PyTorch, offering routines like geometric transformations, feature detection, and image filtering in GPU-accelerated pipelines.',
  link: 'https://github.com/kornia/kornia',
  demo_url: 'https://kornia.github.io/',
  tags: ['Computer Vision', 'PyTorch', 'Differentiable CV'],
  language: 'Python',
  license: 'BSD',
  level: 'Intermediate',
  use_case: 'Incorporate vision transforms directly in neural network models.',
  quickstart: 'pip install kornia',
  highlight: 'Differentiable computer vision toolbox',
  reviews: [
    'Makes CV pipelines fully differentiable.',
    'Great for augmentations during training.',
    'Integrates seamlessly with PyTorch models.',
    'Documentation includes real-world use cases.',
    'GPU-accelerated and performant.'
  ]
},

{
  id: 41,
  title: 'Analytics Zoo',
  creator: 'Intel Analytics Zoo Team',
  description: 'Analytics Zoo is a unified platform combining TensorFlow, PyTorch, Spark, Flink, and Ray for scalable AI and big data analytics in a single pipeline.',
  link: 'https://github.com/intel-analytics/analytics-zoo',
  demo_url: 'https://analytics-zoo.github.io/',
  tags: ['Big Data AI', 'Distributed ML', 'Spark', 'Scalable'],
  language: 'Python, Scala',
  license: 'Apache-2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Build production-scale AI pipelines on Spark and Ray clusters.',
  quickstart: 'pip install analytics-zoo',
  highlight: 'Enterprise AI at scale',
  reviews: [
    'Unified tool connecting Spark and deep learning.',
    'Great for large-scale recommendation systems.',
    'Supports distributed training and pipelines.',
    'Harder setup but very powerful once running.',
    'Bridged enterprise analytics with ML workflows.'
  ]
},

{
  id: 42,
  title: 'Rasa',
  creator: 'RasaHQ',
  description: 'Rasa is an open-source platform for building conversational AI chatbots and virtual assistants, including natural language understanding and dialogue management modules.',
  link: 'https://github.com/RasaHQ/rasa',
  demo_url: 'https://rasa.com/',
  tags: ['Chatbots', 'NLP', 'Dialogue Management', 'Conversational AI'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate',
  use_case: 'Build production-ready AI assistants and chat systems.',
  quickstart: 'pip install rasa',
  highlight: 'Leading conversational AI framework',
  reviews: [
    'Flexible for custom bots with full control.',
    'Strong NLU and rule-based conversation support.',
    'Great training data pipelines and UI.',
    'Ideal for enterprise-level assistants.',
    'Large community and tutorial base.'
  ]
},

{
  id: 43,
  title: 'Prefect',
  creator: 'Prefect Labs',
  description: 'Prefect is an open-source workflow orchestration tool tailored for data and machine learning pipelines—features include dynamic scheduling, retries, and rich error handling.',
  link: 'https://github.com/PrefectHQ/prefect',
  demo_url: 'https://prefect.io/',
  tags: ['Workflow Orchestration', 'Data Pipelines', 'MLOps'],
  language: 'Python',
  license: 'Prefect Community License',
  level: 'Intermediate to Advanced',
  use_case: 'Orchestrate and monitor ML or ETL workflows at scale.',
  quickstart: 'pip install prefect',
  highlight: 'Resilient data & ML pipeline manager',
  reviews: [
    'Highly reliable orchestration with retry logic.',
    'Easy flow definitions using Python.',
    'Scale from local scripts to production workflows.',
    'Insightful logs and dashboards.',
    'Preferred over Airflow by many users.'
  ]
},
{
  id: 44,
  title: 'H2O.ai / h2oGPT',
  creator: 'H2O.ai Community',
  description: 'H2O.ai released h2oGPT in 2021—an open-source LLM with embedding models and GUI support, supporting document ingestion, question answering, and large-scale inference.',
  link: 'https://github.com/h2oai/h2ogpt',
  demo_url: 'https://h2o.ai/',
  tags: ['LLM', 'Generative AI', 'Embeddings', 'Enterprise'],
  language: 'Python',
  license: 'Apache-2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Build enterprise-grade LLM tools for QA, summarization, and chatbots.',
  quickstart: 'pip install h2ogpt',
  highlight: 'Enterprise LLM framework',
  reviews: [
    'Made LLM deployment easier with GUI tools.',
    'Supports email, PDF, Word embeddings ingestion.',
    'Scalable inference and embedding storage.',
    'Great for business AI use cases.',
    'Active enterprise community support.'
  ]
},
{
  id: 45,
  title: 'Megatron-LM',
  creator: 'NVIDIA Applied Deep Learning Research',
  description: 'Megatron‑LM is a highly scalable transformer training library for language models, supporting model parallelism and multi-node training for models like GPT and BERT.',
  link: 'https://github.com/NVIDIA/Megatron-LM',
  demo_url: 'https://developer.nvidia.com/megatron-lm',
  tags: ['LLM Training', 'Model Parallelism', 'NLP'],
  language: 'Python, CUDA',
  license: 'MIT',
  level: 'Advanced',
  use_case: 'Train massive transformer models across large GPU clusters.',
  quickstart: 'git clone https://github.com/NVIDIA/Megatron-LM.git',
  highlight: 'Scalable transformer training infrastructure',
  reviews: [
    'Supports billion+ parameter models with ease.',
    'Mixed precision, tensor & pipeline parallelism included.',
    'Used widely in large-scale NLP research.',
    'High customization for expert users.',
    'Sets standard for transformer training benchmarks.'
  ]
},

// Start 2022

  {
    id: 46,
    title: 'Stable Diffusion',
    creator: 'Stability AI',
    description: 'Stable Diffusion is a powerful open-source text-to-image diffusion model that democratized access to generative art and creative AI tools.',
    link: 'https://github.com/CompVis/stable-diffusion',
    demo_url: 'https://huggingface.co/CompVis/stable-diffusion',
    tags: ['Text-to-Image', 'Generative AI', 'Art', 'Diffusion Models'],
    language: 'Python',
    license: 'CreativeML Open RAIL-M',
    level: 'Intermediate to Advanced',
    use_case: 'Generate high-quality images from textual prompts for art, design, and research.',
    quickstart: 'git clone https://github.com/CompVis/stable-diffusion.git',
    highlight: 'Revolutionized creative AI access',
    reviews: [
      'Enabled anyone to generate stunning images with a prompt.',
      'Huge community development around models and UIs.',
      'Blazed the trail for open-source generative art tools.',
      'Impressive image quality and flexibility.',
      'Supported by many GUIs, notebooks, and platforms.'
    ]
  },
  {
    id: 47,
    title: 'Whisper',
    creator: 'OpenAI',
    description: 'Whisper is an open-source automatic speech recognition (ASR) system trained on a large dataset of diverse audio, capable of robust transcription across languages and accents.',
    link: 'https://github.com/openai/whisper',
    demo_url: 'https://github.com/openai/whisper',
    tags: ['Speech Recognition', 'ASR', 'Multilingual', 'Deep Learning'],
    language: 'Python',
    license: 'MIT',
    level: 'Intermediate',
    use_case: 'Transcribe audio or video files into text across many languages with high accuracy.',
    quickstart: 'pip install openai-whisper',
    highlight: 'Highly accurate multilingual ASR',
    reviews: [
      'Generalizes across languages and audio qualities.',
      'Transcription results are near human-level accuracy.',
      'Simple CLI and Python interface.',
      'Handles noisy and accented speech impressively.',
      'Fully open-source and adaptable.'
    ]
  },
  {
    id: 48,
    title: 'LangChain',
    creator: 'Harrison Chase & Community',
    description: 'LangChain is a framework for building applications powered by language models, offering utilities for chains, agents, memory, and integrations with external data sources.',
    link: 'https://github.com/langchain-ai/langchain',
    demo_url: 'https://langchain.com/',
    tags: ['LLM Apps', 'Agents', 'Chains', 'Prompt Engineering'],
    language: 'Python, JavaScript',
    license: 'MIT',
    level: 'Intermediate to Advanced',
    use_case: 'Develop searchable chatbots, agents, and workflows with LLMs and external data.',
    quickstart: 'pip install langchain',
    highlight: 'Foundation for LLM-based app development',
    reviews: [
      'Simplifies building complex LLM workflows.',
      'Supports prompt chaining, memory, and retrieval agents.',
      'High extensibility to connect knowledge bases and APIs.',
      'Ecosystem grew extremely fast in 2022–2023.',
      'Essential for modern AI app developers.'
    ]
  },
  {
    id: 49,
    title: 'Diffusers',
    creator: 'Hugging Face',
    description: 'The Diffusers library provides pretrained and scalable implementations of diffusion models like Stable Diffusion, DALL·E 2, and others in a unified API.',
    link: 'https://github.com/huggingface/diffusers',
    demo_url: 'https://huggingface.co/docs/diffusers/',
    tags: ['Diffusion Models', 'Image Generation', 'Hugging Face', 'Generative AI'],
    language: 'Python',
    license: 'Apache-2.0',
    level: 'Intermediate',
    use_case: 'Use and customize diffusion-based generative models using straightforward API for research and production.',
    quickstart: 'pip install diffusers',
    highlight: 'Unified access to diffusion model hub',
    reviews: [
      'Made using diffusion models so much easier.',
      'Plug-and-play support for SOTA generative models.',
      'Great Hugging Face integration.',
      'API is clean and extensible.',
      'Used widely for custom fine-tuning tasks.'
    ]
  },
  {
    id: 50,
    title: 'JAX',
    creator: 'Google Research',
    description: 'JAX is an open-source library for high-performance numerical computing and automatic differentiation, frequently used for deep learning, research, and scientific computing.',
    link: 'https://github.com/google/jax',
    demo_url: 'https://jax.readthedocs.io/',
    tags: ['Numerical Computing', 'Autodiff', 'Optimization', 'Accelerators'],
    language: 'Python',
    license: 'Apache-2.0',
    level: 'Advanced',
    use_case: 'Build optimized ML and scientific computing pipelines with hardware acceleration (TPUs, GPUs).',
    quickstart: 'pip install jax jaxlib',
    highlight: 'Differentiable computing at scale',
    reviews: [
      'Transforms research workflows with functional programming.',
      'Powerful for custom gradient logic and performance.',
      'Accelerator-friendly for TPU/GPU use.',
      'Basis for frameworks like Flax and Haiku.',
      'High-performance alternative to NumPy and PyTorch.'
    ]
  },
  {
    id: 51,
    title: 'Dolly',
    creator: 'Databricks',
    description: 'Dolly is a small, instruction-tuned LLM released by Databricks that demonstrated how fine-tuning closed models (like GPT-J) with open datasets can produce useful chatbots.',
    link: 'https://github.com/databricks/dolly',
    demo_url: 'https://github.com/databricks/dolly',
    tags: ['Instruction Following', 'LLMs', 'Open Fine-tuning', 'Chatbot'],
    language: 'Python',
    license: 'MIT',
    level: 'Intermediate',
    use_case: 'Fine-tune open LLMs into chatbots with human-curated instruction data.',
    quickstart: 'git clone https://github.com/databricks/dolly.git',
    highlight: 'Pioneered open instruction-tuning',
    reviews: [
      'Showed community could fine-tune accessible LLMs.',
      'Sets example for open dialog models.',
      'Reasonable cost for fine-tuning experiments.',
      'Human instruction dataset is useful reference.',
      'Easy to adapt with custom prompt data.'
    ]
  },
  {
    id: 52,
    title: 'PyTorch Lightning',
    creator: 'William Falcon & Community',
    description: 'PyTorch Lightning is a lightweight PyTorch wrapper that structures code for research and production, enabling modular training loops, distributed execution, logging, and hardware-agnostic code.',
    link: 'https://github.com/PyTorchLightning/pytorch-lightning',
    demo_url: 'https://www.pytorchlightning.ai/',
    tags: ['Training Framework', 'PyTorch', 'Abstraction', 'Research'],
    language: 'Python',
    license: 'Apache-2.0',
    level: 'Intermediate',
    use_case: 'Scale PyTorch training code from research setups to production without rewriting.',
    quickstart: 'pip install pytorch-lightning',
    highlight: 'Clean abstraction for scalable training',
    reviews: [
      'Simplified distributed training and logging.',
      'Separated code from research logic beautifully.',
      'Great for teams and reproducible experiments.',
      'Supports TPU, GPU, multi-node seamlessly.',
      'Produces neat and modular training pipelines.'
    ]
  },
  {
    id: 53,
    title: 'Ray',
    creator: 'Ray Community / RISELab',
    description: 'Ray is an open-source framework for building distributed applications, including distributed training, hyperparameter tuning (Tune), and scalable ML systems.',
    link: 'https://github.com/ray-project/ray',
    demo_url: 'https://docs.ray.io/',
    tags: ['Distributed Computing', 'MLOps', 'Hyperparameter Tuning', 'Parallelism'],
    language: 'Python',
    license: 'Apache-2.0',
    level: 'Intermediate to Advanced',
    use_case: 'Scale Python-based ML workflows across clusters for training, tuning, serving.',
    quickstart: 'pip install ray',
    highlight: 'Unified distributed system for ML workflows',
    reviews: [
      'Tune made optimization scale-friendly.',
      'Ray Serve makes model serving trivial.',
      'Great for building RL systems and scalable pipelines.',
      'Handles resource scheduling efficiently.',
      'Active ecosystem with many ML-focused tools.'
    ]
  },
  {
    id: 54,
    title: 'Facebook AI Toolkit (FAIRSEQ Incentives)',
    creator: 'Facebook AI Research',
    description: 'fairseq maintained strong momentum in 2022 with implementations of advanced multilingual models and speech recognition architectures pushing research boundaries.',
    link: 'https://github.com/pytorch/fairseq',
    demo_url: 'https://github.com/pytorch/fairseq',
    tags: ['NLP', 'Translation', 'Speech Recognition', 'Research'],
    language: 'Python',
    license: 'MIT',
    level: 'Advanced',
    use_case: 'Train and use multilingual and speech-text models at scale.',
    quickstart: 'pip install fairseq',
    highlight: 'Advanced multilingual/speech modeling',
    reviews: [
      'Still bleeding-edge for custom NLP/speech research.',
      'Models like wav2vec, massive translation systems included.',
      'Supports high-performance distributed training.',
      'Backed by FAIR research outputs.',
      'Great community examples and benchmarks.'
    ]
  },
  {
    id: 55,
    title: 'Ray RLlib',
    creator: 'Ray Team (UC Berkeley / RISELab)',
    description: 'RLlib is a scalable reinforcement learning library built on Ray for training RL agents across distributed environments and handling production workloads.',
    link: 'https://github.com/ray-project/ray/tree/master/rllib',
    demo_url: 'https://docs.ray.io/rllib.html',
    tags: ['Reinforcement Learning', 'Distributed Training', 'MLOps'],
    language: 'Python',
    license: 'Apache-2.0',
    level: 'Advanced',
    use_case: 'Train reinforcement learning agents at scale with environment parallelism.',
    quickstart: 'pip install ray[rllib]',
    highlight: 'High-scale RL platform',
    reviews: [
      'Great for RL environments with real-time feedback.',
      'Scales well on clusters.',
      'Wide algorithm support and customization.',
      'Integrated with Tune and Ray Serve.',
      'Ideal for robotics, simulation, and RL research.'
    ]
  },

  // Start 2023 

    {
    id: 56,
    title: 'OpenAssistant',
    creator: 'LAION & OpenAssistant Community',
    description: 'OpenAssistant is a crowd‑built open-source LLM-powered assistant that interacts with third-party systems, retrieves information dynamically, and runs locally on consumer hardware.',
    link: 'https://github.com/LAION-AI/Open-Assistant',
    demo_url: 'https://open-assistant.io/',
    tags: ['Open LLM', 'Chatbot', 'Crowdsourced', 'Community'],
    language: 'Python',
    license: 'Apache‑2.0',
    level: 'Intermediate to Advanced',
    use_case: 'Build alignable chat assistants with open, auditable workflows.',
    quickstart: 'git clone https://github.com/LAION-AI/Open-Assistant.git',
    highlight: 'Crowd‑powered open assistant',
    reviews: [
      'A truly open alternative to closed LLM assistants.',
      'Large volunteer community with diverse contributors.',
      'Enables alignment research at scale.',
      'Minimal friction to run locally.',
      'Transparent, community-first model pipeline.'
    ]
  },
  {
    id: 57,
    title: 'AutoGPT',
    creator: 'Toran Bruce Richards / Significant-Gravitas',
    description: 'AutoGPT is an open-source autonomous AI agent that decomposes a goal into subprocesses and executes them using GPT‑4 or GPT‑3.5 APIs.',
    link: 'https://github.com/Significant-Gravitas/Auto-GPT',
    demo_url: 'https://agpt.co',
    tags: ['AI Agent', 'Autonomous', 'GPT‑4', 'Task Automation'],
    language: 'Python',
    license: 'MIT',
    level: 'Intermediate to Advanced',
    use_case: 'Automate multi-step tasks using agentic LLM workflows.',
    quickstart: 'pip install autogpt',
    highlight: 'First popular autonomous AI agent',
    reviews: [
      'Impressive ability to plan and execute tasks end-to-end.',
      'Great foundation for autonomous app prototypes.',
      'Requires API but showcases powerful agent behavior.',
      'Encourages creative automation thinking.',
      'Community forks add domain-specific logic.'
    ]
  },
  {
    id: 58,
    title: 'GPT4All',
    creator: 'nomic AI Community',
    description: 'GPT4All enables running LLMs locally on consumer-grade hardware, offering offline inference and lightweight model deployment.',
    link: 'https://github.com/nomic-ai/gpt4all',
    demo_url: 'https://gpt4all.io/',
    tags: ['Local LLM', 'Offline AI', 'Privacy', 'Lightweight'],
    language: 'Python',
    license: 'Custom Open-source',
    level: 'Beginner to Intermediate',
    use_case: 'Run GPT-style models offline in local environments safely.',
    quickstart: 'pip install gpt4all',
    highlight: 'Offline LLM execution for all',
    reviews: [
      'Runs entirely offline—ideal for privacy-focused use cases.',
      'Surprisingly performant on laptops.',
      'Multiple model variants supported.',
      'Great documentation for installation.',
      'Community rapidly expanding with GUI projects.'
    ]
  },
  {
    id: 59,
    title: 'Detectron2',
    creator: 'Facebook AI Research (FAIR)',
    description: 'Detectron2 is a state-of-the-art object detection and segmentation framework built on PyTorch, providing clean APIs for research and deployment.',
    link: 'https://github.com/facebookresearch/detectron2',
    demo_url: 'https://detectron2.readthedocs.io/',
    tags: ['Computer Vision', 'Object Detection', 'Segmentation', 'PyTorch'],
    language: 'Python',
    license: 'Apache‑2.0',
    level: 'Intermediate to Advanced',
    use_case: 'Train and deploy modern object detectors and segmentation models.',
    quickstart: 'pip install detectron2',
    highlight: 'Top-tier CV model library',
    reviews: [
      'Excellent performance on standard CV benchmarks.',
      'Modular and extendable detection backbone.',
      'Strong community and tutorial coverage.',
      'Integrates with COCO, LVIS, and custom datasets.',
      'Perfect for both research and product use.'
    ]
  },
  {
    id: 60,
    title: 'DragGAN',
    creator: 'Xingang Pan et al.',
    description: 'DragGAN is a top-tier interactive image editing tool enabling intuitive manipulation of generated images via user-specified handles.',
    link: 'https://github.com/XingangPan/DragGAN',
    demo_url: 'https://github.com/XingangPan/DragGAN',
    tags: ['Generative Art', 'GAN', 'Image Editing', 'Interactive AI'],
    language: 'Python',
    license: 'MIT',
    level: 'Intermediate to Advanced',
    use_case: 'Manipulate generated images using handle-driven editing.',
    quickstart: 'git clone https://github.com/XingangPan/DragGAN.git',
    highlight: 'Interactive GAN image editing',
    reviews: [
      'Super intuitive drag-based generative editing.',
      'State-of-the-art image manipulation.',
      'High-quality results with minimal input.',
      'Great for creative applications and demos.',
      'Academic SIGGRAPH project with open code.'
    ]
  },
  {
    id: 61,
    title: 'Flowise',
    creator: 'FlowiseAI',
    description: 'Flowise is a GUI-based, drag-and-drop builder for LLM-powered workflows—no code required—ideal for building chaining pipelines.',
    link: 'https://github.com/FlowiseAI/Flowise',
    demo_url: 'https://flowise.ai/',
    tags: ['LLM Workflow', 'No-Code', 'Agents', 'UI'],
    language: 'JavaScript / Python',
    license: 'MIT',
    level: 'Beginner to Intermediate',
    use_case: 'Design LLM agent flows visually without code.',
    quickstart: 'git clone https://github.com/FlowiseAI/Flowise.git',
    highlight: 'No-code LLM flow designer',
    reviews: [
      'Visual builder demystifies complex agents.',
      'Great for non-developers prototyping LLM tools.',
      'Supports integrations like OpenAI and local models.',
      'Clean UI and intuitive drag/drop flow design.',
      'Ideal for quick MVPs and hackathons.'
    ]
  },
  {
    id: 62,
    title: 'LAVIS',
    creator: 'Salesforce Research',
    description: 'LAVIS is a unified library for vision-language models, including multimodal pre‑trained models for tasks like VQA, captioning, and image-text alignment.',
    link: 'https://github.com/salesforce/LAVIS',
    demo_url: 'https://github.com/salesforce/LAVIS',
    tags: ['Vision-Language', 'Multimodal AI', 'NLP + CV'],
    language: 'Python',
    license: 'Apache‑2.0',
    level: 'Intermediate to Advanced',
    use_case: 'Deploy and fine-tune state-of-the-art multimodal models for vision and text.',
    quickstart: 'pip install lavis',
    highlight: 'Multimodal vision‑language hub',
    reviews: [
      'Simplifies usage of multimodal SOTA models.',
      'High-quality pretrained tasks like image captioning.',
      'Good docs and ease-of-use with Hugging Face.',
      'Supports VQA and cross-modal retrieval.',
      'Great backbone for multimodal research apps.'
    ]
  },
  {
    id: 63,
    title: 'Tree‑of‑Thoughts',
    creator: 'Kye Y. Gomez et al.',
    description: 'Tree-of-Thoughts is an algorithmic reasoning framework using structured search over potential reasoning paths to improve LLM reasoning performance.',
    link: 'https://github.com/kyegomez/tree-of-thoughts',
    demo_url: 'https://github.com/kyegomez/tree-of-thoughts',
    tags: ['LLM Reasoning', 'Search', 'Chain-of-Thought'], 
    language: 'Python',
    license: 'MIT',
    level: 'Advanced',
    use_case: 'Improve LLM planning and problem solving with structured reasoning search.',
    quickstart: 'pip install tree-of-thoughts',
    highlight: 'Enhances LLM reasoning capabilities',
    reviews: [
      'Substantial improvement in reasoning chain quality.',
      'Search-based LLM planning is promising.',
      'Elegant implementation of research idea.',
      'Great for benchmarking reasoning models.',
      'Promising direction for LLM research labs.'
    ]
  },
  {
    id: 64,
    title: 'LangChain Updates',
    creator: 'LangChain Community',
    description: 'LangChain remained a dominant framework for LLM app development in 2023, adding support for agents, retrievers, memory, and multimodal input handling.',
    link: 'https://github.com/langchain-ai/langchain',
    demo_url: 'https://langchain.com/',
    tags: ['LLM Apps', 'Agents', 'Multimodal', 'Workflow'],
    language: 'Python, JavaScript',
    license: 'MIT',
    level: 'Intermediate to Advanced',
    use_case: 'Create production-ready agent workflows and LLM applications with multimodal capabilities.',
    quickstart: 'pip install langchain',
    highlight: 'Core framework for modern LLM apps',
    reviews: [
      'Multimodal support improved usability greatly.',
      'Community ecosystem exploded in 2023.',
      'Very flexible for retrieval-augmented use cases.',
      'Modules like agents and memory matured.',
      'Still the go-to framework for LLM-based apps.'
    ]
  },
  {
    id: 65,
    title: 'DeepSeek R1',
    creator: 'DeepSeek AI',
    description: 'DeepSeek’s R1 is a fully open-source reinforcement learning based model launched in 2023, rivaling state-of-the-art LLM performance across math, code, and reasoning tasks.',
    link: 'https://github.com/DeepSeekAI/R1',
    demo_url: 'https://deepseek.ai',
    tags: ['LLM', 'Open Source', 'Reinforcement Learning', 'AI Reasoning'],
    language: 'Python',
    license: 'MIT',
    level: 'Advanced',
    use_case: 'Use a fully open LLM trained with RL for complex reasoning and code tasks.',
    quickstart: 'git clone https://github.com/DeepSeekAI/R1.git',
    highlight: 'Open-source rival to closed LLMs',
    reviews: [
      'Showed open-source models could match closed LLMs.',
      'Highly capable reasoning and coding outputs.',
      'Huge interest from research and dev communities.',
      'Transparent training pipeline and weights released.',
      'A turning point in open LLM accessibility.'
    ]
  },

  // Start 2024 


{
  id: 66,
  title: 'DBRX',
  creator: 'Databricks / Mosaic ML',
  description: 'DBRX is a 132B‑parameter mixture‑of‑experts language model released as open-source in March 2024, outperforming LLaMA 2, Mixtral, and Grok across code, math and general benchmarks.',
  link: 'https://github.com/databricks/dbrx',
  demo_url: 'https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm',
  tags: ['LLM', 'Mixture-of-Experts', 'Benchmarks', 'Open Model'],
  language: 'Python',
  license: 'Databricks Open License',
  level: 'Advanced',
  use_case: 'Build state-of-the-art LLM-based applications with open weights and high performance.',
  quickstart: 'git clone https://github.com/databricks/dbrx',
  highlight: 'Top open-source foundation LLM of 2024',
  reviews: [
    'Beats LLaMA 2 and Mixtral in benchmarks.',
    'Efficient use of MoE architecture at large scale.',
    'Open-source release was major in open LLM history.',
    'High-performing across a variety of tasks.',
    'Big step for open AI accessibility.'
  ]
},
{
  id: 67,
  title: 'Model Context Protocol (MCP)',
  creator: 'Anthropic',
  description: 'MCP is an open-standard protocol released in late 2024 to standardize how LLMs communicate with external tools, memory, and systems using JSON‑RPC. It’s widely adopted by OpenAI and Google.',
  link: 'https://modelcontextprotocol.io/',
  demo_url: 'https://modelcontextprotocol.io/',
  tags: ['LLM Integration', 'Standardization', 'Tooling API'],
  language: 'Protocol / JSON-RPC',
  license: 'Open Source',
  level: 'Intermediate',
  use_case: 'Connect LLMs seamlessly with tools, data, and external systems in apps.',
  quickstart: 'Follow MCP spec at modelcontextprotocol.io',
  highlight: 'De facto API for LLM tool integration',
  reviews: [
    'Unified interface across AI tools and frameworks.',
    'Adopted by major model providers like OpenAI and Google.',
    'Facilitates building agents and tool-based workflows.',
    'Reduces integration complexity.',
    'Standard essential for agentic AI.'
  ]
},
{
  id: 68,
  title: 'Giskard',
  creator: 'Giskard Team',
  description: 'Giskard is an open-source testing and evaluation platform for AI models, helping measure fairness, performance, explainability, and compliance—critical in 2024 for AI accountability.',
  link: 'https://github.com/giskard-ai/giskard',
  demo_url: 'https://giskard.ai/',
  tags: ['Model Testing', 'Explainability', 'Fairness', 'AI Governance'],
  language: 'Python',
  license: 'Apache‑2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Test AI models for bias, interpretability, and regulatory compliance.',
  quickstart: 'pip install giskard-ai',
  highlight: 'Transparency tool for ethical AI deployment',
  reviews: [
    'Makes model evaluation rigorous and reproducible.',
    'Great dashboards for fairness and error analysis.',
    'Key tool for ML auditors and compliance teams.',
    'Supports multi-framework models easily.',
    'Solid reports and sharing features.'
  ]
},
{
  id: 69,
  title: 'unsloth AI',
  creator: 'unsloth Team',
  description: 'unsloth AI launched in 2024 to drastically reduce memory and compute for fine-tuning models, enabling faster customization of open-source models with 70% less usage.',
  link: 'https://github.com/unsloth-ai/unsloth',
  demo_url: 'https://unsloth.ai/',
  tags: ['Fine-tuning', 'Efficiency', 'Low-Memory', 'Preprocessing'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Fine-tune large open models with limited compute and memory.',
  quickstart: 'pip install unsloth',
  highlight: 'Highly efficient model fine-tuning',
  reviews: [
    'Fine-tunes faster and lighter than others.',
    'Cuts memory usage significantly.',
    'Perfect for small GPU or edge use cases.',
    'Reliable accuracy even with fewer resources.',
    'Boosts accessibility for AI developers.'
  ]
},
{
  id: 70,
  title: 'marimo Notebook',
  creator: 'marimo Team',
  description: 'marimo is a next-gen notebook environment targeting reproducible data science workflows: deployable as web, script, or app, with Git integration and maintainable structure.',
  link: 'https://github.com/marimo-ai/marimo',
  demo_url: 'https://marimo.ai/',
  tags: ['Notebooks', 'Reproducibility', 'Version Control', 'Data Science'],
  language: 'Python',
  license: 'Apache‑2.0',
  level: 'Intermediate',
  use_case: 'Write reproducible, production-ready AI/ML notebooks integrated with Git.',
  quickstart: 'pip install marimo',
  highlight: 'Notebook tool built for production',
  reviews: [
    'Solves major notebook versioning issues.',
    'Easily convert notebooks to apps or scripts.',
    'Great Git integration for collaboration.',
    'Cleaner, more maintainable than Jupyter.',
    'Perfect for AI/DS teams adopting Git workflows.'
  ]
},
{
  id: 71,
  title: 'Talkd.ai',
  creator: 'Talkd.ai Team',
  description: 'Talkd.ai offers an open-source API and platform for Retrieval-Augmented Generation (RAG), enabling unified LLM chat with integrated memory and external document access.',
  link: 'https://github.com/talkd-ai/talkd',
  demo_url: 'https://talkd.ai/',
  tags: ['RAG', 'Agents', 'LLM API', 'Chatbot Framework'],
  language: 'Python, JavaScript',
  license: 'Apache‑2.0',
  level: 'Intermediate',
  use_case: 'Rapidly build retrieval-augmented chat agents with memory and context pipelines.',
  quickstart: 'pip install talkd',
  highlight: 'Simplified RAG integration for developers',
  reviews: [
    'Great interface for chaining LLM with knowledge sources.',
    'Memory and context management works well.',
    'Flexible API for multi-model support.',
    'Built-in UI and chat features.',
    'Useful for demoing RAG apps quickly.'
  ]
},
{
  id: 72,
  title: 'STORM (Stanford)',
  creator: 'Stanford OVAL Lab',
  description: 'STORM is a research-oriented AI tool released in early 2024 that automatically generates structured, Wikipedia-style articles using LLMs integrated with retrieval and multi-perspective question asking.',
  link: 'https://github.com/martinferianc/yamle',
  demo_url: 'https://github.com/martinferianc/yamle',
  tags: ['Content Generation', 'Retrieval-Augmented', 'Research Tool'],
  language: 'Python',
  license: 'MIT',
  level: 'Intermediate',
  use_case: 'Automatically generate cited, structured research articles from topic prompts.',
  quickstart: 'git clone https://github.com/martinferianc/yamle',
  highlight: 'LLM-powered knowledge curation assistant',
  reviews: [
    'Produces structured, citation-rich drafts.',
    'Great for academic research workflows.',
    'Automates outline and article creation.',
    'Shows tool paths alongside final output.',
    'Useful for educators and writers.'
  ]
},
{
  id: 73,
    title: 'Mistral NeMo / Mathstral / Mamba 7B',
    creator: 'Mistral AI & NVIDIA',
    description: 'Mistral and NVIDIA collaborated in mid-2024 to release Mistral NeMo (12B multilingual model), Mathstral 7B (science-focused), and Mamba 7B—under Apache‑2.0 license, capturing broad language support.',
    link: 'https://github.com/mistralai/nemo',
    demo_url: 'https://github.com/mistralai/nemo',
    tags: ['LLM', 'Multilingual', 'Scientific Models', 'Diff MoE'],
    language: 'Python',
    license: 'Apache‑2.0',
    level: 'Advanced',
    use_case: 'Fine-tune or deploy multilingual or scientific LLMs for research or applications.',
    quickstart: 'pip install nemo',
    highlight: 'Suite of multilingual/scientific LLMs',
    reviews: [
      '128k context multilingual NeMo is outstanding.',
      'Mathstral excels at math and science tasks.',
      'Mamba architecture trend-setter.',
      'Large, diverse language coverage.',
      'Training and inference perform well.'
    ]
},
{
  id: 74,
  title: 'IBM Granite Code Models (2024)',
  creator: 'IBM Research',
  description: 'IBM open-sourced its Granite code models (13B size and variants) in May 2024, which outperform LLaMA 3 on coding tasks and enable enterprise-grade LLM code generation.',
  link: 'https://github.com/ibm-granite',
  demo_url: 'https://www.ibm.com/granite',
  tags: ['LLM', 'Code Generation', 'Enterprise AI', 'Foundation Model'],
  language: 'Python',
  license: 'Apache‑2.0',
  level: 'Intermediate to Advanced',
  use_case: 'Use open-source code LLMs for programming assistants, code completion, and enterprise integration.',
  quickstart: 'git clone https://github.com/ibm-granite',
  highlight: 'Enterprise code LLM outperforming LLaMA 3',
  reviews: [
    'Granite 13B instruct/chat beats LLaMA 3 in code benchmarks.',
    'Open-source release was rare from enterprise AI.',
    'Enterprise-ready with context management.',
    'Ideal for corporate code productivity tools.',
    'Backed by IBM reliability.'
  ]
},

// Start 2025


  {
    id: 75,
    title: 'Kimi K2',
    creator: 'Moonshot AI',
    description: 'Kimi K2 is a newly released open‑source model from China’s Moonshot AI, launched in mid‑2025; it excels at coding tasks, task decomposition, and tool integrations—claimed to outperform models like DeepSeek V3 in these areas.',
    link: 'https://github.com/moonshot-ai/kimi-k2',
    demo_url: 'https://kimi.ai/',
    tags: ['LLM', 'Coding Assistant', 'Open Source', 'Tool Integration'],
    language: 'Python',
    license: 'Open Source',
    level: 'Advanced',
    use_case: 'Break down complex tasks, code generation, agentic workflows with integrated tools.',
    quickstart: 'pip install kimi-k2',
    highlight: 'New powerhouse in open-source coding LLMs',
    reviews: [
      'Outperforms DeepSeek in benchmark coding tasks.',
      'First open-source LLM with exceptional tool integration.',
      'Strong task planning and decomposition ability.',
      'Significant boost to China’s open AI ecosystem.',
      'Aggressive performance at competitive compute cost.'
    ]
  },
  {
    id: 76,
    title: 'Sarvam‑M',
    creator: 'Sarvam.ai (IndiaAI Mission)',
    description: 'Sarvam‑M is a 24B‑parameter multilingual reasoning LLM released in early 2025 by Sarvam.ai under IndiaAI initiative; supports ten Indian languages and modular reasoning, outperforming or matching open models like LLaMA and Mistral Small in benchmarks.',
    link: 'https://github.com/sarvam-ai/sarvam-m',
    demo_url: 'https://sarvam.ai/',
    tags: ['Multilingual LLM', 'Indian Languages', 'Reasoning', 'Open Source'],
    language: 'Python',
    license: 'Open Source',
    level: 'Intermediate to Advanced',
    use_case: 'Build multilingual assistants and domain-specific reasoning applications tailored to Indian contexts.',
    quickstart: 'pip install sarvam-m',
    highlight: 'India’s first open generative AI reasoning model',
    reviews: [
      'Surpassed Mistral Small on multilingual benchmarks.',
      'Trained specifically for ten Indian languages.',
      'Supports math, code, and logical reasoning tasks.',
      'Strong community relevance in Indian AI ecosystem.',
      'A major milestone for local-language open models.'
    ]
  },
  {
    id: 77,
    title: 'Isaac GR00T N1',
    creator: 'NVIDIA Research',
    description: 'Isaac GR00T N1 is an open-source robotics foundation model released in 2025, designed for generalist humanoid robot reasoning and control with reflexive and deliberate planning subsystems.',
    link: 'https://github.com/nvidia/isaac-groot-n1',
    demo_url: 'https://developer.nvidia.com/isaac-groot-n1',
    tags: ['Robotics', 'Foundation Model', 'Generalist AI', 'Control Systems'],
    language: 'Python, C++',
    license: 'Apache‑2.0',
    level: 'Advanced',
    use_case: 'Autonomous robot control, planning, and decision-making for robotics platforms.',
    quickstart: 'clone repo and follow NVIDIA docs',
    highlight: 'Breakthrough model for general-purpose robotics',
    reviews: [
      'Defines “generalist robotics” with dual-system control logic.',
      'Used by robotics companies like Boston Dynamics, Agility Robotics.',
      'Supports real-time perception and planning.',
      'NVIDIA-backed scalable foundation for hardware control.',
      'Highly relevant for robotics R&D teams.'
    ]
  },
  {
    id: 78,
    title: 'vLLM',
    creator: 'vllm-project Community',
    description: 'vLLM is a scalable, high-throughput inference engine for large language models that debuted strong traction in 2025 as the go-to open-source backend for efficient LLM serving.',
    link: 'https://github.com/vllm-project/vllm',
    demo_url: 'https://docs.ray.io/vllm.html',
    tags: ['LLM Serving', 'High Throughput', 'Inference Engine', 'Python'],
    language: 'Python',
    license: 'Apache‑2.0',
    level: 'Intermediate to Advanced',
    use_case: 'Serve large language models at scale with memory optimizations, batching, and quantization.',
    quickstart: 'pip install vllm',
    highlight: 'Top-tier LLM serving framework in 2025',
    reviews: [
      'Handles high-throughput requests with ease.',
      'PagedAttention enables efficient memory use.',
      'Integration with Ray, Llama 3.1 support.',
      'Major traction across ML ops ecosystems.',
      'Considered the performance standard for LLM at scale.'
    ]
  },
  {
    id: 79,
    title: 'Docling',
    creator: 'Livathinos et al.',
    description: 'Docling is an open-source AI-powered document conversion toolkit released late 2024 and trending in 2025; it uses modular models (DocLayNet/TableFormer) to extract structured layouts, tables, and rich metadata from PDFs and images.',
    link: 'https://github.com/docling-ai/docling',
    demo_url: 'https://github.com/docling-ai/docling',
    tags: ['Document AI', 'OCR', 'PDF Processing', 'Open Source'],
    language: 'Python',
    license: 'MIT',
    level: 'Intermediate',
    use_case: 'Convert diverse document types into structured data with AI for indexing, RAG, and knowledge workflows.',
    quickstart: 'pip install docling',
    highlight: 'Top trending AI doc conversion tool of 2025',
    reviews: [
      'GitHub’s No.1 trending repo in Nov 2024.',
      'Fully open-source and fast on commodity hardware.',
      'Integrated into LangChain and LlamaIndex pipelines.',
      'Excellent support for layout and table structure extraction.',
      'Great for building RAG systems and enterprise tools.'
    ]
  }









  ]
};

export default ai;
