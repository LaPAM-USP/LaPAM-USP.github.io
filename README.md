# LaPAM-USP.github.io 🧬❄️

> **Laboratório de Pesquisa Aplicada a Micobactérias (LaPAM)**  
> **Departamento de Microbiologia — Instituto de Ciências Biomédicas da Universidade de São Paulo (ICB-USP)**  
> Home of **[BrSeqTB](https://github.com/LaPAM-USP/BrSeqTB)** — Brazil's first complete WGS pipeline for tuberculosis drug resistance.

---

## 🔬 Sobre o LaPAM

O **LaPAM** é dedicado à pesquisa em micobacteriologia, integrando bacteriologia experimental, bioinformática e epidemiologia. O laboratório é coordenado pela **Prof.ª Dra. Ana Marcia de Sá Guimarães**.

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

## ✏️ Como Atualizar Equipe e Publicações (sem mexer em código)

### Equipe → editor em [`/admin`](https://lapam-usp.github.io/admin/)

O site tem um editor de conteúdo ([Sveltia CMS](https://sveltiacms.app/)) em **https://lapam-usp.github.io/admin/**.

1. Quem for editar precisa de uma conta no GitHub com permissão de escrita neste repositório.
2. Crie um token no **seu** GitHub: *Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*
   - **Resource owner:** `LaPAM-USP`
   - **Repository access:** *Only select repositories* → `LaPAM-USP.github.io`
   - **Permissions → Repository → Contents:** *Read and write*
   - **Expiration:** a maior opção disponível (anote a data para renovar)
   - Se o token ficar "pending", um owner da organização aprova em *LaPAM-USP → Settings → Personal access tokens*.
   - Em `/admin`, clique em **Sign In with Token** e cole o token. Ele fica salvo apenas naquele navegador; use **Sign Out** em computadores compartilhados.
3. Edite **Equipe**: adicione membros, envie fotos (qualquer foto é convertida para WebP e redimensionada automaticamente) ou marque **Ex-membro** quando alguém sair.
4. Ao salvar, o editor faz um commit em `main` e o site é republicado em ~1–2 minutos.

Os dados ficam em [`src/content/team.json`](src/content/team.json) e as fotos em `public/img/team/`.

### Publicações → automáticas

A lista é importada do **OpenAlex** pelo ORCID da coordenadora ([0000-0002-8261-5863](https://orcid.org/0000-0002-8261-5863)) a cada deploy e toda segunda-feira (ver [`scripts/fetch-publications.mjs`](scripts/fetch-publications.mjs)). Preprints, datasets e duplicatas são descartados automaticamente.

Para destacar, ocultar, etiquetar ou adicionar manualmente uma publicação, use **Publicações** em `/admin` (arquivo [`src/content/publications-overrides.json`](src/content/publications-overrides.json)).

Para atualizar localmente: `npm run fetch:pubs`.

---

## ❄️ Módulo Freezer -80°C

O botão e seção **Freezer -80°C** já possuem um console interativo integrado e apontam para o futuro repositório da ferramenta:
`https://github.com/LaPAM-USP/Freezer-80`

---

## 📜 Licença

Distribuído sob a licença MIT / Open Science. Desenvolvido para o **LaPAM-USP**.
