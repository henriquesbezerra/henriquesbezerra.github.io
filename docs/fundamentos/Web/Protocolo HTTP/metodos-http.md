---
sidebar_position: 4
title: Métodos HTTP
---

Os métodos HTTP são as ações que um cliente pode solicitar a um servidor na web. Eles definem a intenção da requisição e orientam o servidor sobre como processá-la. Quando um navegador ou uma aplicação faz uma requisição HTTP, ele precisa especificar um desses métodos para indicar se deseja recuperar, enviar, modificar ou excluir um recurso.

Cada método tem uma semântica específica e afeta o estado do servidor de maneiras diferentes. Além disso, alguns métodos são idempotentes (podem ser repetidos sem mudar o resultado final), enquanto outros não são.

## Como os métodos HTTP são usados?
1. O cliente faz uma requisição – Quando acessamos um site, enviamos dados via formulários ou interagimos com uma API, o navegador ou a aplicação cliente realiza uma requisição HTTP contendo um método apropriado.
2. O servidor processa e responde – Com base no método recebido, o servidor executa a ação correspondente no recurso solicitado e retorna uma resposta apropriada.
3. A resposta contém dados e metadados – O servidor pode retornar não apenas o conteúdo do recurso (como um HTML ou JSON), mas também cabeçalhos informando sobre permissões, status da requisição, cookies e outras informações relevantes.

Os métodos HTTP são essenciais para o funcionamento de APIs REST, que utilizam esses verbos para definir operações sobre recursos, tornando a comunicação entre cliente e servidor clara e previsível.

## Conheça cada método

Os **métodos HTTP** definem as ações que um cliente pode solicitar a um servidor na web. Eles indicam se um recurso deve ser recuperado, criado, atualizado ou excluído. Cada método possui uma função específica e impacta o estado do servidor de maneiras diferentes.

### **GET**
- **Função:** Solicita a recuperação de um recurso sem modificá-lo.
- **Uso comum:** Carregar páginas web, buscar dados em APIs.
- **Idempotente?** Sim (Não modifica o estado do recurso no servidor).

📌 **Exemplo de requisição:**
```http
GET /usuarios HTTP/1.1
Host: api.meusistema.com
Accept: application/json
```

📌 **Exemplo de resposta:**
```json
[
  { "id": 1, "nome": "Fulano", "email": "fulano@email.com" },
  { "id": 2, "nome": "Beltrano", "email": "beltrano@email.com" }
]
```
---

### **POST**
- **Função:** Envia dados ao servidor para criar um novo recurso.
- **Uso comum:** Submissão de formulários, criação de registros em bancos de dados.
- **Idempotente?** Não.

📌 **Exemplo de requisição:**
```http
POST /users HTTP/1.1
Host: api.exemplo.com
Content-Type: application/json

{
  "nome": "João",
  "email": "joao@email.com"
}
```

📌 **Exemplo de resposta:**
```json
{
  "id": 1,
  "nome": "João",
  "email": "joao@email.com"
}
```
:::note
O servidor normalmente responde com o código 201 Created e pode incluir um cabeçalho Location apontando para a URL do novo recurso.
:::

---

### **PUT**
- **Função:** Atualizar um recurso existente ou criá-lo se não existir.
- **Uso comum:** Atualização completa de registros.
- **Idempotente?** Não.

📌 **Exemplo de requisição:**
```http
PUT /usuarios/1 HTTP/1.1
Host: api.meusistema.com
Content-Type: application/json

{
  "nome": "Fulano de Tal",
  "email": "fulano@email.com"
}
```

📌 **Exemplo de resposta:**
```json
{
  "id": 1,
  "nome": "Fulano de Tal",
  "email": "fulano@email.com"
}
```
:::note
Se o recurso não existir, alguns servidores o criam automaticamente. Outros retornam 404 Not Found.
:::

---

### **PATCH**
- **Função:** Atualiza parcialmente um recurso existente.
- **Uso comum:** Alteração de um ou mais campos sem substituir o recurso inteiro.
- **Idempotente?** Não (o resultado pode ser diferente dependendo do número de requisições).

📌 **Exemplo de requisição:**
```http
PATCH /usuarios/1 HTTP/1.1
Host: api.meusistema.com
Content-Type: application/json

{
  "email": "novoemail@email.com"
}
```

📌 **Exemplo de resposta:**
```json
{
  "id": 1,
  "nome": "Fulano de Tal",
  "email": "novoemail@email.com"
}
```
:::note
Requisições PATCH são úteis para updates incrementais, como mudança de status de pedidos.
:::

---

### **DELETE**
- **Função:** Remover um recurso do servidor.
- **Uso comum:** Exclusão de registros.
- **Idempotente?** Sim (se for chamado várias vezes, o recurso continuará excluído).

