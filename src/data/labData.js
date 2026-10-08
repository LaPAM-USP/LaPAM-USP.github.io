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

  // Formerly "MtbRx"; the repo URL keeps the old name.
  tbatlas: {
    title: "DR-TBAtlas",
    subtitlePt: "Explorador genômico de Mycobacterium tuberculosis que conecta dados genômicos à interpretação clínica de resistência, com base no catálogo de mutações da OMS (2023).",
    subtitleEn: "A Mycobacterium tuberculosis genomic explorer that bridges genomic data and clinical drug-resistance interpretation, built on the WHO mutation catalogue (2023).",
    appUrl: "https://dr-tb-atlas.onrender.com/",
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

  // Ordered as requested: Bancada, Bioinformática, Epidemiologia, One Health
  researchPillars: [
    {
      id: "wetlab",
      tagPt: "Bancada Experimental",
      tagEn: "Wet Lab",
      titlePt: "Microbiologia Experimental",
      titleEn: "Experimental Microbiology",
      descPt: "Estudos da fisiologia, patogenicidade e resistência antimicrobiana do complexo Mycobacterium tuberculosis e de micobactérias não tuberculosas (MNT) em instalações NB-3 e NB-2.",
      descEn: "Studies of the physiology, pathogenicity, and antimicrobial resistance of the Mycobacterium tuberculosis complex and non-tuberculous mycobacteria (NTM) in BSL-3 and BSL-2 facilities.",
      pointsPt: [
        "Modelos de infecção de macrófagos e interação patógeno-hospedeiro",
        "Transcriptoma e genômica",
        "Ensaios de suscetibilidade antimicrobiana e avaliação de mecanismos de resistência e persistência",
        "Homeostase de metais em micobactérias"
      ],
      pointsEn: [
        "Macrophage infection models and host-pathogen interactions",
        "Transcriptomics and genomics",
        "Antimicrobial susceptibility assays and assessment of resistance and persistence mechanisms",
        "Metal homeostasis in mycobacteria"
      ]
    },
    {
      id: "bioinformatics",
      tagPt: "Bioinformática",
      tagEn: "Bioinformatics",
      titlePt: "Bioinformática",
      titleEn: "Bioinformatics",
      descPt: "Desenvolvimento e aplicação de ferramentas computacionais para genoma completo (WGS), como o pipeline BrSeqTB e o DR-TBAtlas, explorador genômico do catálogo de mutações da OMS, além de predição de resistência a fármacos, predição de transmissão e genômica comparativa.",
      descEn: "Development and application of computational tools for whole-genome sequencing (WGS), such as the BrSeqTB pipeline and DR-TBAtlas, a genomic explorer for the WHO mutation catalogue, along with drug resistance prediction, transmission prediction, and comparative genomics.",
      pointsPt: [
        "Desenvolvimento do pipeline BrSeqTB para automação de WGS",
        "DR-TBAtlas: interpretação clínica de mutações de resistência com base no catálogo da OMS",
        "Predição de transmissão de tuberculose a partir de genomas",
        "Taxonomia molecular e genômica comparativa de linhagens prevalentes",
        "Análise de variantes genéticas e mutações de resistência a antimicrobianos"
      ],
      pointsEn: [
        "Development of the BrSeqTB pipeline for automated WGS analysis",
        "DR-TBAtlas: clinical interpretation of resistance mutations based on the WHO catalogue",
        "Genome-based prediction of tuberculosis transmission",
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
      descPt: "Vigilância da tuberculose e de cepas resistentes, com foco em populações vulneráveis, como a população em situação de rua, e na análise de bancos de dados de notificação integrados a dados moleculares.",
      descEn: "Surveillance of tuberculosis and drug-resistant strains, focusing on vulnerable populations such as people experiencing homelessness and on the analysis of notification databases integrated with molecular data.",
      pointsPt: [
        "Epidemiologia da tuberculose na população em situação de rua",
        "Análise de bancos de dados de notificação da tuberculose",
        "Vigilância genômica e molecular de cepas multidroga-resistentes (MDR e XDR-TB)",
        "Integração de dados moleculares com registros epidemiológicos de saúde pública"
      ],
      pointsEn: [
        "Tuberculosis epidemiology among people experiencing homelessness",
        "Analysis of tuberculosis notification databases",
        "Genomic and molecular surveillance of multidrug-resistant strains (MDR/XDR-TB)",
        "Integration of molecular data with public health epidemiological registries"
      ]
    },
    {
      id: "animaltb",
      tagPt: "Saúde Única",
      tagEn: "One Health",
      titlePt: "One Health",
      titleEn: "One Health",
      descPt: "Diagnóstico molecular, genômica e epidemiologia da tuberculose em diferentes espécies de animais, incluindo bovinos e animais selvagens.",
      descEn: "Molecular diagnostics, genomics, and epidemiology of tuberculosis across animal species, including cattle and wildlife.",
      pointsPt: [
        "Caracterização genômica e diagnóstico de isolados em animais",
        "Epidemiologia da tuberculose em animais selvagens e da tuberculose zoonótica",
        "Suscetibilidade da anta (Tapirus spp.) à tuberculose",
        "Tuberculose no contexto de saúde única (One Health)"
      ],
      pointsEn: [
        "Genomic characterization and diagnostics of animal isolates",
        "Epidemiology of tuberculosis in wildlife and of zoonotic tuberculosis",
        "Susceptibility of tapirs (Tapirus spp.) to tuberculosis",
        "Tuberculosis in a One Health context"
      ]
    }
  ],

  // Official name of the BSL-3 lab, shown under the "Estrutura & Equipamentos" heading.
  nb3NamePt: "Laboratório NB-3 Prof. Dr. Klaus Eberhard Stewien",
  nb3NameEn: "Prof. Dr. Klaus Eberhard Stewien BSL-3 Laboratory",

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
