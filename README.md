# Papelaria Mickey - Website Institucional

Este é o repositório do site institucional da Papelaria Mickey, um projeto construído com React, Vite e Bootstrap. O site tem como objetivo apresentar a loja, seus produtos, serviços e fortalecer a presença online da marca.

## 🚀 Visão Geral

O projeto é uma Single-Page Application (SPA) que oferece uma experiência de navegação fluida e moderna para os clientes da papelaria. Ele inclui seções informativas, um blog para engajamento e um formulário de contato funcional.

## ✨ Funcionalidades Principais

*   **Design Responsivo:** Interface adaptável para desktops, tablets e celulares, utilizando o sistema de grid e componentes do Bootstrap.
*   **Navegação Rápida:** Roteamento do lado do cliente com `react-router-dom`, permitindo a troca de páginas sem recarregar o navegador.
*   **Páginas Implementadas:**
    *   **Início:** Apresenta produtos em destaque e um banner principal.
    *   **Serviços:** Detalha os serviços oferecidos (Xerox, Encadernação, etc.).
    *   **Sobre Nós:** Conta a história e a missão da loja.
    *   **Blog:** Exibe uma lista de artigos com links para leitura.
    *   **Contato:** Formulário de contato, redes sociais e mapa de localização.
    *   **Artigo:** Página modelo para a exibição do conteúdo de um post do blog.
*   **Integrações Externas:**
    *   **Formspree:** Para o recebimento de mensagens do formulário de contato.
    *   **Google Maps:** Iframe incorporado para mostrar a localização da loja.
    *   **VLibras:** Widget de acessibilidade para tradução em Libras.

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** React, JavaScript (ES6+)
*   **Build Tool:** Vite
*   **Roteamento:** React Router DOM
*   **Estilização:** Bootstrap 5, CSS puro
*   **Linting:** ESLint

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma para facilitar a manutenção:

```
papelaria-react/
├── public/                # Assets estáticos (imagens, logos)
├── src/
│   ├── components/        # Componentes reutilizáveis (Menu, Rodape, Cards)
│   ├── pages/             # Componentes que representam as páginas (Inicio, Sobre)
│   ├── App.css            # Estilos globais
│   ├── App.jsx            # Configuração das rotas principais
│   └── main.jsx           # Ponto de entrada da aplicação React
├── .eslintrc.js           # Configuração do ESLint
├── index.html             # Template HTML principal
├── package.json           # Dependências e scripts do projeto
├── vercel.json            # Configuração de deploy para a Vercel
└── vite.config.js         # Configuração do Vite
```

## 🏁 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/seu-usuario/papelaria-react.git
    cd papelaria-react
    ```

2.  **Instale as dependências:**
    ```sh
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

4.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

## 📜 Scripts Disponíveis

*   `npm run dev`: Inicia o servidor de desenvolvimento com Hot-Reload.
*   `npm run build`: Compila o projeto para produção na pasta `dist/`.
*   `npm run lint`: Executa o ESLint para verificar a qualidade do código.
*   `npm run preview`: Inicia um servidor local para visualizar a versão de produção.

## 🌐 Deploy

O projeto contém um arquivo `vercel.json`, indicando que está configurado para deploy na plataforma Vercel. A configuração de `rewrites` garante que todas as rotas da SPA funcionem corretamente ao serem acessadas diretamente.

## 💡 Sugestões de Melhoria

O código é funcional, mas aqui estão algumas sugestões para elevá-lo a um próximo nível de qualidade e manutenibilidade:

1.  **Corrigir Roteamento no Menu:** Os links de navegação no `Menu.jsx` usam a tag `<a>` com `href`, o que causa um recarregamento completo da página. O ideal é usar o componente `<Link>` do `react-router-dom` para uma navegação fluida, característica de uma SPA. Além disso, as rotas devem ser minúsculas para corresponder à definição em `App.jsx`.

    ```diff
    --- a/c:/Users/vinicius.fsestari/Documents/GitHub/papelaria-react/src/components/Menu.jsx
    +++ b/c:/Users/vinicius.fsestari/Documents/GitHub/papelaria-react/src/components/Menu.jsx
    @@ -21,19 +21,19 @@
         <div className="collapse navbar-collapse" id="navbarNavDropdown">
           <ul className="navbar-nav">
             <li className="nav-item">
    -          <a className="nav-link" href="/Servicos">Serviços</a>
    +          <Link className="nav-link" to="/servicos">Serviços</Link>
             </li>
             <li className="nav-item">
    -          <a className="nav-link" href="/Sobre">Sobre Nós</a>
    +          <Link className="nav-link" to="/sobre">Sobre Nós</Link>
             </li>
             <li className="nav-item">
    -          <a className="nav-link" href="/Contato">Contato</a>
    +          <Link className="nav-link" to="/contato">Contato</Link>
             </li>
             <li className="nav-item">
    -          <a className="nav-link" href="/Blog">Nosso Blog</a>
    +          <Link className="nav-link" to="/blog">Nosso Blog</Link>
             </li>
           </ul>
         </div>
    ```

2.  **Abstrair Componentes de Card:** Os componentes `CardBlog.jsx`, `CardInicio.jsx` e `CardServico.jsx` repetem a mesma estrutura de card. Crie um componente genérico `Card.jsx` que receba `props` (como `imagem`, `titulo`, `texto`, `link`). Isso reduzirá a duplicação de código e centralizará a lógica de apresentação.

3.  **Centralizar Dados:** Em vez de ter o conteúdo dos cards fixo no JSX, crie um arquivo (ex: `src/data/posts.js`) com um array de objetos. Em seguida, use a função `.map()` para renderizar dinamicamente os componentes `Card`, passando os dados como `props`. Isso torna a adição ou alteração de conteúdo muito mais fácil e organizada.

4.  **Remover Fragments Desnecessários:** Em componentes como `Rodape.jsx` e `Banner.jsx`, os Fragments (`<>...</>`) que envolvem um único elemento filho são redundantes e podem ser removidos para um código mais limpo.
