import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  mode: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  outcomes: string[];
  visual: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  menuOpen = false;
  activeProject = 'fintech';
  readonly cvUrl = 'assets/Henok_Addis_Meles_Software_Engineer_CV.pdf';

  readonly navigation = [
    { label: 'Profile', href: '#profile' }, { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' }, { label: 'Work', href: '#work' }, { label: 'Contact', href: '#contact' }
  ];

  readonly specialties = [
    { number: '01', title: 'Fintech & integrations', text: 'Backend services for payment processing, financial data exchange, and secure third-party integrations.' },
    { number: '02', title: 'Resilient distributed systems', text: 'Microservices, asynchronous messaging, retries, circuit breakers, and patterns that keep workflows moving.' },
    { number: '03', title: 'Secure API platforms', text: 'REST APIs with Spring Security, OAuth2/JWT, role-based access control, and production-minded documentation.' }
  ];

  readonly architecture = [
    { title: 'Channel', text: 'Web clients and partner systems', tech: 'Angular · React · REST' },
    { title: 'Secure edge', text: 'Authentication, authorization, and API boundaries', tech: 'Spring Security · OAuth2 · JWT' },
    { title: 'Service layer', text: 'Domain-focused Java and Spring Boot microservices', tech: 'Spring Boot · OpenAPI' },
    { title: 'Event backbone', text: 'Asynchronous transaction workflows and decoupled services', tech: 'Kafka · RabbitMQ · Outbox' },
    { title: 'Data & delivery', text: 'Reliable persistence, containers, and automated delivery', tech: 'PostgreSQL · Docker · Jenkins' }
  ];

  readonly experiences: Experience[] = [
    {
      role: 'Software Engineer - Fintech Integration', company: 'M-Pesa Ethiopia | Safaricom', period: 'Mar 2026 - Present', mode: 'Onsite',
      summary: 'Building microservices-based backend services for fintech platforms serving enterprise clients, including banks and financial institutions.',
      highlights: [
        'Develop RESTful APIs for payment processing, financial data exchange, and third-party integrations.',
        'Build event-driven services with Kafka for asynchronous transaction processing and real-time data flows.',
        'Apply Spring Security, OAuth2, and JWT to financial applications; support CI/CD, troubleshooting, reviews, and architecture discussions.'
      ], technologies: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Docker', 'Jenkins']
    },
    {
      role: 'Backend Software Engineer', company: 'HF Digital Networks PLC', period: 'Sep 2024 - Sep 2026', mode: 'Product engineering',
      summary: 'Contributed backend and full-stack capabilities to a healthcare management platform used by hospitals and clinics.',
      highlights: [
        'Developed patient management, order processing, and payment workflows supporting core healthcare operations.',
        'Built Spring Boot APIs integrated with React-based applications and improved performance through query optimization and indexing.',
        'Added automated coverage with Jest and Mockito while collaborating with design and QA teams.'
      ], technologies: ['Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Jest', 'Mockito']
    },
    {
      role: 'Full Stack Software Engineer', company: 'Maximus', period: 'Sep 2021 - 2025', mode: 'Remote',
      summary: 'Delivered backend services and web applications for an enterprise business management platform in a distributed team.',
      highlights: [
        'Helped evolve a monolithic application into modular microservices to improve maintainability and scalability.',
        'Implemented secure APIs, PostgreSQL optimizations, and Jenkins/Docker delivery workflows.',
        'Contributed to code reviews, architecture discussions, sprint planning, and technical guidance for junior developers.'
      ], technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'AWS', 'Docker', 'Jenkins']
    }
  ];

  readonly projects: Project[] = [
    {
      id: 'fintech', eyebrow: 'Integration engineering', title: 'Fintech transaction services',
      description: 'Microservices and APIs that support payment processing, financial data exchange, and integration with financial partners.',
      role: 'Software Engineer - Fintech Integration', stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'OAuth2/JWT'],
      outcomes: ['Event-driven transaction processing with producers and consumers.', 'Secure REST APIs for financial application workflows.', 'Database optimization and containerized CI/CD delivery.'], visual: 'transaction'
    },
    {
      id: 'healthcare', eyebrow: 'Full stack lead', title: 'Healthcare management platform',
      description: 'A unified platform for clinical and administrative operations, including patient registration, appointments, medical records, telemedicine, and notifications.',
      role: 'Full Stack Lead', stack: ['Java', 'Spring Boot', 'React', 'Redux', 'PostgreSQL'],
      outcomes: ['Role-based access for doctors, nurses, and administrative users.', 'Integrated modules to improve clinical and administrative workflows.', 'Patient management, scheduling, and electronic medical record modules.'], visual: 'healthcare'
    },
    {
      id: 'portal', eyebrow: 'Backend engineering', title: 'Enterprise company portal',
      description: 'Internal operations platform with backend services and documented APIs designed to make integration easier for connected teams.',
      role: 'Backend Developer', stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Redis'],
      outcomes: ['REST APIs and backend services for enterprise operations.', 'Redis caching and database optimization to improve response times.', 'Swagger/OpenAPI documentation for integration teams.'], visual: 'portal'
    },
    {
      id: 'commerce', eyebrow: 'Full stack delivery', title: 'Multi-vendor commerce platform',
      description: 'Marketplace functionality that supports merchants, products, customer orders, payment flows, and real-time user interactions.',
      role: 'Full Stack Developer', stack: ['Node.js', 'React', 'Laravel', 'MongoDB'],
      outcomes: ['Product catalog, merchant onboarding, and order processing.', 'Payment-processing workflows and real-time interactions.', 'Tools for merchants to manage products and customer orders.'], visual: 'commerce'
    }
  ];

  readonly skillGroups = [
    { title: 'Backend & APIs', items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Spring Security', 'Swagger / OpenAPI'] },
    { title: 'Messaging & reliability', items: ['Apache Kafka', 'RabbitMQ', 'Saga pattern', 'Outbox pattern', 'Retry', 'Circuit breaker', 'Redis'] },
    { title: 'Data & cloud', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Query optimization', 'AWS EC2/S3', 'Docker', 'Kubernetes'] },
    { title: 'Frontend & practice', items: ['Angular', 'React', 'TypeScript', 'Jenkins', 'CI/CD', 'TDD', 'SOLID', 'Agile / Scrum'] }
  ];

  toggleProject(projectId: string): void { this.activeProject = this.activeProject === projectId ? '' : projectId; }
  closeMenu(): void { this.menuOpen = false; }
}
