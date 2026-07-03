// Maintain the company list here. Add more cities by extending each company's cities array.
window.CAREER_COMPANIES = [
      {
        name: "Microsoft",
        tier: "Global top pay",
        category: "Cloud, AI, Enterprise",
        cities: ["Hyderabad", "Bangalore", "Noida"],
        link: "https://jobs.careers.microsoft.com/global/en/search?lc=Hyderabad%2C%20Telangana%2C%20India&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true&q=software",
        home: "https://jobs.careers.microsoft.com/global/en/search",
        prefilled: true,
        note: "Large Hyderabad engineering center across Azure, AI, security, M365, and business applications."
      },
      {
        name: "Google",
        tier: "Global top pay",
        category: "Search, Cloud, AI",
        cities: ["Hyderabad", "Bangalore", "Gurgaon", "Mumbai"],
        link: "https://www.google.com/about/careers/applications/jobs/results/?location=Hyderabad%2C%20Telangana%2C%20India&q=software",
        home: "https://www.google.com/about/careers/applications/jobs/results/",
        prefilled: true,
        note: "Hyderabad roles commonly span Google Cloud, infra, data, product engineering, and site reliability."
      },
      {
        name: "Amazon / AWS",
        tier: "Global top pay",
        category: "Cloud, Marketplace, Devices",
        cities: ["Hyderabad", "Bangalore", "Chennai", "Gurgaon", "Mumbai"],
        link: "https://www.amazon.jobs/en/search?base_query=software&loc_query=Hyderabad%2C%20Telangana%2C%20India",
        home: "https://www.amazon.jobs/en/",
        prefilled: true,
        note: "Includes Amazon retail platforms, AWS, ads, payments, fulfillment, Kindle, and Alexa-adjacent teams."
      },
      {
        name: "Apple",
        tier: "Global top pay",
        category: "Consumer, Platforms",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://jobs.apple.com/en-in/search?location=hyderabad-HYD&team=software-and-services-SFTWR",
        home: "https://jobs.apple.com/en-in/search",
        prefilled: true,
        note: "Hyderabad office is a strategic Maps, operations, ML, and software services hub."
      },
      {
        name: "Meta",
        tier: "Global top pay",
        category: "Social, AI, Infra",
        cities: ["Hyderabad", "Bangalore", "Gurgaon"],
        link: "https://www.metacareers.com/jobs?q=software&offices%5B0%5D=Hyderabad%2C%20India",
        home: "https://www.metacareers.com/jobs",
        prefilled: true,
        note: "Look for software, data, integrity, infra, and product roles with Hyderabad listed as office or location."
      },
      {
        name: "Salesforce",
        tier: "Global top pay",
        category: "SaaS, CRM, Data",
        cities: ["Hyderabad", "Bangalore", "Gurgaon", "Mumbai"],
        link: "https://careers.salesforce.com/en/jobs/?search=software&country=India&location=Hyderabad",
        home: "https://careers.salesforce.com/en/jobs/",
        prefilled: true,
        note: "Major Hyderabad engineering presence across core platform, Slack, MuleSoft, Tableau, Data Cloud, and AI."
      },
      {
        name: "ServiceNow",
        tier: "Global top pay",
        category: "SaaS, Workflow, AI",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://careers.servicenow.com/jobs?keywords=software&location=Hyderabad%2C%20India",
        home: "https://careers.servicenow.com/jobs",
        prefilled: true,
        note: "One of the strongest Hyderabad product engineering employers for enterprise workflow and platform roles."
      },
      {
        name: "Uber",
        tier: "Global top pay",
        category: "Marketplace, Mobility",
        cities: ["Hyderabad", "Bangalore", "Gurgaon"],
        link: "https://www.uber.com/us/en/careers/list/?location=IND--Hyderabad&department=Engineering",
        home: "https://www.uber.com/us/en/careers/list/",
        prefilled: true,
        note: "Hyderabad tech center works on marketplace, platform, data, payments, safety, and enterprise systems."
      },
      {
        name: "Qualcomm",
        tier: "Global top pay",
        category: "Semiconductors, Systems",
        cities: ["Hyderabad", "Bangalore", "Chennai", "Noida"],
        link: "https://careers.qualcomm.com/careers?query=software&location=Hyderabad%2C%20India",
        home: "https://careers.qualcomm.com/careers",
        prefilled: true,
        note: "Large Hyderabad engineering base for mobile, modem, automotive, embedded, AI, and systems software."
      },
      {
        name: "NVIDIA",
        tier: "Global top pay",
        category: "AI, GPUs, Systems",
        cities: ["Hyderabad", "Bangalore", "Gurgaon"],
        link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=software",
        home: "https://www.nvidia.com/en-in/about-nvidia/careers/",
        prefilled: false,
        note: "Search the Workday result page for Hyderabad; roles may appear under India or multi-location postings."
      },
      {
        name: "AMD",
        tier: "Global top pay",
        category: "Semiconductors, Systems",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://careers.amd.com/careers-home/jobs?keywords=software&location=Hyderabad",
        home: "https://careers.amd.com/careers-home/jobs",
        prefilled: true,
        note: "Hyderabad roles often cover graphics, firmware, platform software, validation, and performance."
      },
      {
        name: "Intel",
        tier: "Global top pay",
        category: "Semiconductors, Platforms",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://intel.wd1.myworkdayjobs.com/External?q=software",
        home: "https://jobs.intel.com/en",
        prefilled: false,
        note: "Use Hyderabad or Telangana in Workday filters; common fit for systems, firmware, compiler, and platform roles."
      },
      {
        name: "Oracle",
        tier: "Global top pay",
        category: "Cloud, Database, Enterprise",
        cities: ["Hyderabad", "Bangalore", "Chennai", "Gurgaon", "Mumbai", "Noida"],
        link: "https://careers.oracle.com/jobs/#en/sites/jobsearch/requisitions?keyword=software&location=India",
        home: "https://careers.oracle.com/jobs/",
        prefilled: true,
        note: "Hyderabad has large Oracle Cloud, database, applications, security, and enterprise engineering teams."
      },
      {
        name: "Adobe",
        tier: "Global top pay",
        category: "Creative, Document, Cloud",
        cities: ["Hyderabad", "Bangalore", "Noida"],
        link: "https://careers.adobe.com/us/en/search-results?keywords=software&location=Hyderabad%2C%20India",
        home: "https://careers.adobe.com/us/en/search-results",
        prefilled: true,
        note: "Use this as a Hyderabad-filtered search; some roles may also show Noida, Bengaluru, or remote India."
      },
      {
        name: "SAP",
        tier: "Global top pay",
        category: "Enterprise, Cloud, Data",
        cities: ["Hyderabad", "Bangalore", "Gurgaon"],
        link: "https://jobs.sap.com/search/?q=software&locationsearch=Hyderabad",
        home: "https://jobs.sap.com/",
        prefilled: true,
        note: "Hyderabad roles can include cloud platform, ERP, analytics, integration, and enterprise application engineering."
      },
      {
        name: "Workday",
        tier: "Global top pay",
        category: "SaaS, Enterprise",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://workday.wd5.myworkdayjobs.com/Workday?q=software",
        home: "https://www.workday.com/en-us/company/careers.html",
        prefilled: false,
        note: "Search Hyderabad inside Workday; product roles may include platform, HCM, finance, data, and security."
      },
      {
        name: "Micron",
        tier: "Global top pay",
        category: "Semiconductors, Storage",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://micron.eightfold.ai/careers?query=software&location=Hyderabad%2C%20India",
        home: "https://www.micron.com/about/careers",
        prefilled: true,
        note: "Hyderabad engineering center has software, firmware, data, validation, automation, and systems roles."
      },
      {
        name: "Broadcom / VMware",
        tier: "Global top pay",
        category: "Cloud, Infra, Virtualization",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://broadcom.wd1.myworkdayjobs.com/External_Career?q=software",
        home: "https://www.broadcom.com/company/careers",
        prefilled: false,
        note: "Search Hyderabad in Broadcom Workday; includes VMware-originated cloud, infra, networking, and security roles."
      },
      {
        name: "PayPal",
        tier: "Global top pay",
        category: "Fintech, Payments",
        cities: ["Hyderabad", "Bangalore", "Chennai"],
        link: "https://paypal.eightfold.ai/careers?query=software&location=Hyderabad%2C%20India",
        home: "https://www.paypal.com/us/brc/careers",
        prefilled: true,
        note: "Hyderabad product engineering roles can include payments, risk, data platforms, and merchant systems."
      },
      {
        name: "Palo Alto Networks",
        tier: "Global top pay",
        category: "Security, Cloud",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://jobs.lever.co/paloaltonetworks?location=Hyderabad%2C%20India",
        home: "https://www.paloaltonetworks.com/company/careers",
        prefilled: true,
        note: "Security product roles may span cloud security, network security, threat intelligence, and platform engineering."
      },
      {
        name: "Zscaler",
        tier: "Global top pay",
        category: "Security, Cloud",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://zscaler.wd1.myworkdayjobs.com/ZscalerCareers?q=software",
        home: "https://www.zscaler.com/careers/search-jobs",
        prefilled: false,
        note: "Filter by Hyderabad in Workday; relevant for cloud security, distributed systems, networking, and SRE."
      },
      {
        name: "F5",
        tier: "Strong product pay",
        category: "Networking, Security",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://ffive.wd5.myworkdayjobs.com/f5jobs?q=software",
        home: "https://www.f5.com/company/careers",
        prefilled: false,
        note: "Hyderabad roles often fit network security, distributed systems, platform engineering, and product operations."
      },
      {
        name: "Walmart Global Tech",
        tier: "Strong product pay",
        category: "Retail Tech, Platforms",
        cities: ["Hyderabad", "Bangalore", "Chennai", "Gurgaon"],
        link: "https://walmart.wd5.myworkdayjobs.com/WalmartExternal?q=software%20Hyderabad",
        home: "https://tech.walmart.com/content/walmart-global-tech/en_us/careers.html",
        prefilled: true,
        note: "Product and platform engineering for commerce, supply chain, data, payments, search, and ads."
      },
      {
        name: "Electronic Arts",
        tier: "Strong product pay",
        category: "Gaming, Platforms",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://ea.gr8people.com/jobs?keyword=software&location=Hyderabad",
        home: "https://www.ea.com/careers",
        prefilled: true,
        note: "Hyderabad has game services, platform, data, live operations, and engineering roles."
      },
      {
        name: "Synopsys",
        tier: "Strong product pay",
        category: "EDA, Semiconductors",
        cities: ["Hyderabad", "Bangalore", "Noida"],
        link: "https://careers.synopsys.com/search-jobs/Hyderabad%2C%20India/44408/4/1269750-1254788-1269843-1269843/17x37528/78x47444/50/2",
        home: "https://careers.synopsys.com/",
        prefilled: true,
        note: "High-value product engineering for EDA tools, silicon design, verification, security, and systems software."
      },
      {
        name: "Cadence",
        tier: "Strong product pay",
        category: "EDA, Semiconductors",
        cities: ["Hyderabad", "Bangalore", "Noida"],
        link: "https://cadence.wd1.myworkdayjobs.com/External_Careers?q=software",
        home: "https://www.cadence.com/en_US/home/company/careers.html",
        prefilled: false,
        note: "Search Hyderabad in Workday; relevant for EDA, verification, embedded, and platform software roles."
      },
      {
        name: "Siemens EDA",
        tier: "Strong product pay",
        category: "EDA, Industrial Software",
        cities: ["Hyderabad", "Bangalore", "Chennai", "Gurgaon", "Noida"],
        link: "https://jobs.siemens.com/careers?query=software&location=Hyderabad%2C%20Telangana%2C%20India",
        home: "https://jobs.siemens.com/careers",
        prefilled: true,
        note: "Product roles in EDA, industrial software, PLM, simulation, and developer tools."
      },
      {
        name: "Informatica",
        tier: "Strong product pay",
        category: "Data, Cloud",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://informatica.wd1.myworkdayjobs.com/External_Careers?q=software",
        home: "https://www.informatica.com/about-us/careers.html",
        prefilled: false,
        note: "Filter Hyderabad in Workday; strong fit for cloud data management, metadata, governance, and platform roles."
      },
      {
        name: "Teradata",
        tier: "Strong product pay",
        category: "Data, Analytics",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://careers.teradata.com/search-jobs?acm=ALL&alrpm=ALL&ascf=%5B%7B%22key%22%3A%22job_location%22%2C%22value%22%3A%22Hyderabad%2C%20India%22%7D%5D",
        home: "https://careers.teradata.com/",
        prefilled: true,
        note: "Hyderabad roles can include database, analytics, cloud platform, performance, and reliability engineering."
      },
      {
        name: "Blue Yonder",
        tier: "Strong product pay",
        category: "Supply Chain SaaS",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://jda.wd5.myworkdayjobs.com/JDA_Careers?q=software",
        home: "https://blueyonder.com/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; product roles cover planning, fulfillment, retail, supply chain, and SaaS platforms."
      },
      {
        name: "Pegasystems",
        tier: "Strong product pay",
        category: "SaaS, Workflow, CRM",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://pegasystems.wd5.myworkdayjobs.com/External_Careers?q=software",
        home: "https://www.pega.com/about/careers",
        prefilled: false,
        note: "Hyderabad product engineering across low-code, CRM, process automation, AI, and enterprise platform teams."
      },
      {
        name: "OpenText",
        tier: "Strong product pay",
        category: "Enterprise, Content, Security",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://careers.opentext.com/search/?q=software&locationsearch=Hyderabad",
        home: "https://careers.opentext.com/",
        prefilled: true,
        note: "Hyderabad roles span content cloud, cybersecurity, dev tools, enterprise software, and cloud operations."
      },
      {
        name: "Infor",
        tier: "Strong product pay",
        category: "Enterprise SaaS, ERP",
        cities: ["Hyderabad", "Bangalore", "Gurgaon", "Mumbai"],
        link: "https://careers.infor.com/en_US/careers/SearchJobs/?3_35_3=Hyderabad&keyword=software",
        home: "https://careers.infor.com/",
        prefilled: true,
        note: "Product engineering for ERP, supply chain, industry cloud, analytics, and enterprise platforms."
      },
      {
        name: "Model N",
        tier: "Strong product pay",
        category: "Revenue SaaS",
        cities: ["Hyderabad", "Bangalore", "Gurgaon"],
        link: "https://www.modeln.com/company/careers/?location=hyderabad",
        home: "https://www.modeln.com/company/careers/",
        prefilled: true,
        note: "Hyderabad engineering for revenue management products in life sciences and high tech."
      },
      {
        name: "FactSet",
        tier: "Strong product pay",
        category: "Fintech, Data",
        cities: ["Hyderabad", "Bangalore", "Chennai"],
        link: "https://factset.wd1.myworkdayjobs.com/FactSetCareers?q=software",
        home: "https://www.factset.com/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; engineering roles cover financial data, analytics, platforms, and workflow products."
      },
      {
        name: "Thomson Reuters",
        tier: "Strong product pay",
        category: "Legal, Tax, Data",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://thomsonreuters.wd5.myworkdayjobs.com/External_Career_Site?q=software",
        home: "https://www.thomsonreuters.com/en/careers.html",
        prefilled: false,
        note: "Hyderabad roles can include AI, legal tech, tax products, data platforms, and enterprise software."
      },
      {
        name: "S&P Global",
        tier: "Strong product pay",
        category: "Fintech, Data",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://spglobal.wd5.myworkdayjobs.com/SPGI_Careers?q=software%20Hyderabad",
        home: "https://www.spglobal.com/en/careers",
        prefilled: true,
        note: "Product and platform roles around market intelligence, ratings, data products, and analytics."
      },
      {
        name: "GE Digital / GE Vernova",
        tier: "Strong product pay",
        category: "Industrial Software",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://jobs.gecareers.com/vernova/global/en/search-results?keywords=software&location=Hyderabad",
        home: "https://jobs.gecareers.com/vernova/global/en",
        prefilled: true,
        note: "Look for product engineering roles in grid, energy, industrial software, analytics, and cloud systems."
      },
      {
        name: "NCR Voyix",
        tier: "Strong product pay",
        category: "Retail, Payments, Platforms",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://ncr.wd1.myworkdayjobs.com/ext_apac?q=software",
        home: "https://www.ncrvoyix.com/company/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; roles can cover retail platforms, payments, restaurants, and banking products."
      },
      {
        name: "Icertis",
        tier: "Strong product pay",
        category: "Contract SaaS, AI",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://careers.icertis.com/jobs?location=Hyderabad&query=software",
        home: "https://careers.icertis.com/",
        prefilled: true,
        note: "Enterprise contract lifecycle product with platform, AI, SaaS, and application engineering opportunities."
      },
      {
        name: "Darwinbox",
        tier: "India SaaS pay",
        category: "HR SaaS",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://darwinbox.freshteam.com/jobs?location=Hyderabad",
        home: "https://darwinbox.com/careers",
        prefilled: true,
        note: "Hyderabad-headquartered HR SaaS product company; relevant for platform, product, mobile, and AI roles."
      },
      {
        name: "Zenoti",
        tier: "India SaaS pay",
        category: "Vertical SaaS",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://www.zenoti.com/careers/jobs?location=Hyderabad",
        home: "https://www.zenoti.com/careers",
        prefilled: true,
        note: "Hyderabad-founded SaaS product company for wellness, beauty, payments, scheduling, and customer engagement."
      },
      {
        name: "HighRadius",
        tier: "India SaaS pay",
        category: "Fintech SaaS, AI",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://www.highradius.com/careers/jobs/?location=Hyderabad",
        home: "https://www.highradius.com/careers/",
        prefilled: true,
        note: "Hyderabad-origin enterprise fintech SaaS company with product, AI, data, and platform roles."
      },
      {
        name: "Keka",
        tier: "India SaaS pay",
        category: "HR SaaS",
        cities: ["Hyderabad"],
        link: "https://www.keka.com/careers?location=Hyderabad",
        home: "https://www.keka.com/careers",
        prefilled: true,
        note: "Hyderabad-based HR and payroll SaaS company; useful for product engineering and platform roles."
      },
      {
        name: "RealPage",
        tier: "India SaaS pay",
        category: "PropTech SaaS",
        cities: ["Hyderabad"],
        link: "https://recruiting2.ultipro.com/REA1005RPI/JobBoard/searchjobs?keyword=software&location=Hyderabad",
        home: "https://www.realpage.com/company/careers/",
        prefilled: true,
        note: "Product engineering for property management, fintech, analytics, resident experience, and SaaS platforms."
      },
      {
        name: "Commvault",
        tier: "Strong product pay",
        category: "Data Protection, Cloud",
        cities: ["Hyderabad", "Bangalore"],
        link: "https://commvault.wd5.myworkdayjobs.com/Commvault?q=software",
        home: "https://www.commvault.com/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; roles often cover backup, cyber resilience, cloud storage, and SaaS platform work."
      },
      {
        name: "Atlassian",
        tier: "Global top pay",
        category: "SaaS, Developer Tools, Collaboration",
        cities: ["Bangalore"],
        link: "https://www.atlassian.com/company/careers/all-jobs?search=software&location=India",
        home: "https://www.atlassian.com/company/careers",
        prefilled: true,
        note: "Major India engineering hub for Jira, Confluence, platform, cloud, developer productivity, and AI roles."
      },
      {
        name: "BrowserStack",
        tier: "Strong product pay",
        category: "Developer Tools, Cloud, Testing",
        cities: ["Mumbai", "Bangalore"],
        link: "https://www.browserstack.com/careers/jobs?query=software",
        home: "https://www.browserstack.com/careers",
        prefilled: true,
        note: "Product engineering for cloud testing infrastructure, developer tools, automation, and quality platforms."
      },
      {
        name: "Chargebee",
        tier: "Strong product pay",
        category: "Fintech SaaS, Billing, Revenue",
        cities: ["Chennai", "Bangalore"],
        link: "https://www.chargebee.com/careers/jobs/",
        home: "https://www.chargebee.com/careers/",
        prefilled: false,
        note: "Subscription billing and revenue platform roles across SaaS, payments, data, and product engineering."
      },
      {
        name: "Cisco",
        tier: "Global top pay",
        category: "Networking, Security, Cloud",
        cities: ["Bangalore", "Chennai", "Gurgaon"],
        link: "https://jobs.cisco.com/jobs/SearchJobs/software%20India",
        home: "https://jobs.cisco.com/",
        prefilled: true,
        note: "Large India engineering presence across networking, cloud, collaboration, security, and infrastructure products."
      },
      {
        name: "CRED",
        tier: "India SaaS pay",
        category: "Fintech, Consumer, Payments",
        cities: ["Bangalore"],
        link: "https://careers.cred.club/",
        home: "https://careers.cred.club/",
        prefilled: false,
        note: "Consumer fintech product roles across payments, credit, commerce, mobile, and platform engineering."
      },
      {
        name: "Databricks",
        tier: "Global top pay",
        category: "Data, AI, Cloud",
        cities: ["Bangalore"],
        link: "https://www.databricks.com/company/careers/open-positions?location=India",
        home: "https://www.databricks.com/company/careers",
        prefilled: true,
        note: "Data and AI platform roles across distributed systems, lakehouse, ML, developer experience, and cloud."
      },
      {
        name: "Dream11",
        tier: "India SaaS pay",
        category: "Gaming, Consumer, Platforms",
        cities: ["Mumbai", "Bangalore"],
        link: "https://www.dreamsports.group/careers/",
        home: "https://www.dreamsports.group/careers/",
        prefilled: false,
        note: "Consumer sports-tech roles across gaming platforms, payments, scale engineering, and data systems."
      },
      {
        name: "Expedia Group",
        tier: "Global top pay",
        category: "Travel, Marketplace, Platforms",
        cities: ["Bangalore", "Gurgaon"],
        link: "https://careers.expediagroup.com/jobs/?keyword=software&location=India",
        home: "https://careers.expediagroup.com/",
        prefilled: true,
        note: "Travel marketplace roles across search, recommendations, payments, partner platforms, and infrastructure."
      },
      {
        name: "Flipkart",
        tier: "India SaaS pay",
        category: "Ecommerce, Marketplace, Platforms",
        cities: ["Bangalore"],
        link: "https://www.flipkartcareers.com/#!/joblist?keyword=software",
        home: "https://www.flipkartcareers.com/",
        prefilled: true,
        note: "Large product engineering base across ecommerce, marketplace, logistics, ads, payments, and data platforms."
      },
      {
        name: "Freshworks",
        tier: "Strong product pay",
        category: "SaaS, CRM, Support",
        cities: ["Chennai", "Bangalore"],
        link: "https://www.freshworks.com/company/careers/jobs/?search=software",
        home: "https://www.freshworks.com/company/careers/",
        prefilled: true,
        note: "Major Chennai product company across customer support, CRM, ITSM, AI, and SaaS platform roles."
      },
      {
        name: "Groww",
        tier: "India SaaS pay",
        category: "Fintech, Investing, Consumer",
        cities: ["Bangalore"],
        link: "https://groww.in/careers",
        home: "https://groww.in/careers",
        prefilled: false,
        note: "Consumer investing product roles across trading, payments, mobile, backend, data, and platform engineering."
      },
      {
        name: "InMobi",
        tier: "India SaaS pay",
        category: "AdTech, Consumer, Data",
        cities: ["Bangalore", "Mumbai", "Delhi"],
        link: "https://www.inmobi.com/company/careers/",
        home: "https://www.inmobi.com/company/careers/",
        prefilled: false,
        note: "AdTech and consumer platform roles across data systems, mobile, marketplace, ads, and ML engineering."
      },
      {
        name: "Innovaccer",
        tier: "India SaaS pay",
        category: "HealthTech SaaS, Data, Cloud",
        cities: ["Noida", "Bangalore"],
        link: "https://innovaccer.com/careers/",
        home: "https://innovaccer.com/careers/",
        prefilled: false,
        note: "Healthcare data platform roles across cloud, analytics, interoperability, AI, and enterprise SaaS."
      },
      {
        name: "Intuit",
        tier: "Global top pay",
        category: "Fintech, SaaS, AI",
        cities: ["Bangalore"],
        link: "https://jobs.intuit.com/search-jobs/software/India/27595/1/1269750/20x5937/78x9629/25/2",
        home: "https://jobs.intuit.com/",
        prefilled: true,
        note: "High-quality product engineering roles across QuickBooks, TurboTax, fintech platforms, data, and AI."
      },
      {
        name: "Jio Platforms",
        tier: "India SaaS pay",
        category: "Telecom, Consumer, Platforms",
        cities: ["Mumbai", "Bangalore"],
        link: "https://careers.jio.com/",
        home: "https://careers.jio.com/",
        prefilled: false,
        note: "Consumer and platform engineering roles across telecom, media, commerce, cloud, data, and digital products."
      },
      {
        name: "LinkedIn",
        tier: "Global top pay",
        category: "Social, Ads, Data",
        cities: ["Bangalore"],
        link: "https://www.linkedin.com/jobs/search/?keywords=software&location=India&f_C=1337",
        home: "https://careers.linkedin.com/",
        prefilled: true,
        note: "Product engineering roles across professional graph, ads, data infrastructure, search, and enterprise products."
      },
      {
        name: "MakeMyTrip",
        tier: "India SaaS pay",
        category: "Travel, Marketplace, Consumer",
        cities: ["Bangalore", "Gurgaon"],
        link: "https://careers.makemytrip.com/jobs?search=software",
        home: "https://careers.makemytrip.com/",
        prefilled: true,
        note: "Travel marketplace product roles across search, booking, payments, recommendations, and consumer platforms."
      },
      {
        name: "Meesho",
        tier: "India SaaS pay",
        category: "Ecommerce, Marketplace, Consumer",
        cities: ["Bangalore"],
        link: "https://www.meesho.io/jobs?search=software",
        home: "https://www.meesho.io/jobs",
        prefilled: true,
        note: "Marketplace engineering roles across commerce, growth, logistics, payments, ads, and data platforms."
      },
      {
        name: "MongoDB",
        tier: "Global top pay",
        category: "Database, Cloud, Developer Tools",
        cities: ["Bangalore", "Gurgaon"],
        link: "https://www.mongodb.com/company/careers/jobs?search=software&location=India",
        home: "https://www.mongodb.com/company/careers",
        prefilled: true,
        note: "Database and cloud platform roles across distributed systems, developer experience, security, and data products."
      },
      {
        name: "Nutanix",
        tier: "Global top pay",
        category: "Cloud, Infrastructure, Enterprise",
        cities: ["Bangalore"],
        link: "https://www.nutanix.com/company/careers/opportunities?search=software&location=India",
        home: "https://www.nutanix.com/company/careers",
        prefilled: true,
        note: "Infrastructure product roles across cloud, storage, virtualization, distributed systems, and platform engineering."
      },
      {
        name: "Paytm",
        tier: "India SaaS pay",
        category: "Fintech, Payments, Consumer",
        cities: ["Noida", "Delhi", "Mumbai", "Bangalore"],
        link: "https://paytm.com/careers/",
        home: "https://paytm.com/careers/",
        prefilled: false,
        note: "Fintech product roles across payments, lending, commerce, consumer apps, and merchant platforms."
      },
      {
        name: "PhonePe",
        tier: "India SaaS pay",
        category: "Fintech, Payments, Consumer",
        cities: ["Bangalore"],
        link: "https://www.phonepe.com/careers/jobs/?query=software",
        home: "https://www.phonepe.com/careers/",
        prefilled: true,
        note: "Payments and fintech platform roles across UPI, commerce, insurance, lending, data, and mobile engineering."
      },
      {
        name: "Pine Labs",
        tier: "India SaaS pay",
        category: "Fintech, Payments, Merchant",
        cities: ["Noida", "Bangalore", "Mumbai"],
        link: "https://www.pinelabs.com/careers",
        home: "https://www.pinelabs.com/careers",
        prefilled: false,
        note: "Merchant payments product roles across POS, credit, loyalty, fintech platforms, and cloud services."
      },
      {
        name: "Policybazaar",
        tier: "India SaaS pay",
        category: "InsurTech, Fintech, Consumer",
        cities: ["Gurgaon", "Delhi"],
        link: "https://www.pbfintech.in/careers/",
        home: "https://www.pbfintech.in/careers/",
        prefilled: false,
        note: "Insurance and fintech product roles across marketplace, consumer apps, partner platforms, and data systems."
      },
      {
        name: "Postman",
        tier: "Global top pay",
        category: "Developer Tools, API, Cloud",
        cities: ["Bangalore"],
        link: "https://www.postman.com/company/careers/?query=software",
        home: "https://www.postman.com/company/careers/",
        prefilled: true,
        note: "Developer tooling roles across API collaboration, cloud platforms, runtimes, observability, and product engineering."
      },
      {
        name: "Razorpay",
        tier: "India SaaS pay",
        category: "Fintech, Payments, SaaS",
        cities: ["Bangalore", "Mumbai"],
        link: "https://razorpay.com/jobs/?search=software",
        home: "https://razorpay.com/jobs/",
        prefilled: true,
        note: "Payments and banking product roles across merchant platforms, risk, data, infrastructure, and fintech systems."
      },
      {
        name: "Rubrik",
        tier: "Global top pay",
        category: "Security, Data Protection, Cloud",
        cities: ["Bangalore"],
        link: "https://www.rubrik.com/company/careers/departments/engineering?location=India",
        home: "https://www.rubrik.com/company/careers",
        prefilled: true,
        note: "Cyber resilience product roles across backup, security, cloud, distributed systems, and data protection."
      },
      {
        name: "Snowflake",
        tier: "Global top pay",
        category: "Data, Cloud, Platforms",
        cities: ["Bangalore"],
        link: "https://careers.snowflake.com/us/en/search-results?keywords=software&location=India",
        home: "https://careers.snowflake.com/",
        prefilled: true,
        note: "Data cloud roles across distributed systems, query processing, storage, security, and platform engineering."
      },
      {
        name: "Stripe",
        tier: "Global top pay",
        category: "Fintech, Payments, Developer Tools",
        cities: ["Bangalore"],
        link: "https://stripe.com/jobs/search?query=software&location=India",
        home: "https://stripe.com/jobs",
        prefilled: true,
        note: "Payments infrastructure roles across developer tools, financial systems, risk, platforms, and global commerce."
      },
      {
        name: "Swiggy",
        tier: "India SaaS pay",
        category: "Consumer, Marketplace, Logistics",
        cities: ["Bangalore", "Gurgaon", "Delhi"],
        link: "https://careers.swiggy.com/#/jobs?keyword=software",
        home: "https://careers.swiggy.com/",
        prefilled: true,
        note: "Consumer marketplace roles across food delivery, quick commerce, logistics, payments, and data platforms."
      },
      {
        name: "Twilio",
        tier: "Global top pay",
        category: "Cloud, Communications, Developer Tools",
        cities: ["Bangalore"],
        link: "https://www.twilio.com/en-us/company/jobs?search=software&location=India",
        home: "https://www.twilio.com/en-us/company/jobs",
        prefilled: true,
        note: "Cloud communications product roles across APIs, messaging, customer engagement, data, and platform engineering."
      },
      {
        name: "Urban Company",
        tier: "India SaaS pay",
        category: "Consumer, Marketplace, Services",
        cities: ["Gurgaon", "Delhi", "Bangalore"],
        link: "https://www.urbancompany.com/careers",
        home: "https://www.urbancompany.com/careers",
        prefilled: false,
        note: "Consumer services marketplace roles across matching, logistics, partner platforms, mobile, and data products."
      },
      {
        name: "Zepto",
        tier: "India SaaS pay",
        category: "Quick Commerce, Consumer, Logistics",
        cities: ["Bangalore", "Mumbai"],
        link: "https://www.zeptonow.com/careers",
        home: "https://www.zeptonow.com/careers",
        prefilled: false,
        note: "Quick commerce roles across inventory, fulfillment, logistics, marketplace, mobile, and data platforms."
      },
      {
        name: "Zoho",
        tier: "India SaaS pay",
        category: "SaaS, CRM, Enterprise",
        cities: ["Chennai", "Bangalore"],
        link: "https://www.zoho.com/careers/job-openings.html?search=software",
        home: "https://www.zoho.com/careers/",
        prefilled: true,
        note: "Major Chennai product company across SaaS applications, CRM, collaboration, cloud, and platform engineering."
      },
      {
        name: "Zomato",
        tier: "India SaaS pay",
        category: "Consumer, Marketplace, FoodTech",
        cities: ["Gurgaon", "Delhi", "Bangalore"],
        link: "https://www.zomato.com/careers",
        home: "https://www.zomato.com/careers",
        prefilled: false,
        note: "Consumer marketplace roles across food discovery, delivery, dining, logistics, payments, and data platforms."
      }
    ];
