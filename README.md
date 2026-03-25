# ExpoFlix

Aplicativo mobile de filmes desenvolvido com React Native e Expo. Permite fazer login, visualizar filmes populares e gerenciar o perfil do usuário.

## Telas

- **Login** — autenticação com validação de email e senha
- **Dashboard** — listagem de filmes populares consumidos da API do TMDB
- **Perfil** — exibe dados do usuário e opção de logout

## Tecnologias

- [Expo](https://expo.dev) ~55
- [React Native](https://reactnative.dev) 0.83
- [Expo Router](https://expo.github.io/router) — navegação baseada em arquivos
- [TMDB API](https://www.themoviedb.org/documentation/api) — dados dos filmes

## Pré-requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Conta e chave de API no [TMDB](https://www.themoviedb.org/)

## Instalação

```bash
git clone https://github.com/willzao03/ExpoFlix-Part-2.git
cd ExpoFlix-Part-2
npm install
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_MOVIE_URL=https://api.themoviedb.org/3
EXPO_PUBLIC_API_KEY=sua_chave_aqui
```

## Rodando o projeto

```bash
npm start
```

Escaneie o QR code com o app [Expo Go](https://expo.dev/go) ou rode em um emulador.

## Credenciais de teste

```
Email: boanoite.punpun@gmail.com
Senha: BoanoitePunpun
```

## Estrutura

```
src/
├── app/
│   ├── index.tsx          # Tela de login
│   └── (tabs)/
│       ├── dashboard.tsx  # Listagem de filmes
│       └── perfil.tsx     # Perfil do usuário
├── components/
│   ├── inputComponent.tsx
│   └── movieCard.tsx
├── services/
│   └── movie.ts           # Integração com TMDB API
└── types/
    └── movie.type.ts
```
