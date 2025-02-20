---
sidebar_position: 8
title: Analisando requisições HTTP
---

Os navegadores vêm com um painel de ferramentas para desenvolvedores que ajuda bastante na hora de testar e entender o que está acontecendo com as requisições HTTP. Esse painel muda um pouco de nome dependendo do navegador, mas geralmente segue um caminho parecido com o do Chrome:

***Ferramentas → Desenvolvedor Web → Ferramentas do Desenvolvedor***

Dentro desse painel, a aba ***Network*** (ou Rede, em português) mostra todas as requisições HTTP feitas pela página. Dá pra ver detalhes como:

- Método HTTP usado (GET, POST, etc.)
- Códigos de status (200, 404, 500...)
- Cabeçalhos da requisição e da resposta
- Tempo de carregamento

Isso é útil pra depurar chamadas de API, verificar se os arquivos estão sendo carregados corretamente ou entender problemas de desempenho.

<img src="/img/docs/fundamentos/web/dev-console-chrome.png" style={{margin: "0 auto"}} />

Quando abrimos o painel de rede (Network) no navegador, vemos uma lista de requisições HTTP. Cada linha representa uma nova requisição feita pela página. Na primeira coluna aparece a URL do recurso solicitado, e na segunda, o método HTTP utilizado, que indica a intenção da requisição.

Por exemplo, se o método for GET, significa que queremos apenas recuperar informações, sem modificar nada no servidor.

Como entender as respostas do servidor?
Toda requisição recebe uma resposta HTTP, que inclui um código de status indicando o que aconteceu. Esses códigos são agrupados em cinco categorias:

- ***1xx*** → Informações
- ***2xx*** → Sucesso
- ***3xx*** → Redirecionamento
- ***4xx*** → Erro do Cliente
- ***5xx*** → Erro do Servidor

Para consultar códigos HTTP:

- [W3Schools](https://www.w3schools.com/tags/ref_httpmessages.asp)
- [MDN - Códigos de Status HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
- [HTTP Status Dogs](https://httpstatusdogs.com/)
- [HTTP Cat](https://http.cat/)


#### Requisições encadeadas

Quando o navegador recebe a resposta de uma requisição, ele pode disparar outras automaticamente. Exemplo: ao carregar uma página HTML, o navegador encontra referências a imagens, scripts e estilos. Como esses arquivos não estão embutidos no HTML, o navegador faz novas requisições para buscá-los.

O painel ***Network*** mostra essas requisições, indicando o tipo do conteúdo retornado, como:

- text/html → Arquivos HTML
- text/css → Arquivos CSS
- image/png, image/svg+xml → Imagens
- application/json → Dados de API

O HTTP não se limita a um único tipo de dado. Ele pode transferir tanto textos quanto arquivos binários, permitindo que qualquer tipo de informação trafegue entre cliente e servidor.