📌 **Exemplo de requisição:**
```http
DELETE /usuarios/1 HTTP/1.1
Host: api.meusistema.com
```

📌 **Exemplo de resposta:**
```http
HTTP/1.1 204 No Content

```
:::note
1. Nem sempre um DELETE precisa retornar um corpo de resposta.
2. O servidor pode responder com 204 No Content se a exclusão foi bem-sucedida.
:::

---

### **HEAD**
- **Função:** Obter apenas os cabeçalhos de uma resposta, sem o corpo.
- **Uso comum:** Verificação rápida de existência ou metadados de um recurso.
- **Idempotente?** Sim e seguro

📌 **Exemplo de requisição:**
```http
HEAD /usuarios HTTP/1.1
Host: api.meusistema.com
```

📌 **Exemplo de resposta:**
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 512
```
:::note
HEAD pode ser usado para verificar se um arquivo foi atualizado sem baixá-lo.
:::

---

### **OPTIONS**
- **Função:** Descobrir quais métodos são suportados pelo servidor para um recurso.
- **Uso comum:** 
  - Normalmente usado antes de fazer chamadas CORS (Cross-Origin Resource Sharing).
  - Pode ser usado para obter metadados da API.
- **Idempotente?** Sim.

📌 **Exemplo de requisição:**
```http
OPTIONS /usuarios HTTP/1.1
Host: api.meusistema.com
```

📌 **Exemplo de resposta:**
```http
HTTP/1.1 200 OK
Allow: GET, POST, PUT, DELETE, OPTIONS
```
:::note
O servidor retorna o cabeçalho Allow com os métodos suportados.
:::

---

### **TRACE**
- **Função:** Depuração, retornando a requisição original recebida pelo servidor.
- **Uso comum:** Diagnóstico e testes.
- **Idempotente?** Sim.

📌 **Exemplo de requisição:**
```http
TRACE /usuarios HTTP/1.1
Host: api.meusistema.com
```

📌 **Exemplo de resposta:**
```http
HTTP/1.1 200 OK

TRACE /usuarios HTTP/1.1
Host: api.meusistema.com
```
:::note
Esse método pode ser explorado para ataques Cross-Site Tracing (XST) e por isso não é recomendado.
:::

---

### **CONNECT**
- **Função:** O método CONNECT é utilizado para estabelecer um túnel de comunicação seguro entre o cliente e o servidor, normalmente para conexões TLS (antigo SSL). Ele permite que o cliente peça ao servidor intermediário (proxy) para abrir uma conexão direta com um servidor de destino, funcionando como um túnel criptografado.
- **Uso comum:**   
  - Navegadores e HTTPS: O CONNECT é usado por navegadores para acessar sites HTTPS através de proxies.
  - VPNs e Proxy Tunneling: Algumas VPNs e proxies utilizam esse método para estabelecer conexões seguras.
  - Firewalls e Restrições: Empresas podem bloquear ou restringir o CONNECT para impedir o acesso a determinados sites via proxies.
- **Idempotente?** Sim.

📌 **Exemplo de requisição:**
```http
CONNECT www.exemplo.com:443 HTTP/1.1
Host: www.exemplo.com:443
```

📌 **Exemplo de resposta:**
```http
// Indica que o proxy aceitou a solicitação e estabeleceu a conexão com o servidor de destino.
HTTP/1.1 200 Connection Established 

// (Opcional) Identifica o software do proxy que respondeu à requisição.
Proxy-Agent: MyProxy/1.0  
```
:::note
Este método é crucial para permitir a navegação segura em redes corporativas e para garantir privacidade ao acessar sites HTTPS por meio de um proxy.

1. O cliente envia uma requisição CONNECT ao proxy, especificando o servidor de destino e a porta.
2. Se o proxy permitir a conexão, ele responde com 200 Connection Established.
3. A partir desse momento, o proxy atua apenas como um intermediário, encaminhando dados criptografados entre o cliente e o servidor de destino sem interpretá-los.
:::

---

### **Resumo**
| Método   | Função                                      | Idempotente? |
|----------|---------------------------------------------|--------------|
| `GET`    | Recupera dados                             | ✅ Sim        |
| `POST`   | Cria um novo recurso                       | ❌ Não        |
| `PUT`    | Atualiza ou cria um recurso inteiro        | ✅ Sim        |
| `PATCH`  | Atualiza parte de um recurso               | ❌ Não        |
| `DELETE` | Remove um recurso                          | ✅ Sim        |
| `OPTIONS`| Retorna métodos suportados pelo servidor  | ✅ Sim        |
| `HEAD`   | Retorna cabeçalhos, sem corpo de resposta  | ✅ Sim        |
| `TRACE`  | Depuração, retorna requisição original    | ✅ Sim        |
| `CONNECT`| Estabelece um túnel seguro (TLS/SSL)      | ✅ Sim        |

