---
sidebar_position: 3
title: Protocolo HTTP
---

O HTTP (HyperText Transfer Protocol) é um protocolo de comunicação que define regras para a transmissão de dados entre clientes e servidores na web. Ele permite que dispositivos com diferentes configurações se comuniquem de maneira padronizada, garantindo a troca de arquivos de hipertexto, como páginas HTML, imagens e vídeos.

A comunicação HTTP segue um modelo de requisição e resposta (Request-Response): um cliente (como um navegador) solicita um recurso a um servidor, enviando um pacote de dados com cabeçalhos (headers) para uma URI (Uniform Resource Identifier), geralmente representada por uma URL. O servidor, por sua vez, processa a requisição e retorna uma resposta (Response), que pode conter os dados solicitados ou informações adicionais nos cabeçalhos.

:::note
O protocolo HTTP é especificado e documentado para implementação em ambas as partes da comunicação. Para consultar a especificação oficial, acesse: [RFC 2616](https://datatracker.ietf.org/doc/html/rfc2616).
:::

---

### Comunicação sem estado (Stateless)

Uma característica fundamental do HTTP é que ele é um protocolo stateless (sem estado). Isso significa que cada requisição é independente e não há um mecanismo nativo para lembrar informações sobre interações anteriores. O servidor não mantém um histórico de comunicação entre requisições sucessivas, o que implica que todas as informações necessárias para processar uma solicitação devem ser enviadas a cada nova requisição.

Essa característica impacta diretamente o desenvolvimento de aplicações web, exigindo estratégias para manter o contexto do usuário entre requisições.

---

### Lidando com sessões

Como o HTTP não mantém estado, os desenvolvedores precisam de mecanismos para preservar informações sobre os usuários entre requisições. Um exemplo clássico é o login em um site ou rede social: se o HTTP fosse utilizado sem complementos, a cada nova requisição ao servidor seria necessário reenviar as credenciais de acesso, o que seria inviável do ponto de vista da segurança e da usabilidade.

Para contornar essa limitação, é comum utilizar tokens de acesso e sessões:
- Sessões no servidor: Após o login, o servidor gera um identificador único para o usuário e o armazena em sua memória ou banco de dados. Esse identificador é associado a uma sessão e, em cada nova requisição, o cliente envia esse ID para que o servidor recupere as informações da sessão.
- Tokens de acesso (JWT - JSON Web Token): Em APIs modernas, o servidor pode retornar um token JWT ao cliente, que armazena esse token e o envia nas próximas requisições via cabeçalho HTTP (Authorization: Bearer \<token\>).
- Cookies: O servidor pode enviar um cookie HTTP para o navegador, contendo um identificador da sessão. Esse cookie será automaticamente incluído em requisições futuras feitas pelo cliente para o mesmo domínio.

---

### Conhecendo os Cookies

Os cookies são pequenos arquivos de texto armazenados pelo navegador e usados para manter dados entre requisições. Eles podem conter informações como preferências do usuário, carrinho de compras ou identificadores de autenticação.

Os cookies possuem algumas propriedades importantes:
- HTTP-Only: Evita que scripts JavaScript acessem os cookies, protegendo contra ataques XSS (Cross-Site Scripting).
- Secure: Os cookies marcados como Secure só são enviados quando a conexão é HTTPS, garantindo maior segurança.
- SameSite: Controla se o cookie pode ser enviado entre diferentes sites, prevenindo ataques CSRF (Cross-Site Request Forgery).

Cada navegador gerencia cookies de forma diferente, mas geralmente é possível visualizar e apagar os cookies armazenados através das configurações de privacidade.