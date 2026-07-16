export interface ServiceDetailData {
	id: string;
	title: string;
	category: string;
	description: string;
	longDescription: string;
	accentColor: string;
	image: string; // Identifier for the graphic illustration
	features: Array<{ title: string; description: string }>;
	process: Array<{ step: string; title: string; description: string }>;
	benefits: Array<{ title: string; description: string }>;
	metrics: Array<{ value: string; label: string }>;
	tools: Array<string>;
	faqs: Array<{ question: string; answer: string }>;
}

export const SERVICES_DATA: Record<string, ServiceDetailData> = {
	'power-platform': {
		id: 'power-platform',
		title: 'Microsoft Power Platform Solutions',
		category: 'Enterprise Solutions',
		description: 'Power BI, Power Apps, and Power Automate custom solutions.',
		longDescription: 'Enable data-driven decision making and automate complex workflows across your enterprise. We design, deploy, and support customized Power BI dashboards, low-code Power Apps, and robust Power Automate flows that integrate seamlessly with your existing IT ecosystem.',
		accentColor: '#8512E0',
		image: 'power-platform',
		features: [
			{ title: 'Interactive Power BI Reports', description: 'Transform raw data into real-time interactive business intelligence dashboards and operational charts.' },
			{ title: 'Custom Low-Code Power Apps', description: 'Deploy business apps rapidly for mobile and web to optimize on-the-field operations and inspections.' },
			{ title: 'Automated Cloud Flows', description: 'Eliminate manual entry and sync data across platforms with complex multi-stage background automations.' },
			{ title: 'Dataverse & SharePoint Integration', description: 'Architect secure, structured data storage that complies with enterprise governance.' }
		],
		process: [
			{ step: '01', title: 'Requirement Analysis', description: 'Identify operational bottlenecks and plan the architecture for Power Apps or reports.' },
			{ step: '02', title: 'Prototype & Design', description: 'Develop low-fidelity app wireframes and dashboard mockups for user feedback.' },
			{ step: '03', title: 'Low-Code Development', description: 'Build flows, write expressions (DAX/Power Fx), and wire screens securely.' },
			{ step: '04', title: 'UAT & Deployment', description: 'Conduct user acceptance tests, manage permissions, and publish to the environment.' }
		],
		benefits: [
			{ title: '90% Development Speedup', description: 'Low-code approaches deliver working applications in weeks instead of months.' },
			{ title: 'Reduced Operational Costs', description: 'Automating administrative tasks saves hundreds of manual labor hours monthly.' },
			{ title: 'Unified Data Source', description: 'Consolidate multiple legacy datasheets into a single source of truth.' }
		],
		metrics: [
			{ value: '150+', label: 'Custom Apps Deployed' },
			{ value: '60%', label: 'Reduction in Manual Workloads' },
			{ value: '45+', label: 'Dashboard Assets Managed' }
		],
		tools: ['Power BI', 'Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'SQL Server', 'Azure AD'],
		faqs: [
			{ question: 'What is the licensing cost for Power Platform?', answer: 'Licensing varies by user volume and connector types. Standard Microsoft 365 plans include basic features, while custom database integrations (premium connectors) require standalone Power Apps per-user or per-app licenses. We help optimize your usage to minimize overhead.' },
			{ question: 'Can these tools integrate with Salesforce or SAP?', answer: 'Yes. Power Platform supports standard premium connectors for Salesforce, SAP, Oracle, and custom REST API endpoints, allowing unified actions across disparate business systems.' }
		]
	},
	'qa-testing': {
		id: 'qa-testing',
		title: 'Quality Assurance & Testing',
		category: 'Enterprise Solutions',
		description: 'Manual and automated testing services to ensure high product quality.',
		longDescription: 'Deliver flawless user experiences and bulletproof reliability. Our QA engineers execute rigorous manual testing, construct automated test suites, and run performance diagnostics to identify bugs before your users do.',
		accentColor: '#002FFF',
		image: 'qa-testing',
		features: [
			{ title: 'Test Automation Engineering', description: 'Create maintainable automated test scripts using Playwright, Selenium, and Cypress.' },
			{ title: 'Detailed Functional Testing', description: 'Examine layout, user inputs, edge cases, and business logic flow thoroughly.' },
			{ title: 'Performance & API Testing', description: 'Validate endpoint load, stress tolerances, and latency under peak simulated traffic.' },
			{ title: 'Defect Management', description: 'Track issues, document steps to reproduce, and collaborate with developers on fixes.' }
		],
		process: [
			{ step: '01', title: 'Plan & Strategy', description: 'Map test coverage against functional requirement documents and prepare test cases.' },
			{ step: '02', title: 'Environment Setup', description: 'Configure staging testing environments and seed mock database records.' },
			{ step: '03', title: 'Execution & Scripting', description: 'Run manual checks and write scripts for repetitive functional regressions.' },
			{ step: '04', title: 'Reporting & Verification', description: 'Publish bug logs, share test coverage charts, and verify completed developer fixes.' }
		],
		benefits: [
			{ title: 'Zero Production Criticals', description: 'Detect regression bugs early, avoiding costly fixes after deployment.' },
			{ title: 'Accelerated Release Cycles', description: 'Automated test suites run in minutes, speeding up continuous integration runs.' },
			{ title: 'Exceptional UX Quality', description: 'Ensure design consistency and smooth performance across all popular browsers.' }
		],
		metrics: [
			{ value: '98%', label: 'Test Coverage Reached' },
			{ value: '10x', label: 'Faster Regression Testing Runs' },
			{ value: '15k+', label: 'Test Cases Automated' }
		],
		tools: ['Playwright', 'Selenium WebDriver', 'Cypress', 'Jira', 'Postman', 'K6', 'GitHub Actions'],
		faqs: [
			{ question: 'When should we automate our testing process?', answer: 'We recommend automating tests for stable, repetitive user flows (such as logins, checkouts, and key data forms) that are executed in every regression run. Rapidly changing design components are better tested manually.' },
			{ question: 'Do you support testing for accessibility compliance in QA?', answer: 'Yes, accessibility checks (WCAG checkpoints) are integrated directly into our QA workflows, utilizing both automated linting engines (Axe-core) and manual screen reader verification.' }
		]
	},
	'custom-app-dev': {
		id: 'custom-app-dev',
		title: 'Custom Application Development',
		category: 'Enterprise Solutions',
		description: 'Custom web and mobile applications tailored to your business needs.',
		longDescription: 'Bring your ideas to life with modern web and mobile apps. We leverage cutting-edge tech stacks (React, Node.js, TypeScript, Python) to build responsive, fast, and secure applications that scale alongside your user base.',
		accentColor: '#10B981',
		image: 'custom-app-dev',
		features: [
			{ title: 'Responsive Web Apps', description: 'Construct single-page and server-rendered web applications optimized for speed and accessibility.' },
			{ title: 'Cross-Platform Mobile Apps', description: 'Build native iOS and Android experiences from a single React Native or Flutter codebase.' },
			{ title: 'Robust Backend APIs', description: 'Engineer secure, scalable RESTful and GraphQL APIs to power your client interfaces.' },
			{ title: 'Database Design', description: 'Model relational (PostgreSQL) and document (MongoDB) databases with query optimization.' }
		],
		process: [
			{ step: '01', title: 'Scoping & Architecture', description: 'Define software requirements, choose technology stack, and sketch database models.' },
			{ step: '02', title: 'UI/UX Design', description: 'Create high-fidelity screens, navigation flows, and interactive mockups.' },
			{ step: '03', title: 'Fullstack Development', description: 'Write clean, modular code with comprehensive unit test coverage.' },
			{ step: '04', title: 'Deployment & CI/CD', description: 'Build pipelines to automate build and push applications securely to production.' }
		],
		benefits: [
			{ title: 'Tailored Functionality', description: 'Software matches your exact business process instead of trying to fit into rigid SaaS products.' },
			{ title: 'Scalable Architecture', description: 'Applications are engineered to handle high volumes of concurrent requests.' },
			{ title: 'Complete Ownership', description: 'Full control of application source code, infrastructure, and user data.' }
		],
		metrics: [
			{ value: '50+', label: 'Custom Apps Delivered' },
			{ value: '1M+', label: 'Active End Users Serviced' },
			{ value: '99.9%', label: 'Customer SLA Satisfaction' }
		],
		tools: ['React.js', 'Node.js (Express)', 'TypeScript', 'Python (Django)', 'PostgreSQL', 'Docker', 'AWS'],
		faqs: [
			{ question: 'Do we own the intellectual property (IP) of the software?', answer: 'Absolutely. Upon project completion and final contract terms, full ownership of the custom code repositories and IP is transferred entirely to your organization.' },
			{ question: 'Do you offer maintenance plans after launching?', answer: 'Yes, we provide flexible support agreements covering server updates, feature iterations, security patches, and database optimizations to keep your app running smoothly.' }
		]
	},
	'cloud-infra': {
		id: 'cloud-infra',
		title: 'Cloud Infra Solutions',
		category: 'Enterprise Solutions',
		description: 'AWS, GCP, Azure setup, migration, and DevOps practices.',
		longDescription: 'Establish secure, resilient, and optimized cloud environments. Our cloud architects configure infrastructure, deploy container workloads, and configure monitoring pipelines to ensure continuous uptime and minimal latency.',
		accentColor: '#ea580c',
		image: 'cloud-infra',
		features: [
			{ title: 'Infrastructure as Code (IaC)', description: 'Provision resources declaratively and reproducibly using Terraform and CloudFormation.' },
			{ title: 'Container Orchestration', description: 'Package services into Docker and deploy them on Kubernetes or ECS clusters.' },
			{ title: 'CI/CD Pipeline Setup', description: 'Automate static analysis, build steps, and deployments using GitHub Actions.' },
			{ title: 'Security & Monitoring', description: 'Implement Prometheus monitoring, alerts, audit trails, and strict network security.' }
		],
		process: [
			{ step: '01', title: 'Infra Audit', description: 'Analyze existing deployments and design cloud topology for security and cost.' },
			{ step: '02', title: 'IaC Blueprinting', description: 'Write scripts representing VPC, server, database, and storage parameters.' },
			{ step: '03', title: 'DevOps Pipeline Configuration', description: 'Build automated continuous integration pipelines with static code checks.' },
			{ step: '04', title: 'Migration & Handover', description: 'Run zero-downtime data migration and train teams on monitoring consoles.' }
		],
		benefits: [
			{ title: '99.99% Availability', description: 'Establish multi-region high availability and automated disaster recoveries.' },
			{ title: 'Significant Cost Optimization', description: 'Automated resizing, sleep timers, and serverless architectures lower cloud bills.' },
			{ title: 'Hardened Security Posture', description: 'Enforce isolation of environments and private network configurations.' }
		],
		metrics: [
			{ value: '99.99%', label: 'Uptime Guaranteed' },
			{ value: '35%', label: 'Infrastructure Cost Reductions' },
			{ value: '200+', label: 'Containers Orchestrated' }
		],
		tools: ['Terraform', 'Kubernetes (EKS)', 'AWS', 'Google Cloud Platform', 'Docker', 'Prometheus & Grafana', 'GitHub Actions'],
		faqs: [
			{ question: 'What is Infrastructure as Code (IaC)?', answer: 'IaC lets you define cloud setups (VPCs, servers, databases) in text configuration files. This eliminates manual configuration errors, allows version control, and makes environment duplication instantaneous.' },
			{ question: 'How do you ensure our cloud bills do not spiral out of control?', answer: 'We set up auto-scaling rules, sleep timers for developer environments, and resource allocation trackers. We conduct monthly cost optimization reviews to trim unused storage and compute allocations.' }
		]
	},
	'a11y-audit': {
		id: 'a11y-audit',
		title: 'Accessibility Audit',
		category: 'Accessibility & Compliance',
		description: 'Comprehensive WCAG compliance auditing for web and mobile.',
		longDescription: 'Make your digital products usable by everyone, including people with vision, hearing, motor, or cognitive disabilities. We conduct detailed audits against WCAG 2.1 & 2.2 AA standards using assistive tools, keyboard testing, and automated engines.',
		accentColor: '#2563eb',
		image: 'a11y-audit',
		features: [
			{ title: 'Screen Reader Audits', description: 'Test layouts with NVDA, JAWS, and VoiceOver to ensure correct ARIA semantics.' },
			{ title: 'Keyboard Only Navigation', description: 'Verify that all interactive controls are operable without mouse input.' },
			{ title: 'Color Contrast Checks', description: 'Identify violations in background-to-text contrast ratios across dark/light modes.' },
			{ title: 'Compliance Report Generation', description: 'Deliver audit lists mapped to WCAG criteria with code-level fix recommendations.' }
		],
		process: [
			{ step: '01', title: 'Automated Scan', description: 'Scan templates with AXE Core to catch structural issues quickly.' },
			{ step: '02', title: 'Manual Testing', description: 'Verify complex widgets, modals, forms, and custom components by keyboard.' },
			{ step: '03', title: 'Assistive Tech Run', description: 'Navigate flow with screen readers to audit user flow clarity.' },
			{ step: '04', title: 'Audit Report Handover', description: 'Publish audit lists detailing contrast errors, missing alt tags, and keyboard traps.' }
		],
		benefits: [
			{ title: 'Mitigate Legal Risks', description: 'Comply with ADA, Section 508, and European Accessibility Act compliance.' },
			{ title: 'Improved User Experience', description: 'Clean layouts benefit not only disabled users but also seniors and mobile readers.' },
			{ title: 'Better Search Rankings', description: 'Semantic structure improves web crawler indexation, directly raising organic rankings.' }
		],
		metrics: [
			{ value: '300+', label: 'Digital Assets Audited' },
			{ value: '100%', label: 'WCAG Compliance Target' },
			{ value: '2M+', label: 'Inclusive Users Impacted' }
		],
		tools: ['NVDA', 'JAWS', 'VoiceOver', 'Axe-core', 'WAVE Tool', 'Colour Contrast Analyser', 'Lighthouse'],
		faqs: [
			{ question: 'What is the difference between automated and manual audits?', answer: 'Automated scans (like Lighthouse/Axe) detect about 30% of standard WCAG violations (e.g. basic contrast, missing alt attributes). Manual verification is critical to confirm semantic readability, keyboard focus routing, screen reader descriptions, and complex widget operations.' },
			{ question: 'What accessibility standards do you test against?', answer: 'We audit against W3C WCAG (Web Content Accessibility Guidelines) 2.0, 2.1, and 2.2 Level A, AA, and AAA checkpoints, aligning with ADA, Section 508, and EU digital accessibility requirements.' }
		]
	},
	'doc-remediation': {
		id: 'doc-remediation',
		title: 'Document Remediation',
		category: 'Accessibility & Compliance',
		description: 'PDF, Word, and PowerPoint remediation for accessibility standards.',
		longDescription: 'Ensure your downloadable files are accessible to screen reader users. We tag PDF, Microsoft Word, and PowerPoint documents to align with PDF/UA standards, establishing logical reading orders and alt text descriptions for non-text objects.',
		accentColor: '#16a34a',
		image: 'doc-remediation',
		features: [
			{ title: 'Logical Tagging Structure', description: 'Verify heading hierarchies, paragraph splits, list markers, and nested structures.' },
			{ title: 'Alternative Text for Graphics', description: 'Write clear description tags for charts, diagrams, and illustrative photography.' },
			{ title: 'Accessible Table Formats', description: 'Tag table header cells (TH), data cells (TD), scope, and relationships correctly.' },
			{ title: 'PDF/UA Certification', description: 'Validate files with PAC checker tools to guarantee standard compliance.' }
		],
		process: [
			{ step: '01', title: 'Document Inspection', description: 'Inspect head tags, reading order, and contrast issues using Adobe Acrobat Pro.' },
			{ step: '02', title: 'Alternative Text Writing', description: 'Coordinate with subject experts to draft appropriate text descriptions.' },
			{ step: '03', title: 'Tag Adjustments', description: 'Rearrange order, mark decorative illustrations, and tag headers and lists.' },
			{ step: '04', title: 'Compliance Validation', description: 'Verify tagging structures using screen readers and automated checkers.' }
		],
		benefits: [
			{ title: 'Inclusive Information Access', description: 'Permit blind and low-vision employees to read annual reports and manuals.' },
			{ title: 'Standard Compliance', description: 'Meet corporate compliance mandates for public document access.' },
			{ title: 'Archival Searchability', description: 'Remediated documents can be indexed by text searching utilities easily.' }
		],
		metrics: [
			{ value: '50k+', label: 'Document Pages Remediated' },
			{ value: '99.9%', label: 'PDF/UA PAC Verification Pass' },
			{ value: '12+', label: 'Corporate Sectors Serviced' }
		],
		tools: ['Adobe Acrobat Pro', 'CommonLook PDF', 'PAC 3 & PAC 2021 Tester', 'Microsoft Office Accessibility Checker', 'Screen Readers'],
		faqs: [
			{ question: 'What documents need remediation?', answer: 'Any public document shared on your web application or internal corporate network (PDF user guides, statements, corporate slide decks, and spreadsheets) should be remediated so employees and customers using assistive technologies can read them.' },
			{ question: 'Can you remediate documents in bulk?', answer: 'Yes, we have a structured batch-remediation pipeline with dedicated remediators who process, tag, and verify large volumes of documents (e.g. invoices, annual statements, manuals) while preserving exact formatting.' }
		]
	},
	'custom-built-mis': {
		id: 'custom-built-mis',
		title: 'Custom Built MIS',
		category: 'NGO & Social Impact',
		description: 'Operational tracking, candidate lifecycles, and database logging systems.',
		longDescription: 'Optimize trainee and candidate lifecycle management with a specialized MIS. Designed to handle enrollment logs, course tracking, evaluations, placement history, and employer reports in one unified dashboard.',
		accentColor: '#0891b2',
		image: 'custom-built-mis',
		features: [
			{ title: 'Candidate Profile Tracking', description: 'Manage records from counseling to training allocations and interview outcomes.' },
			{ title: 'Batch & Lesson Scheduling', description: 'Map classes, track attendance, and log course completions.' },
			{ title: 'Evaluations & Grading', description: 'Log assessment scores, projects, and track technical skill levels.' },
			{ title: 'Secure Access Control', description: 'Ensure administrators, trainers, and coordinators only access relevant details.' }
		],
		process: [
			{ step: '01', title: 'Process Mapping', description: 'Understand how candidates register and move through training steps.' },
			{ step: '02', title: 'Database Schema Design', description: 'Design structured entities for candidates, trainers, batches, and placements.' },
			{ step: '03', title: 'Interface Build', description: 'Develop web portals with filters, search, CSV export, and bulk entries.' },
			{ step: '04', title: 'User Onboarding', description: 'Migrate legacy worksheets and train operators on daily data entry.' }
		],
		benefits: [
			{ title: 'Centralized Records', description: 'All candidate historical files are search-accessible in seconds.' },
			{ title: 'Clear Reporting metrics', description: 'Generate donor and board compliance reports with one click.' },
			{ title: 'Eliminate Input Errors', description: 'Drop-downs, date controls, and validations prevent manual data issues.' }
		],
		metrics: [
			{ value: '15k+', label: 'Candidates Managed' },
			{ value: '100%', label: 'Data Accuracy Maintained' },
			{ value: '15+', label: 'NGO Centers Connected' }
		],
		tools: ['React.js', 'Node.js', 'PostgreSQL', 'CSV Export Engines', 'Tailored Steppers', 'Secure RBAC Core'],
		faqs: [
			{ question: 'What is the deployment process for this MIS?', answer: 'We build and host the MIS on secure cloud servers (such as AWS or secure private servers). We configure automated database backups and configure SSL keys to secure candidate database files.' },
			{ question: 'Does the application support custom reports?', answer: 'Yes. The MIS has query filters and export engines allowing coordinators to generate center-wise, batch-wise, gender-wise, or placement statistics instantly for spreadsheets.' }
		]
	},
	'digital-marketing': {
		id: 'digital-marketing',
		title: 'Digital Marketing & Design',
		category: 'NGO & Social Impact',
		description: 'UX, branding, and campaign strategies for social ventures.',
		longDescription: 'Build strong identities and expand your impact. We provide branding assets, accessible website layouts, social media collateral design, and campaign strategies tailored to non-profits and social ventures.',
		accentColor: '#002FFF',
		image: 'digital-marketing',
		features: [
			{ title: 'Brand Identity Design', description: 'Design logo libraries, font selections, and inclusive brand color palettes.' },
			{ title: 'Social Media Campaigns', description: 'Create accessible, high-contrast imagery templates for campaign announcements.' },
			{ title: 'Accessible Web Layouts', description: 'Design clean, readable layouts built with accessible contrast and font sizes.' },
			{ title: 'Content Strategies', description: 'Draft compelling story briefs that communicate non-profit initiatives effectively.' }
		],
		process: [
			{ step: '01', title: 'Discovery & Vision', description: 'Align on brand mission, target audience, and communication channels.' },
			{ step: '02', title: 'Visual Explorations', description: 'Develop style options, brand colors, and typographies.' },
			{ step: '03', title: 'Collateral Assets Build', description: 'Design slide decks, newsletter structures, and banner packages.' },
			{ step: '04', title: 'Launch Strategy', description: 'Configure campaign schedulers and coordinate donor outreach launches.' }
		],
		benefits: [
			{ title: 'Amplified Mission Reach', description: 'Beautiful storytelling increases donor interest and volunteer applications.' },
			{ title: 'Consistent Visual Theme', description: 'Present a cohesive, professional image across newsletters, web, and prints.' },
			{ title: 'Inclusive Communication', description: 'High contrast design ensures marketing content is accessible to all.' }
		],
		metrics: [
			{ value: '3x', label: 'Increase in Donor Engagement' },
			{ value: '40+', label: 'Social Ventures Rebranded' },
			{ value: '100k+', label: 'Campaign Audience Reached' }
		],
		tools: ['Adobe Creative Suite', 'Figma', 'Mailchimp', 'WordPress/Webflow', 'Google Analytics', 'Axe Accessibility Checks'],
		faqs: [
			{ question: 'Why is accessible design important for marketing?', answer: 'Accessible design ensures that elderly users, individuals with color blindness, and assistive technology users can engage with your newsletters, files, and posts. Inclusion in outreach materials dramatically expands your advocacy community.' },
			{ question: 'Do you assist with SEO audit setups?', answer: 'Yes, we optimize web titles, HTML tags, page speeds, and description parameters as part of web designs, which directly helps organic search indexation.' }
		]
	},
	'operational-excellence': {
		id: 'operational-excellence',
		title: 'Operational Excellence',
		category: 'NGO & Social Impact',
		description: 'Process optimization, cloud management, and operational workflows.',
		longDescription: 'Help mission-driven teams accomplish more with less. We analyze your team\'s operational workflows, configure collaboration boards, set up digital tools, and automate administrative overhead.',
		accentColor: '#ef4444',
		image: 'operational-excellence',
		features: [
			{ title: 'Process Mapping & Audits', description: 'Diagram existing administrative workflows to identify manual tasks and delays.' },
			{ title: 'Collaboration Boards Setup', description: 'Implement and configure tools like Jira, Trello, or Planner for task management.' },
			{ title: 'Repetitive Tasks Automation', description: 'Set up low-code automated flows for approval logs, reminders, and summaries.' },
			{ title: 'Document Operations Setup', description: 'Organize folder hierarchies and permission systems in cloud storage.' }
		],
		process: [
			{ step: '01', title: 'Workflow Auditing', description: 'Observe team members performing operational duties to identify bottlenecks.' },
			{ step: '02', title: 'Tool Selection & Planning', description: 'Select lightweight, low-maintenance systems that fit team capacities.' },
			{ step: '03', title: 'Configuration & Integrations', description: 'Configure workflows, dashboards, automation rules, and dashboards.' },
			{ step: '04', title: 'Training & Iteration', description: 'Conduct interactive walkthrough training sessions and refine based on feedback.' }
		],
		benefits: [
			{ title: 'Reduced Administrative Overhead', description: 'Automating notification tasks frees up staff for direct program operations.' },
			{ title: 'Increased Task Transparency', description: 'Clear kanban boards ensure tasks are monitored and never fall through.' },
			{ title: 'Faster Program Launching', description: 'Structured blueprints enable new batches to launch and scale rapidly.' }
		],
		metrics: [
			{ value: '500+', label: 'Hours Saved Annually' },
			{ value: '100%', label: 'TIMELINE TRACKING VISIBILITY' },
			{ value: '4+', label: 'NGO Collaboration Tools Integrated' }
		],
		tools: ['Trello / Jira', 'Microsoft SharePoint', 'Google Workspace Sync', 'Zapier / Power Automate', 'Miro Workflow Mapping'],
		faqs: [
			{ question: 'Will these operational tools be too complex for our field staff?', answer: 'We design simple, streamlined workflows and conduct intuitive training sessions. We avoid jargon and configure tools to require minimal clicks for daily operational entries.' },
			{ question: 'Can you consolidate existing spreadsheets?', answer: 'Yes. We audit scattered datasheets, structure database relationships, and migrate files to consolidated cloud folders with access rules.' }
		]
	},
	'inclusive-content': {
		id: 'inclusive-content',
		title: 'Inclusive Content Creation',
		category: 'NGO & Social Impact',
		description: 'ISL video production, sign language translations, and captions.',
		longDescription: 'Make your video assets accessible to Deaf and Hard of Hearing viewers. We produce high-quality Indian Sign Language (ISL) video interpretations, edit caption files, and review content layouts for complete visual accessibility.',
		accentColor: '#f59e0b',
		image: 'inclusive-content',
		features: [
			{ title: 'ISL Video Interpretation', description: 'Translate spoken and written content into natural Indian Sign Language (ISL) video overlay.' },
			{ title: 'Time-Synced Captioning', description: 'Write and edit highly accurate caption files (SRT, VTT) matching spoken audio.' },
			{ title: 'Deaf-Friendly Visual Editing', description: 'Format sign interpreter overlays with appropriate sizing and backgrounds.' },
			{ title: 'Quality Assurance Review', description: 'Validate sign accuracy and synchronization with certified native Deaf reviewers.' }
		],
		process: [
			{ step: '01', title: 'Script Translation', description: 'Review scripts to prepare accurate, natural sign translations.' },
			{ step: '02', title: 'Video Production', description: 'Record qualified sign language interpreters with professional lighting.' },
			{ step: '03', title: 'Video Post-Production', description: 'Composite sign overlay, edit layout, and synchronize timed captions.' },
			{ step: '04', title: 'Review & Certification', description: 'Run content audits with native reviewers for readability and accuracy.' }
		],
		benefits: [
			{ title: 'Empower Deaf Beneficiaries', description: 'Provide equal learning opportunities to individuals using sign language.' },
			{ title: 'WCAG Audio Compliance', description: 'Satisfy caption requirements for public video content.' },
			{ title: 'Greater User Engagement', description: 'Captions and visual layouts improve focus for language learners and auditory readers.' }
		],
		metrics: [
			{ value: '200+', label: 'ISL Videos Produced' },
			{ value: '100%', label: 'Subtitle Accuracy Standard' },
			{ value: '50k+', label: 'Inclusive Video Views' }
		],
		tools: ['Adobe Premiere Pro', 'Professional Video Studios', 'ISL Gloss Translation Engine', 'Native Deaf Sign Assessors'],
		faqs: [
			{ question: 'What is Indian Sign Language (ISL) overlay?', answer: 'ISL overlay is a picture-in-picture video window displaying a professional sign interpreter. This overlay is critical for Deaf individuals who communicate primary through sign language rather than written text.' },
			{ question: 'Do you translate technical or medical scripts into ISL?', answer: 'Yes. Our certified interpreters work alongside subject matter experts to construct appropriate sign representations for technical, banking, educational, and medical terminologies.' }
		]
	},
	'corporate-training': {
		id: 'corporate-training',
		title: 'Corporate Training Programs',
		category: 'Capacity Building & Adoption',
		description: 'Upskilling programs for corporate employees on digital skills.',
		longDescription: 'Equip your staff with technical skills in AI and enterprise development. We deliver interactive upskilling bootcamps on Microsoft Power Platform, custom application development, and web accessibility implementation.',
		accentColor: '#8512E0',
		image: 'corporate-training',
		features: [
			{ title: 'Power Platform Training', description: 'Hands-on training covering Power BI dashboard building and Power Apps.' },
			{ title: 'Web Development Upskilling', description: 'Interactive courses on modern frontend architectures, React, and TypeScript.' },
			{ title: 'Accessibility (A11y) Coding', description: 'Teach development teams how to code WCAG-compliant elements and fix bugs.' },
			{ title: 'Customized Curriculum', description: 'Design practical coding challenges based on actual enterprise projects.' }
		],
		process: [
			{ step: '01', title: 'Assess Skills Gaps', description: 'Assess current team capabilities and define desired learning milestones.' },
			{ step: '02', title: 'Syllabus Customization', description: 'Outline session plans, hands-on lab projects, and evaluation checkpoints.' },
			{ step: '03', title: 'Interactive Bootcamps', description: 'Conduct live coding webinars, lab sessions, and Q&A panels.' },
			{ step: '04', title: 'Certify & Review', description: 'Grade projects, publish certifications, and provide student evaluation reports.' }
		],
		benefits: [
			{ title: 'Address Key Talent Gaps', description: 'Upskill internally, reducing dependencies on external talent hiring.' },
			{ title: 'Accelerated Team Onboarding', description: 'Equip engineering teams with standard accessibility knowledge rapidly.' },
			{ title: 'Direct Application to Projects', description: 'Students build working prototypes during labs that can be deployed immediately.' }
		],
		metrics: [
			{ value: '5k+', label: 'Employees Trained' },
			{ value: '94%', label: 'Positive Bootcamp Feedback' },
			{ value: '40+', label: 'Enterprise Partners Serviced' }
		],
		tools: ['Interactive Live coding IDEs', 'Moodle LMS Portals', 'Accessibility Verification Checklists', 'Microsoft Sandbox Environments'],
		faqs: [
			{ question: 'Are bootcamps conducted online or in person?', answer: 'We offer hybrid learning delivery, including live-facilitated online sessions, self-paced LMS tasks, and interactive on-site hackathons.' },
			{ question: 'Do you provide graduation certificates?', answer: 'Yes. Students receive course completion certificates, and project evaluation reports are shared with corporate HR managers.' }
		]
	},
	'edu-training': {
		id: 'edu-training',
		title: 'Educational Institution Training',
		category: 'Capacity Building & Adoption',
		description: 'Industry-ready software skill training for students.',
		longDescription: 'Bridge the gap between academic theory and software industry demands. We partner with colleges and institutes to train students in UI development, automated software testing, and modern application development.',
		accentColor: '#002FFF',
		image: 'edu-training',
		features: [
			{ title: 'Frontend Basics & Frameworks', description: 'Master semantic HTML, CSS, JavaScript, and React framework patterns.' },
			{ title: 'Software Testing Principles', description: 'Practical labs covering manual bug tracking and test script writing.' },
			{ title: 'Portfolio Project Labs', description: 'Mentor students as they build and deploy web applications to production.' },
			{ title: 'Placement Mentorship', description: 'Conduct mock interviews, review resumes, and run coding challenges.' }
		],
		process: [
			{ step: '01', title: 'Syllabus Alignment', description: 'Integrate skill courses alongside existing college curriculum schedules.' },
			{ step: '02', title: 'Hands-on Lectures', description: 'Deliver live concept explanations followed by structured lab assignments.' },
			{ step: '03', title: 'Capstone Mentorship', description: 'Guide student groups in building real-world functional applications.' },
			{ step: '04', title: 'Mock Assessments', description: 'Run technical evaluations to benchmark candidates for employer hires.' }
		],
		benefits: [
			{ title: 'Higher Student Placements', description: 'Equip graduates with technical skills that employers actively seek.' },
			{ title: 'Practical Coding Focus', description: 'Shift focus from rote memorization to deploying actual operational code.' },
			{ title: 'Industry Collaboration', description: 'Expose academic campuses to modern developer practices and tools.' }
		],
		metrics: [
			{ value: '12+', label: 'Colleges Partnered' },
			{ value: '85%', label: 'Graduate Hire Conversion Rate' },
			{ value: '3k+', label: 'Students Upskilled' }
		],
		tools: ['VS Code coding environment', 'Git & GitHub Workflows', 'Playwright Automation Core', 'Interactive Steppers'],
		faqs: [
			{ question: 'What branches of students are eligible for this program?', answer: 'While computer science and IT students are typical, we also run successful technology upskilling batches for science and commerce graduates with basic logical reasoning.' },
			{ question: 'Are these courses certified by university boards?', answer: 'We deliver industry-endorsed certifications that colleges integrate as elective credits or professional skill bootcamps.' }
		]
	},
	'ngo-capacity': {
		id: 'ngo-capacity',
		title: 'NGO Capacity Building',
		category: 'Capacity Building & Adoption',
		description: 'Upskilling NGO staff on digital collaboration tools.',
		longDescription: 'Enable non-profit teams to operate digitally. We train NGO coordinators on utilizing task management boards, cloud document management, and generating data reports to improve program efficiency.',
		accentColor: '#10B981',
		image: 'ngo-capacity',
		features: [
			{ title: 'Cloud Collaboration Tools', description: 'Master document collaboration in Google Workspace and Microsoft 365.' },
			{ title: 'Task Management Practices', description: 'Learn to track program timelines and tasks using visual Kanban boards.' },
			{ title: 'Basic Data Reporting', description: 'Analyze student enrollment and feedback data in Excel and Google Sheets.' },
			{ title: 'Digital Outreach Tools', description: 'Operate simple digital newsletter layouts and communication tools.' }
		],
		process: [
			{ step: '01', title: 'Needs Assessment', description: 'Understand current team workflows and digital tool gaps.' },
			{ step: '02', title: 'Customized Training Plan', description: 'Draft basic, jargon-free lessons tailored to team capacities.' },
			{ step: '03', title: 'Interactive Sessions', description: 'Deliver hands-on workshops with step-by-step guidance.' },
			{ step: '04', title: 'Ongoing Support', description: 'Provide reference guides and conduct follow-up review clinics.' }
		],
		benefits: [
			{ title: 'Empowered Operations Staff', description: 'Staff manage database files and reports confidently without errors.' },
			{ title: 'Smooth Task Handovers', description: 'Team timelines are documented, avoiding coordination issues.' },
			{ title: 'Effective Remote Work', description: 'NGO members collaborate securely from any training center or field site.' }
		],
		metrics: [
			{ value: '30+', label: 'NGO Teams Empowered' },
			{ value: '500+', label: 'Staff Members Onboarded' },
			{ value: '100%', label: 'Adoption Rate achieved' }
		],
		tools: ['Google Workspace Core', 'Microsoft Teams & SharePoint', 'Slack / Trello', 'Basic Spreadsheets (Excel)'],
		faqs: [
			{ question: 'Do you offer localized training languages?', answer: 'Yes. We deliver training in English, Kannada, Tamil, and Hindi to ensure field coordinators learn comfortably.' },
			{ question: 'Do we receive documentation guides?', answer: 'Yes. We compile simple visual guides, video micro-lessons, and quick reference cards for teams to review.' }
		]
	},
	'disability-awareness': {
		id: 'disability-awareness',
		title: 'Disability Awareness Orientation (DAO)',
		category: 'Capacity Building & Adoption',
		description: 'Inclusive workplace sensitization programs for corporates.',
		longDescription: 'Build a culture of empathy, understanding, and inclusion. Our Disability Awareness Orientation (DAO) sensitizes your workforce on engaging with persons with disabilities (PwDs) and maintaining an inclusive workplace.',
		accentColor: '#ea580c',
		image: 'disability-awareness',
		features: [
			{ title: 'PwD Etiquette training', description: 'Learn respectful communication terms and behavior guidelines for engaging with PwDs.' },
			{ title: 'Inclusion Best Practices', description: 'Identify physical and digital accessibility barriers in office workspaces.' },
			{ title: 'Simulated Experiences', description: 'Build empathy through interactive, structured exercises.' },
			{ title: 'Sensitization Workshops', description: 'Run Q&A panels led by experienced PwD inclusion advocates.' }
		],
		process: [
			{ step: '01', title: 'Workplace Culture Audit', description: 'Analyze current PwD representation and sensitization levels.' },
			{ step: '02', title: 'Syllabus Development', description: 'Tailor session examples to specific team roles (HR, Managers, Peers).' },
			{ step: '03', title: 'Delivery', description: 'Conduct interactive orientations with group discussions and stories.' },
			{ step: '04', title: 'Feedback & Framework', description: 'Provide post-training resource kits and HR guide recommendations.' }
		],
		benefits: [
			{ title: 'Foster Inclusive Culture', description: 'Reduce workplace awkwardness and build collaboration with PwD hires.' },
			{ title: 'Support HR Retentions', description: 'Equipped managers support and retain diverse hires, lowering turnover.' },
			{ title: 'Align Corporate DEI', description: 'Fulfill corporate diversity mandates with practical sensitization training.' }
		],
		metrics: [
			{ value: '100+', label: 'DAO Sessions Run' },
			{ value: '8k+', label: 'Corporate Peers Sensitized' },
			{ value: '96%', label: 'Empathy Rating Score' }
		],
		tools: ['Sensitization Story Cards', 'Inclusive Language Glossaries', 'Assistive Technology Showcases', 'Deaf Culture Guides'],
		faqs: [
			{ question: 'Why is peer sensitization necessary before PwD placement?', answer: 'Peer sensitization addresses common misconceptions, highlights communication protocols (like interacting with Deaf peers), and builds a supportive office environment, which directly increases retention rates.' },
			{ question: 'Is DAO suitable for leadership teams?', answer: 'Yes. We deliver targeted DAO leadership briefings focusing on equal opportunity framework, accommodations, and inclusive leadership styles.' }
		]
	},
	'dei-consulting': {
		id: 'dei-consulting',
		title: 'DEI Consulting Services',
		category: 'Capacity Building & Adoption',
		description: 'Diversity, Equity & Inclusion consulting advisory for corporate partners.',
		longDescription: 'Design sustainable frameworks for hiring and retaining persons with disabilities. We assist corporate partners in reviewing job roles, identifying structural accommodations, and building inclusive onboarding pipelines.',
		accentColor: '#2563eb',
		image: 'dei-consulting',
		features: [
			{ title: 'Job Role Auditing', description: 'Analyze job profiles to identify suitability for candidates with different disabilities.' },
			{ title: 'Inclusive Hiring Frameworks', description: 'Review sourcing channels, assessment tests, and interview protocols for accessibility.' },
			{ title: 'Accommodation Planning', description: 'Guide teams on setting up screen readers, keyboards, or physical modifications.' },
			{ title: 'DEI Benchmarking', description: 'Measure and report representation progress against industry standards.' }
		],
		process: [
			{ step: '01', title: 'Discovery & Audit', description: 'Review existing hiring statistics, policy guidelines, and accessibility status.' },
			{ step: '02', title: 'DEI Strategy Design', description: 'Define placement goals, timelines, and identify target job profiles.' },
			{ step: '03', title: 'Pipeline Setup', description: 'Partner with training centers to source pre-skilled candidates.' },
			{ step: '04', title: 'Retention Auditing', description: 'Evaluate inclusion scores through post-placement employee check-ins.' }
		],
		benefits: [
			{ title: 'Sustainable PwD Hiring', description: 'Transition from ad-hoc CSR hiring to structured, skill-based placement pipelines.' },
			{ title: 'Hardened Compliance Postures', description: 'Align policies with national equal opportunity directives.' },
			{ title: 'Higher Talent Retention', description: 'Comprehensive onboarding support ensures candidates adapt and stay long-term.' }
		],
		metrics: [
			{ value: '25+', label: 'Corporate DEI Blueprints Designed' },
			{ value: '1.2k+', label: 'Successful PwD Placements Assisted' },
			{ value: '92%', label: 'Yearly Retention Pass' }
		],
		tools: ['Equal Opportunity Policies', 'Accommodations Checklists', 'PwD Interview Blueprints', 'Job Audit Templates'],
		faqs: [
			{ question: 'How do you identify suitable job roles for PwDs?', answer: 'We audit the daily task requirements of various profiles (e.g. software QA, content reviews, accounting, back-office). We assess physical and visual requirements and suggest accommodations to make the role accessible.' },
			{ question: 'Do you help draft Equal Opportunity Policies?', answer: 'Yes. We guide legal and HR teams on structuring policies that comply with national guidelines and foster an inclusive workplace.' }
		]
	},
	'ai-applications': {
		id: 'ai-applications',
		title: 'AI-Powered Applications',
		category: 'AI & Innovation',
		description: 'LLM integrations, custom chatbots, and search systems.',
		longDescription: 'Supercharge customer and staff workflows with Large Language Models. We build secure, customized AI chatbots, search systems using Retrieval-Augmented Generation (RAG), and intelligent content summaries.',
		accentColor: '#16a34a',
		image: 'ai-applications',
		features: [
			{ title: 'RAG Knowledge Bases', description: 'Connect LLMs securely to your private PDFs, wikis, and databases for instant lookup.' },
			{ title: 'Custom Conversational Bots', description: 'Deploy context-aware customer service chatbots that handle queries.' },
			{ title: 'Content Summarization', description: 'Automate summarization of client meeting transcripts, manuals, and files.' },
			{ title: 'API Integrations', description: 'Connect LLM endpoints (OpenAI, Anthropic, Gemini) with existing applications.' }
		],
		process: [
			{ step: '01', title: 'Use-case Scoping', description: 'Evaluate database structures and identify where AI can optimize search or replies.' },
			{ step: '02', title: 'Pipeline Prototyping', description: 'Configure text splitters, vector databases, and system prompts.' },
			{ step: '03', title: 'Security Tuning', description: 'Implement guardrails to prevent data leakage and hallucination errors.' },
			{ step: '04', title: 'Integration & Testing', description: 'Deploy API connectors and configure analytics interfaces.' }
		],
		benefits: [
			{ title: 'Instant Knowledge Access', description: 'Staff search through long technical manuals and receive answers in seconds.' },
			{ title: '24/7 Service Support', description: 'Resolve common customer support requests automatically without staff intervention.' },
			{ title: 'High Data Protection', description: 'Enforce local document caching and prevent private data from training public models.' }
		],
		metrics: [
			{ value: '15+', label: 'Custom LLM Applications Deployed' },
			{ value: '80%', label: 'First-level Support Answered Automatically' },
			{ value: '95%', label: 'Query Semantic Accuracy Score' }
		],
		tools: ['OpenAI APIs', 'LangChain / LlamaIndex', 'Pinecone Vector DB', 'Python / Fast API', 'React UI Connectors', 'HuggingFace models'],
		faqs: [
			{ question: 'How do you prevent AI model hallucination?', answer: 'We implement Retrieval-Augmented Generation (RAG), which grounds the LLM\'s answers strictly in verified reference documents. We also set low model temperature parameters and add prompt filters.' },
			{ question: 'Will our proprietary documents be shared with OpenAI?', answer: 'No. We configure private enterprise APIs or deploy open-source local LLMs (like Llama 3) on secure servers to ensure your data is never used to train public models.' }
		]
	},
	'agentic-ai': {
		id: 'agentic-ai',
		title: 'Agentic AI Systems',
		category: 'AI & Innovation',
		description: 'Intelligent multi-agent systems for workflow automation.',
		longDescription: 'Automate complex, multi-step workflows. We construct multi-agent AI systems where specialized agents coordinate, call APIs, check databases, and compile detailed reports autonomously.',
		accentColor: '#ea580c',
		image: 'agentic-ai',
		features: [
			{ title: 'Autonomous Multi-Agent Flows', description: 'Design networks of agents that delegate tasks and verify outcomes.' },
			{ title: 'API & Tool Integration', description: 'Equip agents with capabilities to query CRM databases and write files.' },
			{ title: 'Self-Correction Systems', description: 'Implement loops where agents analyze output errors and rewrite solutions.' },
			{ title: 'Human-in-the-loop Controls', description: 'Build approval screens where human operators approve agent actions.' }
		],
		process: [
			{ step: '01', title: 'Workflow Scoping', description: 'Break down complex manual workflows into logical tasks and decision trees.' },
			{ step: '02', title: 'Agent Prompts Design', description: 'Write agent role instructions and select tool sets (API, database).' },
			{ step: '03', title: 'Workflow Orchestration', description: 'Build state machines to coordinate variables between agent nodes.' },
			{ step: '04', title: 'Evaluation & Testing', description: 'Run test datasets to monitor cost, accuracy, and latency metrics.' }
		],
		benefits: [
			{ title: 'Automate Complex Steps', description: 'Move beyond basic automations to handle processes requiring reasoning.' },
			{ title: 'Continuous Operations', description: 'Agents process data queues autonomously, raising alerts only for review.' },
			{ title: 'High Operational Speed', description: 'Reduce processing turnaround times from days to minutes.' }
		],
		metrics: [
			{ value: '5+', label: 'Agentic Workflows Operating' },
			{ value: '85%', label: 'Operational Speedup Achieved' },
			{ value: 'Zero', label: 'Manual Errors in Routine Processing' }
		],
		tools: ['CrewAI / LangGraph', 'Python (Pydantic AI)', 'AutoGen Core', 'ChromaDB Vector Store', 'Docker Isolated sandboxes', 'FastAPI'],
		faqs: [
			{ question: 'What is a "Human-in-the-loop" control?', answer: 'It is a safeguard threshold where the AI agent pauses execution and waits for a human manager to review and approve an action (e.g. before sending a customer email or approving a transaction).' },
			{ question: 'How do agents communicate with each other?', answer: 'We build agents on state-management graph frameworks (like LangGraph). Agents communicate by updating shared variables, writing data, and sending structured JSON task requests.' }
		]
	},
	'data-engineering': {
		id: 'data-engineering',
		title: 'Data Engineering & Analytics',
		category: 'AI & Innovation',
		description: 'Data pipelines, warehousing, and ETL architectures.',
		longDescription: 'Construct robust data pipelines to unify operational data. We build secure ETL pipelines, design data warehouses, and configure analytical dashboards that update continuously.',
		accentColor: '#2563eb',
		image: 'data-engineering',
		features: [
			{ title: 'Secure ETL Pipelines', description: 'Extract data from multiple databases, transform schemas, and load records.' },
			{ title: 'Data Warehousing Setup', description: 'Design databases (Snowflake, BigQuery) optimized for analytics queries.' },
			{ title: 'Automated Data Cleansing', description: 'Configure rules to deduplicate customer files and validate formats.' },
			{ title: 'Real-Time Sync Systems', description: 'Build streaming pipelines using Kafka to update dashboards instantly.' }
		],
		process: [
			{ step: '01', title: 'Analyze Sources', description: 'Audit existing database types, tables, schemas, and update latency.' },
			{ step: '02', title: 'Pipeline Architecture', description: 'Design transformation steps and database structures.' },
			{ step: '03', title: 'Code & Configure Pipelines', description: 'Write SQL transformations and schedule pipeline scripts.' },
			{ step: '04', title: 'Dashboard Connection', description: 'Connect reporting dashboards and configure data refreshes.' }
		],
		benefits: [
			{ title: 'Single Operational Source', description: 'Consolidate multiple tool database tables into a single dashboard.' },
			{ title: 'Accurate Analytics Data', description: 'Automated deduplication rules ensure statistics are reliable.' },
			{ title: 'Fast Database Queries', description: 'Optimized schemas load summary reports in seconds rather than minutes.' }
		],
		metrics: [
			{ value: '20M+', label: 'Data Records Processed Daily' },
			{ value: '99.99%', label: 'Pipeline Sync Success Rate' },
			{ value: '75%', label: 'Database Query Speed Improvements' }
		],
		tools: ['Apache Airflow', 'dbt (Data Build Tool)', 'Snowflake / BigQuery', 'PostgreSQL / MySQL', 'Python Data Science Stack', 'Apache Kafka'],
		faqs: [
			{ question: 'What is dbt?', answer: 'dbt (Data Build Tool) is a transformation tool that lets developers write SQL queries to transform raw warehouse records into structured, ready-for-dashboard reporting data tables.' },
			{ question: 'Can we build custom data pipelines for legacy tools?', answer: 'Yes, we write custom Python ETL adapters that fetch files from local folders or legacy SFTP servers, parse formatting, and load them to cloud warehouses securely.' }
		]
	},
	'doc-intelligence': {
		id: 'doc-intelligence',
		title: 'Document Intelligence',
		category: 'AI & Innovation',
		description: 'OCR, document digitization, and text classification.',
		longDescription: 'Automate data extraction from paper and digital documents. We utilize AI-powered Optical Character Recognition (OCR) and text classifiers to extract structured fields from invoices, forms, and receipts.',
		accentColor: '#7c3aed',
		image: 'doc-intelligence',
		features: [
			{ title: 'AI-Powered OCR Scans', description: 'Extract accurate text characters from low-contrast scans and mobile photos.' },
			{ title: 'Field-Level Parsing', description: 'Identify and extract specific key-value pairs (like date, amount, vendor name).' },
			{ title: 'Automated Document Routing', description: 'Classify documents automatically and route them to relevant team folders.' },
			{ title: 'Structured Excel Exports', description: 'Export extracted field records directly into formatted Excel sheets.' }
		],
		process: [
			{ step: '01', title: 'Document Analysis', description: 'Collect sample forms and invoices to identify target fields for extraction.' },
			{ step: '02', title: 'Model Training', description: 'Train and configure OCR engines on regional fonts and layouts.' },
			{ step: '03', title: 'Integration Build', description: 'Develop drag-and-drop web interfaces and link with folder locations.' },
			{ step: '04', title: 'QA & Optimization', description: 'Monitor extraction accuracy and tune prompts to handle scan issues.' }
		],
		benefits: [
			{ title: 'Reduce Data Entry', description: 'Save hours spent keying in invoice lines into database systems.' },
			{ title: 'High Extraction Accuracy', description: 'AI processing achieves over 95% accuracy on typical layouts.' },
			{ title: 'Filing Compliance', description: 'Digitize physical paperwork, making documents searchable and archive-ready.' }
		],
		metrics: [
			{ value: '100k+', label: 'Invoices Scanned' },
			{ value: '95%', label: 'Automated Extraction Accuracy' },
			{ value: '15s', label: 'Average Processing Time Per Doc' }
		],
		tools: ['Tesseract OCR', 'AWS Textract', 'Google Document AI', 'OpenCV image processing', 'Regex Parsing Core', 'Python Data models'],
		faqs: [
			{ question: 'How does Document AI handle handwritten text?', answer: 'We utilize state-of-the-art deep learning OCR engines (like Google Document AI / AWS Textract) which are pre-trained on millions of handwriting forms, reaching over 85% accuracy on handwritten fields.' },
			{ question: 'What formats of documents do you support?', answer: 'We support PDF, PNG, JPEG, TIFF, and Microsoft Office formats for structural parsing.' }
		]
	}
};
