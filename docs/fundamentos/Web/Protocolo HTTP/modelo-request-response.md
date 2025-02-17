---
sidebar_position: 2
title: Modelo Requisição e Resposta
---

Na internet, ao acessarmos um site por meio de uma URL, o navegador envia uma requisição para um servidor. Essa comunicação segue regras estabelecidas pelo protocolo HTTP, que define como os dados são transmitidos entre cliente e servidor. Essa requisição é chamada de **HTTP Request**.

:::info
  Um servidor é um computador ou software que fornece serviços, dados ou recursos a outros dispositivos (clientes) em uma rede.
:::

Quando o servidor recebe uma solicitação, ele a processa e envia uma resposta ao cliente, como um navegador web (por exemplo, o Chrome), essa resposta é chamada de **HTTP Response**.

<img src="/img/docs/fundamentos/web/client-server-comunication-2.png" style={{margin: "0 auto"}} />

### Exceções ao Modelo Request-Response

Embora a comunicação HTTP tradicional siga o modelo requisição-resposta, existem algumas técnicas que permitem ao servidor enviar dados ao cliente sem que ele precise fazer uma requisição a cada atualização. Alguns exemplos incluem:

- Push Notifications: O servidor pode enviar notificações para um navegador ou aplicativo sem que o cliente tenha solicitado.
- Webhooks: Aplicações podem configurar eventos para que o servidor envie dados automaticamente quando uma determinada ação ocorre.
- Server-Sent Events (SSE): Permitem que um servidor envie atualizações contínuas para o navegador por meio de uma única conexão HTTP aberta.
- WebSockets: Diferente do HTTP tradicional, o WebSocket mantém uma conexão persistente e bidirecional, permitindo comunicação em tempo real entre cliente e servidor.

Mesmo nesses casos, a conexão inicial ou a configuração da comunicação normalmente depende de uma ação do cliente.
