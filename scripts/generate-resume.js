const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 }
});

const outputPath = path.join(__dirname, '../public/Siddhant_Gupta_Resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Colors
const PRIMARY = '#0F172A';
const ACCENT = '#1E293B';
const MUTED = '#475569';
const LINE_COLOR = '#CBD5E1';

// Header
doc.font('Helvetica-Bold').fontSize(20).fillColor(PRIMARY).text('SIDDHANT GUPTA', { align: 'center' });
doc.font('Helvetica-Bold').fontSize(10).fillColor('#0284C7').text('FULL STACK DEVELOPER | BACKEND & DISTRIBUTED SYSTEMS | AI APPLICATIONS', { align: 'center' });
doc.moveDown(0.2);

doc.font('Helvetica').fontSize(8.5).fillColor(MUTED).text(
  'Bhopal, MP, India  •  +91 62632 11405  •  siddhantgupta797400@gmail.com  •  linkedin.com/in/siddhant62632  •  github.com/siddhant1232',
  { align: 'center' }
);
doc.moveDown(0.4);

function drawSectionHeader(title) {
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text(title.toUpperCase());
  doc.strokeColor(LINE_COLOR).lineWidth(0.8).moveTo(doc.x, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.3);
}

// EDUCATION
drawSectionHeader('Education');
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Technocrats Institute of Technology', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(MUTED).text(' — Bhopal, Madhya Pradesh, India', { continued: true });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(PRIMARY).text(' | August 2023 – May 2027', { align: 'right' });
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(ACCENT).text('Bachelor of Technology (B.Tech) in Computer Science and Engineering');
doc.font('Helvetica').fontSize(8).fillColor(MUTED).text('Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Systems, Operating Systems, Computer Networks');

// EXPERIENCE
drawSectionHeader('Professional Experience');
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Codec Technologies India', { continued: true });
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(MUTED).text(' — Full Stack Developer Intern', { continued: true });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(PRIMARY).text(' | October 2025 – December 2025', { align: 'right' });
doc.font('Helvetica').fontSize(8).fillColor(MUTED).text('Tech Stack: React.js, Node.js, Express.js, Stripe, Clerk, JWT, AWS EC2, Amazon S3');
doc.moveDown(0.2);

const expBullets = [
  'Developed 8 reusable React.js components across 6 modules of an e-commerce platform using modern ES6+ patterns.',
  'Integrated 3 production APIs, including Stripe payment workflows, Clerk authentication, and JWT-based role authorization.',
  'Developed backend REST APIs using Node.js and Express.js for gamification and digital wallet features.',
  'Collaborated with a 3-member development team, addressing code review feedback and resolving cross-browser UI issues using Chrome DevTools.',
  'Prepared production-ready code for deployment on AWS EC2 and integrated Amazon S3 for application asset storage.'
];

expBullets.forEach(bullet => {
  doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(`•  ${bullet}`, { indent: 8, lineGap: 1.5 });
});

// FEATURED PROJECTS
drawSectionHeader('Featured Projects');

// Project 1
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Multi-Agent Research & Report System', { continued: true });
doc.font('Helvetica').fontSize(8).fillColor(MUTED).text(' | Python, LangGraph, Google Gemini API, Pydantic', { continued: true });
doc.font('Helvetica').fontSize(8).fillColor('#0284C7').text(' | github.com/siddhant1232', { align: 'right' });
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Architected an autonomous 3-agent orchestration pipeline using LangGraph (Planner, Researcher, Synthesizer).',
  { indent: 8, lineGap: 1.2 }
);
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Enforced structured state handoffs through typed Pydantic schemas instead of unstructured free text.',
  { indent: 8, lineGap: 1.2 }
);
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Engineered resilient API client with exponential backoff retry logic and built 100% offline-runnable unit test suite.',
  { indent: 8, lineGap: 1.5 }
);

// Project 2
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Distributed API Rate Limiter & Microservices Platform', { continued: true });
doc.font('Helvetica').fontSize(8).fillColor(MUTED).text(' | Node.js, Express, Redis, PostgreSQL, MongoDB, Docker, BullMQ', { continued: true });
doc.font('Helvetica').fontSize(8).fillColor('#0284C7').text(' | github.com/siddhant1232', { align: 'right' });
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Designed high-throughput Redis-backed distributed rate limiter implementing Token Bucket, Fixed Window, and Sliding Window algorithms.',
  { indent: 8, lineGap: 1.2 }
);
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Containerized microservices mesh (API Gateway, Auth, User, and Notification services) with JWT authentication.',
  { indent: 8, lineGap: 1.2 }
);
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Integrated BullMQ with Redis for asynchronous background job processing, isolating compute-intensive notifications.',
  { indent: 8, lineGap: 1.5 }
);

// Project 3
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text('Conciso — AI PDF Summarizer', { continued: true });
doc.font('Helvetica').fontSize(8).fillColor(MUTED).text(' | Next.js, TypeScript, PostgreSQL, AI APIs', { continued: true });
doc.font('Helvetica').fontSize(8).fillColor('#0284C7').text(' | github.com/siddhant1232', { align: 'right' });
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Developed full-stack Next.js and TypeScript application with responsive UI and reusable component architecture.',
  { indent: 8, lineGap: 1.2 }
);
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Implemented multi-stage document chunking and summarization workflow capable of processing technical documents exceeding 50 pages.',
  { indent: 8, lineGap: 1.2 }
);
doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(
  '•  Integrated indexed PostgreSQL persistence layer for session caching, document metadata, and generated summaries.',
  { indent: 8, lineGap: 1.5 }
);

// TECHNICAL SKILLS
drawSectionHeader('Technical Skills');
const skills = [
  { label: 'Languages', items: 'JavaScript (ES6+), TypeScript, Java, Python, SQL, HTML5, CSS3' },
  { label: 'Frontend', items: 'React.js, Next.js, Tailwind CSS, Responsive Mobile-First Design' },
  { label: 'Backend', items: 'Node.js, Express.js, REST APIs, Microservices Architecture, JWT Authentication' },
  { label: 'Databases', items: 'PostgreSQL, MongoDB, Redis, ChromaDB, Firebase' },
  { label: 'DevOps & Cloud', items: 'Docker, AWS EC2, AWS S3, Git, GitHub Actions' },
  { label: 'AI & Engineering', items: 'Google Gemini API, Retrieval-Augmented Generation (RAG), Prompt Engineering, System Design, Debugging' }
];

skills.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(8.2).fillColor(PRIMARY).text(`•  ${s.label}: `, { continued: true, indent: 8 });
  doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(s.items, { lineGap: 1.2 });
});

// ACHIEVEMENTS
drawSectionHeader('Achievements & Certifications');
const achievements = [
  'Smart India Hackathon 2025 (National Round): Presented hardware solution at IIT Roorkee as part of a 6-member team, advancing past college-level selection to national finals.',
  'Hack-AI-thon (SBI Life): Designed 4 wireframes for AI-driven UI/UX redesign of SBI Life platform, built functional webpages, and presented to 2-judge panel.',
  'NPTEL Certification — Programming in Java: Completed elite-level proctored national certification covering OOP, multithreading, and collections framework.'
];

achievements.forEach(ach => {
  doc.font('Helvetica').fontSize(8.2).fillColor(ACCENT).text(`•  ${ach}`, { indent: 8, lineGap: 1.5 });
});

doc.end();
stream.on('finish', () => {
  console.log('Resume successfully generated at:', outputPath);
});
