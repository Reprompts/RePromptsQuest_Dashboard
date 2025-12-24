# RePromptsQuest Dashboard

RePromptsQuest Dashboard is a fully responsive web platform built using React.js that aggregates developer-focused resources, AI utilities, and productivity tools under a single interface. The platform integrates frontend services with Python-based backend applications and is deployed on a VPS using an Nginx reverse proxy with secure SSH-based access.

---

## Overview

The dashboard serves as a centralized hub for RePromptsQuest services, including curated tech content, AI prompt utilities, online tools, and Python-powered applications. It follows a production-ready architecture where the frontend and backend are decoupled and securely exposed via Nginx.

---

## Features

### Frontend Dashboard
- Built with React.js
- Fully responsive layout for desktop, tablet, and mobile
- Modular and scalable component-based architecture
- Clean navigation and service-oriented UI

### Integrated Services
- Latest technology and industry news
- Top programming-related Reddit posts
- Programming courses and curated learning resources
- Online developer utilities
- Prompt library with ready-to-use prompts for various AI use cases

### Python Applications
- Text-to-Speech (TTS) application
- Built using Microsoft Text-to-Speech Python package
- Backend implemented with FastAPI
- API-driven design for seamless frontend integration

---

## Architecture

The project follows a standard production deployment model:

Client (Browser)  
→ React.js Frontend  
→ Nginx Reverse Proxy  
→ FastAPI Backend (Python services)

- React build files are served as static assets via Nginx
- API requests are routed internally to FastAPI services
- Backend services are not publicly exposed

---

## Deployment Details

- Hosted on a Hostinger Virtual Private Server (VPS)
- Operating System: Ubuntu LTS 24.x
- Nginx configured as a reverse proxy
- Python backend runs using Gunicorn with Uvicorn workers
- Backend services managed using systemd
- Secure server access via SSH key-based authentication

---

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend
- Python 3
- FastAPI
- Uvicorn
- Gunicorn
- Microsoft TTS Python package

### Infrastructure and DevOps
- Ubuntu LTS (24.x)
- Nginx
- Hostinger VPS
- SSH key-based authentication

---

## Local Development

### Frontend Setup
npm install  
npm start  

### Backend Setup
python3 -m venv venv  
source venv/bin/activate  
pip install -r requirements.txt  
uvicorn main:app --reload  

---

## Security Considerations

- Backend services are bound to localhost only
- No direct public exposure of application ports
- SSH access restricted using key-based authentication
- Nginx handles request routing and HTTPS termination

---

## Use Cases

- Centralized platform for developer and AI resources
- Prompt engineering toolkit
- Integration of Python-based utilities into a web dashboard
- Scalable architecture suitable for SaaS-style applications

---

## Author

Ganesh Nalawade  

