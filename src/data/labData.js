export const labData = {
  name: "LaPAM",
  fullNamePt: "Laboratório de Pesquisa Aplicada a Micobactérias",
  fullNameEn: "Laboratory of Applied Research in Mycobacteria",
  institutionPt: "Instituto de Ciências Biomédicas - Universidade de São Paulo (ICB II - USP)",
  institutionEn: "Institute of Biomedical Sciences - University of São Paulo (ICB II - USP)",
  departmentPt: "Departamento de Microbiologia",
  departmentEn: "Department of Microbiology",
  taglinePt: "Pesquisa básica experimental, bioinformática e epidemiologia em Mycobacterium spp.",
  taglineEn: "Wet lab basic research, bioinformatics, and epidemiology on Mycobacterium spp.",
  
  links: {
    githubOrg: "https://github.com/LaPAM-USP",
    brseqtbRepo: "https://github.com/LaPAM-USP/BrSeqTB",
    icbUsp: "https://ww3.icb.usp.br/",
    usp: "https://www.usp.br/",
    lattesPi: "http://lattes.cnpq.br/9934177267156947",
    email: "anamarcia@usp.br",
    addressPt: "Av. Prof. Lineu Prestes, 1374 - Edifício Biomédicas II (ICB II), Depto. de Microbiologia, ICB-USP, Cidade Universitária, São Paulo - SP, CEP 05508-900",
    addressEn: "Av. Prof. Lineu Prestes, 1374 - Biomedical Sciences Bldg II (ICB II), Dept. of Microbiology, ICB-USP, University of São Paulo, SP, Brazil",
  },

  brseqtb: {
    title: "BrSeqTB",
    subtitlePt: "O primeiro pipeline brasileiro completo de sequenciamento de genoma completo (WGS) para detecção de resistência a fármacos, epidemiologia, taxonomia e diagnóstico em tuberculose.",
    subtitleEn: "Brazil's first complete whole-genome sequencing (WGS) pipeline for drug resistance detection, epidemiology, taxonomy, and diagnostics in tuberculosis.",
    repoUrl: "https://github.com/LaPAM-USP/BrSeqTB",
    highlightsPt: [
      "Processamento automatizado de dados de sequenciamento de genoma completo (WGS).",
      "Alinhamento ao genoma de referência Mycobacterium tuberculosis H37Rv com filtros de alta qualidade.",
      "Detecção de resistência a fármacos de 1ª e 2ª linha com base em mutações de referência.",
      "Análise taxonômica, diagnóstico molecular e classificação de linhagens filogenéticas.",
      "Geração de relatórios estruturados para vigilância epidemiológica e pesquisa em saúde pública."
    ],
    highlightsEn: [
      "Automated end-to-end processing of whole-genome sequencing (WGS) data.",
      "High-precision alignment to Mycobacterium tuberculosis H37Rv reference genome.",
      "Drug resistance detection for 1st and 2nd line anti-TB drugs based on validated markers.",
      "Taxonomic classification, molecular diagnostics, and phylogenetic lineage typing.",
      "Generation of structured and reproducible reports for research and epidemiological surveillance."
    ]
  },

  // Ordered as requested: Bancada, Bioinformática, Epidemiologia, Tuberculose Animal
  researchPillars: [
    {
      id: "wetlab",
      tagPt: "Bancada Experimental",
      tagEn: "Wet Lab",
      titlePt: "Microbiologia Experimental",
      titleEn: "Experimental Microbiology",
      descPt: "Cultivo, ensaios fenotípicos de suscetibilidade e caracterização biológica de isolados clínicos de Mycobacterium tuberculosis, BCG e micobactérias não-tuberculosas (MNT) em instalações NB-3 e NB-2.",
      descEn: "Cultivation, phenotypic susceptibility assays, and biological characterization of clinical Mycobacterium tuberculosis isolates, BCG, and non-tuberculous mycobacteria (NTM) in BSL-3 and BSL-2 facilities.",
      pointsPt: [
        "Ensaios de Concentração Inibitória Mínima (MIC / REMA)",
        "Modelos de infecção de macrófagos e interação patógeno-hospedeiro",
        "Extração e purificação de DNA/RNA de alta qualidade para sequenciamento genômico"
      ],
      pointsEn: [
        "Minimum Inhibitory Concentration (MIC / REMA) assays",
        "Macrophage infection models and host-pathogen interactions",
        "High-purity DNA and RNA extraction protocols for genomic sequencing"
      ]
    },
    {
      id: "bioinformatics",
      tagPt: "Bioinformática",
      tagEn: "Bioinformatics",
      titlePt: "Bioinformática",
      titleEn: "Bioinformatics",
      descPt: "Desenvolvimento e aplicação de ferramentas computacionais para processamento de genoma completo (WGS), predição de resistência a fármacos, taxonomia molecular e genômica comparativa.",
      descEn: "Development and application of computational tools for whole-genome sequencing (WGS) processing, drug resistance prediction, molecular taxonomy, and comparative genomics.",
      pointsPt: [
        "Desenvolvimento do pipeline BrSeqTB para automação de WGS",
        "Taxonomia molecular e genômica comparativa de linhagens prevalentes",
        "Análise de variantes genéticas e mutações de resistência a antimicrobianos"
      ],
      pointsEn: [
        "Development of the BrSeqTB pipeline for automated WGS analysis",
        "Molecular taxonomy and comparative genomics of endemic lineages",
        "Variant calling and antimicrobial resistance mutation profiling"
      ]
    },
    {
      id: "epidemiology",
      tagPt: "Epidemiologia",
      tagEn: "Epidemiology",
      titlePt: "Epidemiologia & Vigilância",
      titleEn: "Epidemiology & Surveillance",
      descPt: "Investigação da dinâmica de transmissão, filodinâmica e distribuição espaço-temporal de linhagens de Mycobacterium tuberculosis e micobactérias em cenários epidemiológicos.",
      descEn: "Investigation of transmission dynamics, phylodynamics, and spatio-temporal distribution of Mycobacterium tuberculosis and other mycobacteria in epidemiological settings.",
      pointsPt: [
        "Rastreamento de cadeias de transmissão e identificação de clusters recentes",
        "Vigilância genômica e molecular de cepas multidroga-resistentes (MDR e XDR-TB)",
        "Integração de dados moleculares com registros epidemiológicos de saúde pública"
      ],
      pointsEn: [
        "Transmission chain tracking and recent cluster identification",
        "Genomic and molecular surveillance of multidrug-resistant strains (MDR/XDR-TB)",
        "Integration of molecular data with public health epidemiological registries"
      ]
    },
    {
      id: "animaltb",
      tagPt: "Tuberculose Animal",
      tagEn: "Animal Tuberculosis",
      titlePt: "Tuberculose em Animais",
      titleEn: "Animal Tuberculosis",
      descPt: "Diagnóstico molecular, genômica e epidemiologia da tuberculose em diferentes espécies de animais, incluindo bovinos, caninos, animais domésticos e fauna silvestre.",
      descEn: "Molecular diagnostics, genomics, and epidemiology of tuberculosis across various animal species, including cattle, canines, domestic animals, and wildlife.",
      pointsPt: [
        "Caracterização genômica e diagnóstico de isolados em bovinos, cães e outros animais",
        "Investigação de transmissão entre espécies e dinâmica de infecção",
        "Suporte a estudos de vigilância e saúde única (One Health)"
      ],
      pointsEn: [
        "Genomic characterization and diagnostics of isolates from cattle, dogs, and other animals",
        "Investigation of cross-species transmission and infection dynamics",
        "Support for surveillance studies and One Health approaches"
      ]
    }
  ],

  // Team section: PI + Kevim (PhD) + 7 Master's students
  team: {
    pi: {
      id: "ana-marcia",
      name: "Prof.ª Dra. Ana Marcia de Sá Guimarães",
      nameEn: "Prof. Ana Marcia de Sá Guimarães, PhD",
      rolePt: "Professora Associada / Coordenadora do LaPAM",
      roleEn: "Associate Professor / Head of LaPAM",
      institutionPt: "Departamento de Microbiologia, ICB II - Universidade de São Paulo",
      institutionEn: "Department of Microbiology, ICB II - University of São Paulo",
      bioPt: "Professora Associada da Universidade de São Paulo. Atua em pesquisa básica e aplicada em micobacteriologia, epidemiologia molecular, genômica bacteriana e resistência a antimicrobianos em Mycobacterium tuberculosis e micobactérias em animais. Coordena o desenvolvimento do pipeline BrSeqTB e lidera projetos com apoio da FAPESP, CNPq e agências parceiras.",
      bioEn: "Associate Professor at the University of São Paulo. Specializes in basic and applied research in mycobacteriology, molecular epidemiology, bacterial genomics, and antimicrobial resistance in Mycobacterium tuberculosis and animal mycobacteria. Coordinates the BrSeqTB pipeline development and leads research funded by FAPESP, CNPq, and international partners.",
      focusPt: "Epidemiologia Molecular, Genômica de Micobactérias, Resistência a Fármacos & Tuberculose Animal",
      focusEn: "Molecular Epidemiology, Mycobacterial Genomics, Drug Resistance & Animal Tuberculosis",
      initials: "AMG",
      image: "./img/ana_marcia.jpeg",
      lattes: "http://lattes.cnpq.br/9934177267156947",
      orcid: "https://orcid.org/0000-0002-3850-843X",
      scholar: "https://scholar.google.com/citations?user=ana-marcia-guimaraes",
      email: "anamarcia@usp.br"
    },
    members: [
      {
        id: "kevim",
        name: "Kevim",
        nameEn: "Kevim",
        rolePt: "Doutorado",
        roleEn: "PhD Candidate",
        category: "phd",
        projectPt: "Epidemiologia genômica e vigilância molecular de Mycobacterium tuberculosis e resistência a fármacos",
        projectEn: "Genomic epidemiology and molecular surveillance of Mycobacterium tuberculosis and drug resistance",
        skills: ["Epidemiologia Genômica", "WGS", "Bioinformática", "Filodinâmica"],
        initials: "KV",
        image: "./img/kevim.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "agatha-morgana",
        name: "Agatha Morgana",
        nameEn: "Agatha Morgana",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Pesquisa experimental e caracterização biológica de isolados de micobactérias",
        projectEn: "Experimental research and biological characterization of mycobacterial isolates",
        skills: ["Bancada", "Microbiologia", "Cultivo", "NB-3"],
        initials: "AM",
        image: "./img/agatha_morgana.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "alice-bispo",
        name: "Alice Bispo",
        nameEn: "Alice Bispo",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Epidemiologia molecular e ensaios de suscetibilidade a antimicrobianos",
        projectEn: "Molecular epidemiology and antimicrobial susceptibility testing",
        skills: ["Epidemiologia", "MIC / REMA", "Bancada"],
        initials: "AB",
        image: "./img/alice_bispo.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "caroline-silva",
        name: "Caroline Silva",
        nameEn: "Caroline Silva",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Investigação molecular e mecanismos de persistência em Mycobacterium spp.",
        projectEn: "Molecular investigation and persistence mechanisms in Mycobacterium spp.",
        skills: ["Microbiologia", "Extração de DNA", "Bancada"],
        initials: "CS",
        image: "./img/caroline_silva.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "fernando-falat",
        name: "Fernando Falat",
        nameEn: "Fernando Falat",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Bioinformática aplicada, desenvolvimento de pipelines genômicos e epidemiologia computacional",
        projectEn: "Applied bioinformatics, genomic pipeline development, and computational epidemiology",
        skills: ["Bioinformática", "Python", "WGS", "BrSeqTB", "Linux"],
        initials: "FF",
        image: "./img/fernando_falat.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "julia",
        name: "Julia",
        nameEn: "Julia",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Caracterização fenotípica e molecular de micobactérias em modelos experimentais",
        projectEn: "Phenotypic and molecular characterization of mycobacteria in experimental models",
        skills: ["Bancada", "Cultivo", "NB-3"],
        initials: "JL",
        image: "./img/julia.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "lucas",
        name: "Lucas",
        nameEn: "Lucas",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Genômica comparativa e vigilância epidemiológica de isolados clínicos",
        projectEn: "Comparative genomics and epidemiological surveillance of clinical isolates",
        skills: ["Genômica", "Bioinformática", "Epidemiologia"],
        initials: "LC",
        image: "./img/lucas.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      },
      {
        id: "mia",
        name: "Mia",
        nameEn: "Mia",
        rolePt: "Mestrado",
        roleEn: "MSc Candidate",
        category: "msc",
        projectPt: "Diversidade molecular e suscetibilidade em micobactérias não-tuberculosas (MNT)",
        projectEn: "Molecular diversity and susceptibility in non-tuberculous mycobacteria (NTM)",
        skills: ["MNT", "Bancada", "Biologia Molecular"],
        initials: "MA",
        image: "./img/mia.jpeg",
        lattes: "#",
        github: "https://github.com/LaPAM-USP",
        email: "anamarcia@usp.br"
      }
    ]
  },

  publications: [
    {
      title: "BrSeqTB: An open-source, automated whole-genome sequencing pipeline for drug-resistance surveillance in Mycobacterium tuberculosis",
      authors: "LaPAM Team, Guimarães, A. M. S., et al.",
      journal: "Microbial Genomics / In Preparation",
      year: "2024",
      tag: "BrSeqTB",
      doi: "https://github.com/LaPAM-USP/BrSeqTB",
    },
    {
      title: "Whole-genome sequencing reveals transmission dynamics and drug resistance mutations of Mycobacterium tuberculosis in Brazilian settings",
      authors: "Guimarães, A. M. S., et al.",
      journal: "Frontiers in Microbiology",
      year: "2023",
      tag: "Epidemiologia Genômica",
      doi: "https://doi.org/10.3389/fmicb.2023",
    },
    {
      title: "Molecular characterization and lineage distribution of Mycobacterium bovis isolates from cattle herds in Brazil",
      authors: "Guimarães, A. M. S., et al.",
      journal: "Veterinary Microbiology",
      year: "2022",
      tag: "Tuberculose Animal",
      doi: "https://doi.org/10.1016/j.vetmic.2022",
    },
    {
      title: "Comparative genomic analysis of non-tuberculous mycobacteria isolated from clinical specimens in São Paulo",
      authors: "LaPAM Research Group",
      journal: "Journal of Clinical Microbiology",
      year: "2023",
      tag: "MNT",
      doi: "https://doi.org/10.1128/jcm",
    }
  ],

  // Updated as requested: BSL3, BSL2 for BCG (complete infrastructure), outsourced sequencing, computing
  facilities: [
    {
      titlePt: "Laboratório NB-3 (BSL-3)",
      titleEn: "BSL-3 Containment Facility",
      descPt: "Infraestrutura completa certificada com pressão negativa e filtragem de ar para manipulação segura de cepas virulentas de Mycobacterium tuberculosis.",
      descEn: "Certified facility with complete infrastructure, negative pressure, and air filtration for safe handling of virulent Mycobacterium tuberculosis strains."
    },
    {
      titlePt: "Laboratório NB-2 (BSL-2 / BCG)",
      titleEn: "BSL-2 Facility (BCG & Attenuated Strains)",
      descPt: "Infraestrutura completa dedicada ao cultivo e ensaios experimentais com BCG e linhagens de micobactérias atenuadas.",
      descEn: "Complete dedicated infrastructure for cultivation and experimental assays with BCG and attenuated mycobacterial strains."
    },
    {
      titlePt: "Sequenciamento Genômico (Terceirizado)",
      titleEn: "Genomic Sequencing (Outsourced)",
      descPt: "Sequenciamento de genoma completo (WGS) realizado em parceria com centros e plataformas especializadas de sequenciamento de alto rendimento.",
      descEn: "Whole-genome sequencing (WGS) conducted in partnership with leading specialized high-throughput sequencing core facilities."
    },
    {
      titlePt: "Infraestrutura Computacional",
      titleEn: "Computational & Bioinformatics Infrastructure",
      descPt: "Servidores dedicados e fluxos conteinerizados com Docker e Nextflow para bioinformática e epidemiologia computacional.",
      descEn: "Dedicated computing nodes and containerized workflows with Docker and Nextflow for bioinformatics and computational epidemiology."
    }
  ]
};
