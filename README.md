# RocketCoffe

RocketCoffe é uma aplicação web simples de cardápio digital para uma cafeteria, desenvolvida com HTML, CSS e JavaScript, e servida via Apache em um ambiente Docker.

## Funcionalidades
- Exibição de cardápio de brunch e bebidas.
- Mensagem de boas-vindas estilizada ao acessar a página.
- Layout responsivo e visual moderno.

## Estrutura do Projeto
```
├── compose.yml
├── src/
│   ├── index.html
│   ├── assets/
│   │   ├── reset.css
│   │   ├── style.css
│   │   └── script.js
│   └── img/
│       ├── logo.png
│       ├── preview.png
│       └── title.png
```

## Como Executar Localmente

### Pré-requisitos
- [Docker](https://www.docker.com/) instalado na máquina.

### Passos
1. Clone este repositório:
   ```sh
   git clone <url-do-repo>
   cd docker-projeto1-dio
   ```
2. Inicie o container com Docker Compose:
   ```sh
   docker compose up
   ```
3. Acesse a aplicação no navegador:
   - [http://localhost](http://localhost)

## Personalização
- Para alterar o cardápio, edite o arquivo `src/index.html`.
- Para modificar estilos, edite `src/assets/style.css`.
- Para ajustar a mensagem de boas-vindas, edite `src/assets/script.js`.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Docker
- Apache HTTP Server

## Screenshots
Adicione aqui imagens da aplicação em funcionamento (ex: `src/img/preview.png`).

## Licença
Este projeto é apenas para fins educacionais e não possui licença comercial.

---
RocketCoffe © 2025
