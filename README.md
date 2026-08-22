# LaPAM-USP.github.io 🧬❄️

> **Laboratório de Pesquisa Aplicada a Micobactérias (LaPAM)**  
> **Departamento de Microbiologia — Instituto de Ciências Biomédicas da Universidade de São Paulo (ICB-USP)**  
> Home of **[BrSeqTB](https://github.com/LaPAM-USP/BrSeqTB)** — Brazil's first complete WGS pipeline for tuberculosis drug resistance.

---

## 🔬 Sobre o LaPAM

O **LaPAM** é dedicado à pesquisa de ponta em micobacteriologia, integrando bancada experimental de nível de biossegurança 3 (NB-3 / BSL-3) e bioinformática genômica de alta resolução. O laboratório é coordenado pela **Prof.ª Dra. Ana Marcia de Sá Guimarães**.

---

## ⚡ Tecnologias da Página

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) com paleta moderna biotech neon/dark mode
- **Ícones**: [Lucide React](https://lucide.dev/) + SVGs customizados
- **Animações**: Partículas biomoleculares canvas interativas e transições suaves
- **Bilinguismo**: Suporte completo a Português (PT-BR) e Inglês (EN)

---

## 🚀 Como Executar Localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar a build otimizada de produção
npm run build

# 4. Pré-visualizar a build de produção
npm run preview
```

---

## 👥 Como Atualizar Fotos e Membros da Equipe

Todos os dados da equipe, PI, publicações e pipeline estão centralizados no arquivo [`src/data/labData.js`](src/data/labData.js):

1. **Fotos dos Membros**:
   - Adicione os arquivos de imagem em `public/img/team/` (ex: `ana_marcia.jpg`, `doutorando1.jpg`).
   - No arquivo `src/data/labData.js`, aponte a propriedade `image` para `./img/team/seu_arquivo.jpg`.
2. **Nomes e Projetos**:
   - Edite os campos `name`, `projectPt` / `projectEn`, `skills`, `lattes`, `email` etc.

---

## ❄️ Módulo Freezer -80°C

O botão e seção **Freezer -80°C** já possuem um console interativo integrado e apontam para o futuro repositório da ferramenta:
`https://github.com/LaPAM-USP/Freezer-80`

---

## 📜 Licença

Distribuído sob a licença MIT / Open Science. Desenvolvido para o **LaPAM-USP**.
