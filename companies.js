// Maintain the company list here. Add more cities by extending each company's cities array.
window.CAREER_COMPANIES = [
      {
        name: "Microsoft",
        tier: "Global top pay",
        category: "Cloud, AI, Enterprise",
        cities: ["Hyderabad"],
        link: "https://jobs.careers.microsoft.com/global/en/search?lc=Hyderabad%2C%20Telangana%2C%20India&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true&q=software",
        home: "https://jobs.careers.microsoft.com/global/en/search",
        prefilled: true,
        note: "Large Hyderabad engineering center across Azure, AI, security, M365, and business applications."
      },
      {
        name: "Google",
        tier: "Global top pay",
        category: "Search, Cloud, AI",
        cities: ["Hyderabad"],
        link: "https://www.google.com/about/careers/applications/jobs/results/?location=Hyderabad%2C%20Telangana%2C%20India&q=software",
        home: "https://www.google.com/about/careers/applications/jobs/results/",
        prefilled: true,
        note: "Hyderabad roles commonly span Google Cloud, infra, data, product engineering, and site reliability."
      },
      {
        name: "Amazon / AWS",
        tier: "Global top pay",
        category: "Cloud, Marketplace, Devices",
        cities: ["Hyderabad"],
        link: "https://www.amazon.jobs/en/search?base_query=software&loc_query=Hyderabad%2C%20Telangana%2C%20India",
        home: "https://www.amazon.jobs/en/",
        prefilled: true,
        note: "Includes Amazon retail platforms, AWS, ads, payments, fulfillment, Kindle, and Alexa-adjacent teams."
      },
      {
        name: "Apple",
        tier: "Global top pay",
        category: "Consumer, Platforms",
        cities: ["Hyderabad"],
        link: "https://jobs.apple.com/en-in/search?location=hyderabad-HYD&team=software-and-services-SFTWR",
        home: "https://jobs.apple.com/en-in/search",
        prefilled: true,
        note: "Hyderabad office is a strategic Maps, operations, ML, and software services hub."
      },
      {
        name: "Meta",
        tier: "Global top pay",
        category: "Social, AI, Infra",
        cities: ["Hyderabad"],
        link: "https://www.metacareers.com/jobs?q=software&offices%5B0%5D=Hyderabad%2C%20India",
        home: "https://www.metacareers.com/jobs",
        prefilled: true,
        note: "Look for software, data, integrity, infra, and product roles with Hyderabad listed as office or location."
      },
      {
        name: "Salesforce",
        tier: "Global top pay",
        category: "SaaS, CRM, Data",
        cities: ["Hyderabad"],
        link: "https://careers.salesforce.com/en/jobs/?search=software&country=India&location=Hyderabad",
        home: "https://careers.salesforce.com/en/jobs/",
        prefilled: true,
        note: "Major Hyderabad engineering presence across core platform, Slack, MuleSoft, Tableau, Data Cloud, and AI."
      },
      {
        name: "ServiceNow",
        tier: "Global top pay",
        category: "SaaS, Workflow, AI",
        cities: ["Hyderabad"],
        link: "https://careers.servicenow.com/jobs?keywords=software&location=Hyderabad%2C%20India",
        home: "https://careers.servicenow.com/jobs",
        prefilled: true,
        note: "One of the strongest Hyderabad product engineering employers for enterprise workflow and platform roles."
      },
      {
        name: "Uber",
        tier: "Global top pay",
        category: "Marketplace, Mobility",
        cities: ["Hyderabad"],
        link: "https://www.uber.com/us/en/careers/list/?location=IND--Hyderabad&department=Engineering",
        home: "https://www.uber.com/us/en/careers/list/",
        prefilled: true,
        note: "Hyderabad tech center works on marketplace, platform, data, payments, safety, and enterprise systems."
      },
      {
        name: "Qualcomm",
        tier: "Global top pay",
        category: "Semiconductors, Systems",
        cities: ["Hyderabad"],
        link: "https://careers.qualcomm.com/careers?query=software&location=Hyderabad%2C%20India",
        home: "https://careers.qualcomm.com/careers",
        prefilled: true,
        note: "Large Hyderabad engineering base for mobile, modem, automotive, embedded, AI, and systems software."
      },
      {
        name: "NVIDIA",
        tier: "Global top pay",
        category: "AI, GPUs, Systems",
        cities: ["Hyderabad"],
        link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=software",
        home: "https://www.nvidia.com/en-in/about-nvidia/careers/",
        prefilled: false,
        note: "Search the Workday result page for Hyderabad; roles may appear under India or multi-location postings."
      },
      {
        name: "AMD",
        tier: "Global top pay",
        category: "Semiconductors, Systems",
        cities: ["Hyderabad"],
        link: "https://careers.amd.com/careers-home/jobs?keywords=software&location=Hyderabad",
        home: "https://careers.amd.com/careers-home/jobs",
        prefilled: true,
        note: "Hyderabad roles often cover graphics, firmware, platform software, validation, and performance."
      },
      {
        name: "Intel",
        tier: "Global top pay",
        category: "Semiconductors, Platforms",
        cities: ["Hyderabad"],
        link: "https://intel.wd1.myworkdayjobs.com/External?q=software",
        home: "https://jobs.intel.com/en",
        prefilled: false,
        note: "Use Hyderabad or Telangana in Workday filters; common fit for systems, firmware, compiler, and platform roles."
      },
      {
        name: "Oracle",
        tier: "Global top pay",
        category: "Cloud, Database, Enterprise",
        cities: ["Hyderabad"],
        link: "https://careers.oracle.com/jobs/#en/sites/jobsearch/requisitions?keyword=software&location=India",
        home: "https://careers.oracle.com/jobs/",
        prefilled: true,
        note: "Hyderabad has large Oracle Cloud, database, applications, security, and enterprise engineering teams."
      },
      {
        name: "Adobe",
        tier: "Global top pay",
        category: "Creative, Document, Cloud",
        cities: ["Hyderabad"],
        link: "https://careers.adobe.com/us/en/search-results?keywords=software&location=Hyderabad%2C%20India",
        home: "https://careers.adobe.com/us/en/search-results",
        prefilled: true,
        note: "Use this as a Hyderabad-filtered search; some roles may also show Noida, Bengaluru, or remote India."
      },
      {
        name: "SAP",
        tier: "Global top pay",
        category: "Enterprise, Cloud, Data",
        cities: ["Hyderabad"],
        link: "https://jobs.sap.com/search/?q=software&locationsearch=Hyderabad",
        home: "https://jobs.sap.com/",
        prefilled: true,
        note: "Hyderabad roles can include cloud platform, ERP, analytics, integration, and enterprise application engineering."
      },
      {
        name: "Workday",
        tier: "Global top pay",
        category: "SaaS, Enterprise",
        cities: ["Hyderabad"],
        link: "https://workday.wd5.myworkdayjobs.com/Workday?q=software",
        home: "https://www.workday.com/en-us/company/careers.html",
        prefilled: false,
        note: "Search Hyderabad inside Workday; product roles may include platform, HCM, finance, data, and security."
      },
      {
        name: "Micron",
        tier: "Global top pay",
        category: "Semiconductors, Storage",
        cities: ["Hyderabad"],
        link: "https://micron.eightfold.ai/careers?query=software&location=Hyderabad%2C%20India",
        home: "https://www.micron.com/about/careers",
        prefilled: true,
        note: "Hyderabad engineering center has software, firmware, data, validation, automation, and systems roles."
      },
      {
        name: "Broadcom / VMware",
        tier: "Global top pay",
        category: "Cloud, Infra, Virtualization",
        cities: ["Hyderabad"],
        link: "https://broadcom.wd1.myworkdayjobs.com/External_Career?q=software",
        home: "https://www.broadcom.com/company/careers",
        prefilled: false,
        note: "Search Hyderabad in Broadcom Workday; includes VMware-originated cloud, infra, networking, and security roles."
      },
      {
        name: "PayPal",
        tier: "Global top pay",
        category: "Fintech, Payments",
        cities: ["Hyderabad"],
        link: "https://paypal.eightfold.ai/careers?query=software&location=Hyderabad%2C%20India",
        home: "https://www.paypal.com/us/brc/careers",
        prefilled: true,
        note: "Hyderabad product engineering roles can include payments, risk, data platforms, and merchant systems."
      },
      {
        name: "Palo Alto Networks",
        tier: "Global top pay",
        category: "Security, Cloud",
        cities: ["Hyderabad"],
        link: "https://jobs.lever.co/paloaltonetworks?location=Hyderabad%2C%20India",
        home: "https://www.paloaltonetworks.com/company/careers",
        prefilled: true,
        note: "Security product roles may span cloud security, network security, threat intelligence, and platform engineering."
      },
      {
        name: "Zscaler",
        tier: "Global top pay",
        category: "Security, Cloud",
        cities: ["Hyderabad"],
        link: "https://zscaler.wd1.myworkdayjobs.com/ZscalerCareers?q=software",
        home: "https://www.zscaler.com/careers/search-jobs",
        prefilled: false,
        note: "Filter by Hyderabad in Workday; relevant for cloud security, distributed systems, networking, and SRE."
      },
      {
        name: "F5",
        tier: "Strong product pay",
        category: "Networking, Security",
        cities: ["Hyderabad"],
        link: "https://ffive.wd5.myworkdayjobs.com/f5jobs?q=software",
        home: "https://www.f5.com/company/careers",
        prefilled: false,
        note: "Hyderabad roles often fit network security, distributed systems, platform engineering, and product operations."
      },
      {
        name: "Walmart Global Tech",
        tier: "Strong product pay",
        category: "Retail Tech, Platforms",
        cities: ["Hyderabad"],
        link: "https://walmart.wd5.myworkdayjobs.com/WalmartExternal?q=software%20Hyderabad",
        home: "https://tech.walmart.com/content/walmart-global-tech/en_us/careers.html",
        prefilled: true,
        note: "Product and platform engineering for commerce, supply chain, data, payments, search, and ads."
      },
      {
        name: "Electronic Arts",
        tier: "Strong product pay",
        category: "Gaming, Platforms",
        cities: ["Hyderabad"],
        link: "https://ea.gr8people.com/jobs?keyword=software&location=Hyderabad",
        home: "https://www.ea.com/careers",
        prefilled: true,
        note: "Hyderabad has game services, platform, data, live operations, and engineering roles."
      },
      {
        name: "Synopsys",
        tier: "Strong product pay",
        category: "EDA, Semiconductors",
        cities: ["Hyderabad"],
        link: "https://careers.synopsys.com/search-jobs/Hyderabad%2C%20India/44408/4/1269750-1254788-1269843-1269843/17x37528/78x47444/50/2",
        home: "https://careers.synopsys.com/",
        prefilled: true,
        note: "High-value product engineering for EDA tools, silicon design, verification, security, and systems software."
      },
      {
        name: "Cadence",
        tier: "Strong product pay",
        category: "EDA, Semiconductors",
        cities: ["Hyderabad"],
        link: "https://cadence.wd1.myworkdayjobs.com/External_Careers?q=software",
        home: "https://www.cadence.com/en_US/home/company/careers.html",
        prefilled: false,
        note: "Search Hyderabad in Workday; relevant for EDA, verification, embedded, and platform software roles."
      },
      {
        name: "Siemens EDA",
        tier: "Strong product pay",
        category: "EDA, Industrial Software",
        cities: ["Hyderabad"],
        link: "https://jobs.siemens.com/careers?query=software&location=Hyderabad%2C%20Telangana%2C%20India",
        home: "https://jobs.siemens.com/careers",
        prefilled: true,
        note: "Product roles in EDA, industrial software, PLM, simulation, and developer tools."
      },
      {
        name: "Informatica",
        tier: "Strong product pay",
        category: "Data, Cloud",
        cities: ["Hyderabad"],
        link: "https://informatica.wd1.myworkdayjobs.com/External_Careers?q=software",
        home: "https://www.informatica.com/about-us/careers.html",
        prefilled: false,
        note: "Filter Hyderabad in Workday; strong fit for cloud data management, metadata, governance, and platform roles."
      },
      {
        name: "Teradata",
        tier: "Strong product pay",
        category: "Data, Analytics",
        cities: ["Hyderabad"],
        link: "https://careers.teradata.com/search-jobs?acm=ALL&alrpm=ALL&ascf=%5B%7B%22key%22%3A%22job_location%22%2C%22value%22%3A%22Hyderabad%2C%20India%22%7D%5D",
        home: "https://careers.teradata.com/",
        prefilled: true,
        note: "Hyderabad roles can include database, analytics, cloud platform, performance, and reliability engineering."
      },
      {
        name: "Blue Yonder",
        tier: "Strong product pay",
        category: "Supply Chain SaaS",
        cities: ["Hyderabad"],
        link: "https://jda.wd5.myworkdayjobs.com/JDA_Careers?q=software",
        home: "https://blueyonder.com/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; product roles cover planning, fulfillment, retail, supply chain, and SaaS platforms."
      },
      {
        name: "Pegasystems",
        tier: "Strong product pay",
        category: "SaaS, Workflow, CRM",
        cities: ["Hyderabad"],
        link: "https://pegasystems.wd5.myworkdayjobs.com/External_Careers?q=software",
        home: "https://www.pega.com/about/careers",
        prefilled: false,
        note: "Hyderabad product engineering across low-code, CRM, process automation, AI, and enterprise platform teams."
      },
      {
        name: "OpenText",
        tier: "Strong product pay",
        category: "Enterprise, Content, Security",
        cities: ["Hyderabad"],
        link: "https://careers.opentext.com/search/?q=software&locationsearch=Hyderabad",
        home: "https://careers.opentext.com/",
        prefilled: true,
        note: "Hyderabad roles span content cloud, cybersecurity, dev tools, enterprise software, and cloud operations."
      },
      {
        name: "Infor",
        tier: "Strong product pay",
        category: "Enterprise SaaS, ERP",
        cities: ["Hyderabad"],
        link: "https://careers.infor.com/en_US/careers/SearchJobs/?3_35_3=Hyderabad&keyword=software",
        home: "https://careers.infor.com/",
        prefilled: true,
        note: "Product engineering for ERP, supply chain, industry cloud, analytics, and enterprise platforms."
      },
      {
        name: "Model N",
        tier: "Strong product pay",
        category: "Revenue SaaS",
        cities: ["Hyderabad"],
        link: "https://www.modeln.com/company/careers/?location=hyderabad",
        home: "https://www.modeln.com/company/careers/",
        prefilled: true,
        note: "Hyderabad engineering for revenue management products in life sciences and high tech."
      },
      {
        name: "FactSet",
        tier: "Strong product pay",
        category: "Fintech, Data",
        cities: ["Hyderabad"],
        link: "https://factset.wd1.myworkdayjobs.com/FactSetCareers?q=software",
        home: "https://www.factset.com/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; engineering roles cover financial data, analytics, platforms, and workflow products."
      },
      {
        name: "Thomson Reuters",
        tier: "Strong product pay",
        category: "Legal, Tax, Data",
        cities: ["Hyderabad"],
        link: "https://thomsonreuters.wd5.myworkdayjobs.com/External_Career_Site?q=software",
        home: "https://www.thomsonreuters.com/en/careers.html",
        prefilled: false,
        note: "Hyderabad roles can include AI, legal tech, tax products, data platforms, and enterprise software."
      },
      {
        name: "S&P Global",
        tier: "Strong product pay",
        category: "Fintech, Data",
        cities: ["Hyderabad"],
        link: "https://spglobal.wd5.myworkdayjobs.com/SPGI_Careers?q=software%20Hyderabad",
        home: "https://www.spglobal.com/en/careers",
        prefilled: true,
        note: "Product and platform roles around market intelligence, ratings, data products, and analytics."
      },
      {
        name: "GE Digital / GE Vernova",
        tier: "Strong product pay",
        category: "Industrial Software",
        cities: ["Hyderabad"],
        link: "https://jobs.gecareers.com/vernova/global/en/search-results?keywords=software&location=Hyderabad",
        home: "https://jobs.gecareers.com/vernova/global/en",
        prefilled: true,
        note: "Look for product engineering roles in grid, energy, industrial software, analytics, and cloud systems."
      },
      {
        name: "NCR Voyix",
        tier: "Strong product pay",
        category: "Retail, Payments, Platforms",
        cities: ["Hyderabad"],
        link: "https://ncr.wd1.myworkdayjobs.com/ext_apac?q=software",
        home: "https://www.ncrvoyix.com/company/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; roles can cover retail platforms, payments, restaurants, and banking products."
      },
      {
        name: "Icertis",
        tier: "Strong product pay",
        category: "Contract SaaS, AI",
        cities: ["Hyderabad"],
        link: "https://careers.icertis.com/jobs?location=Hyderabad&query=software",
        home: "https://careers.icertis.com/",
        prefilled: true,
        note: "Enterprise contract lifecycle product with platform, AI, SaaS, and application engineering opportunities."
      },
      {
        name: "Darwinbox",
        tier: "India SaaS pay",
        category: "HR SaaS",
        cities: ["Hyderabad"],
        link: "https://darwinbox.freshteam.com/jobs?location=Hyderabad",
        home: "https://darwinbox.com/careers",
        prefilled: true,
        note: "Hyderabad-headquartered HR SaaS product company; relevant for platform, product, mobile, and AI roles."
      },
      {
        name: "Zenoti",
        tier: "India SaaS pay",
        category: "Vertical SaaS",
        cities: ["Hyderabad"],
        link: "https://www.zenoti.com/careers/jobs?location=Hyderabad",
        home: "https://www.zenoti.com/careers",
        prefilled: true,
        note: "Hyderabad-founded SaaS product company for wellness, beauty, payments, scheduling, and customer engagement."
      },
      {
        name: "HighRadius",
        tier: "India SaaS pay",
        category: "Fintech SaaS, AI",
        cities: ["Hyderabad"],
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
        cities: ["Hyderabad"],
        link: "https://commvault.wd5.myworkdayjobs.com/Commvault?q=software",
        home: "https://www.commvault.com/careers",
        prefilled: false,
        note: "Search Hyderabad in Workday; roles often cover backup, cyber resilience, cloud storage, and SaaS platform work."
      }
    ];

