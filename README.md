
# EVOCORP-Technical-Challenges

Repository developed to solve the technical challenge of the EVOCORP Junior Front-end Developer selection process.

## Get Started

Clone the repository, install the TypeScript dependency globally, and follow the instructions to run the challenges.

```bash
  git clone https://github.com/gerald0n/evocorp-technical-challenge.git
  cd evocorp-technical-challenge
  npm install
  npm run dev
```

## .ENVS

NEXT_PUBLIC_API_URL = 'https://api.themoviedb.org/3/'
API_KEY = #SUA KEY

## Challenge

### instructions
Desenvolva uma aplicação web simples para exibir um catálogo de filmes consumindo a API pública The Movie Database TMDb - https://www.themoviedb.org/documentation/api

### requirements:
    1. Página Inicial:
   - Exiba uma lista de filmes populares.
   - Cada item da lista deve mostrar o título do filme, a imagem da capa e a pontuação média.
   - Ao clicar em um filme, redirecione para uma página de detalhes desse filme.

    2. Página de Detalhes:
   - Exiba informações detalhadas sobre o filme selecionado, como sinopse, data de lançamento, gêneros, etc.
   - Adicione um botão de voltar à página inicial.

    3. Tecnologias Obrigatórias:
   - Utilize Next.js para a construção da aplicação.
   - Use React.js para a criação dos componentes.
   - Implemente TypeScript para tipagem.
   - Faça uso do Git para versionamento do código.
   - Consuma a API do TMDb para obter os dados dos filmes.

    4. Bônus (opcional):
   - Adicione funcionalidade de busca para encontrar filmes específicos.
   - Implemente um design responsivo para garantir uma boa experiência em dispositivos móveis.
   - Utilize algum estado global (por exemplo, Context API ou Redux) para gerenciar o estado da aplicação, se julgar necessário.

## comments:
- Sinta-se à vontade para utilizar bibliotecas adicionais se achar necessário.
- A simplicidade e a clareza do código serão consideradas na avaliação.
- Não é necessário implementar testes automatizados, mas será um diferencial.
