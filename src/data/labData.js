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

  mtbrx: {
    title: "MtbRx",
    subtitlePt: "Explorador genômico de Mycobacterium tuberculosis que conecta dados genômicos à interpretação clínica de resistência, com base no catálogo de mutações da OMS (2023).",
    subtitleEn: "A Mycobacterium tuberculosis genomic explorer that bridges genomic data and clinical drug-resistance interpretation, built on the WHO mutation catalogue (2023).",
    appUrl: "https://mtbrx.onrender.com",
    repoUrl: "https://github.com/LaPAM-USP/mtbrx",
    doiUrl: "https://doi.org/10.5281/zenodo.21035590",
    exampleQueries: ["katG_Ser315Thr", "rpoB", "Rv0677c"],
    highlightsPt: [
      "Busca unificada por locus tag (Rv0677c), nome de gene (mmpS5) ou variante (katG_Ser315Thr).",
      "Perfis de resistência com o esquema completo do catálogo da OMS: tier, grau de confiança e efeito.",
      "Visualização genômica integrada com JBrowse 2 e trilha interativa de genes vizinhos.",
      "Calculadora de coordenadas: posição genômica, notação c. e notação p.",
      "Recuperação de sequências (CDS, proteína e regiões flanqueadoras).",
      "Navegação por fármaco e resumo do catálogo por gene e por droga."
    ],
    highlightsEn: [
      "One search box for locus tags (Rv0677c), gene names (mmpS5) or variants (katG_Ser315Thr).",
      "Resistance profiles with the full WHO catalogue schema: tier, confidence grading and effect.",
      "Embedded JBrowse 2 genome view and a clickable gene-neighbourhood track.",
      "Coordinate calculator across genomic, c. and p. notation.",
      "Sequence retrieval for CDS, protein translation and adjustable flanks.",
      "Browse by drug, plus per-gene and per-drug catalogue summaries."
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
