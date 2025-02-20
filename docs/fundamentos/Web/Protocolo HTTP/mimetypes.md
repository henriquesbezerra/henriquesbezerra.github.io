---
sidebar_position: 8
title: Mimetypes
---

# MIME Types no HTTP  

Quando fazemos uma requisição HTTP, o servidor responde com um **cabeçalho HTTP** contendo várias informações, e uma das mais importantes é o **MIME Type**.  

O **MIME Type** (Multipurpose Internet Mail Extensions) indica o tipo de conteúdo que está sendo enviado na resposta HTTP. Ele diz ao navegador (ou a outro cliente HTTP) como interpretar os dados recebidos.  

## Estrutura de um MIME Type  

O formato geral de um **MIME Type** é:  

```bash
tipo_primário/subtipo
```

- **Tipo primário**: Indica a categoria geral do conteúdo (ex: `text`, `image`, `application`, `audio`, etc.).  
- **Subtipo**: Define o formato específico do conteúdo dentro dessa categoria (ex: `html`, `png`, `json`).  

Exemplos:  
- `text/html` → Indica que o conteúdo é um arquivo HTML.  
- `image/jpeg` → Um arquivo de imagem no formato JPEG.  
- `application/json` → Um arquivo no formato JSON.  

---

## Principais categorias de MIME Types  

### Text (`text/...`)  
Usado para qualquer conteúdo textual. O navegador pode exibir diretamente esses arquivos.  

| MIME Type         | Descrição                     |
|------------------|-----------------------------|
| `text/plain`    | Texto simples, sem formatação |
| `text/html`     | Arquivo HTML                  |
| `text/css`      | Arquivo CSS                   |
| `text/csv`      | Arquivo de dados CSV (planilha) |
| `text/javascript` | Código JavaScript |

---

### Image (`image/...`)  
Usado para arquivos de imagem, indicando ao navegador como renderizá-los.  

| MIME Type        | Descrição             |
|------------------|----------------------|
| `image/png`     | Imagem PNG            |
| `image/jpeg`    | Imagem JPEG/JPG       |
| `image/gif`     | Imagem GIF            |
| `image/svg+xml` | Imagem SVG (vetorial) |

---

### Audio e Video (`audio/...`, `video/...`)  
Arquivos de mídia como sons e vídeos.  

| MIME Type        | Descrição            |
|------------------|---------------------|
| `audio/mpeg`    | Arquivo de áudio MP3  |
| `audio/ogg`     | Arquivo de áudio OGG  |
| `video/mp4`     | Arquivo de vídeo MP4  |
| `video/webm`    | Arquivo de vídeo WebM |

---

### Application (`application/...`)  
Usado para arquivos binários ou formatos estruturados específicos.  

| MIME Type          | Descrição                      |
|--------------------|--------------------------------|
| `application/json` | Arquivo JSON (API, dados)     |
| `application/xml`  | Arquivo XML                    |
| `application/pdf`  | Arquivo PDF                    |
| `application/zip`  | Arquivo compactado ZIP        |

---

## Como os MIME Types são usados no HTTP?  

O servidor define o **MIME Type** no cabeçalho HTTP da resposta, geralmente na linha:  
```bash
Content-Type: tipo/subtipo
```
Exemplo de resposta HTTP para um JSON:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 123

{"nome": "Henrique", "idade": 30}
```

Isso indica ao cliente que a resposta contém um JSON, e ele deve ser tratado como tal.  

Caso o **MIME Type** não seja definido corretamente, o navegador pode interpretar os dados de forma errada, ou até mesmo baixar arquivos que deveriam ser exibidos diretamente.  

---

## Quando um MIME Type está errado?  

1. Se um servidor retornar `text/plain` para um arquivo JSON, o navegador pode exibir o JSON como texto ao invés de interpretá-lo.  
2. Um arquivo `text/html` enviado como `application/octet-stream` será baixado ao invés de ser aberto no navegador.  
3. Se o **MIME Type** de uma imagem estiver incorreto (`image/png` ao invés de `image/jpeg`), alguns navegadores podem não exibi-la corretamente.  

---

## Considerações finais  

Os **MIME Types** são essenciais para a comunicação HTTP porque garantem que os clientes saibam como processar os arquivos recebidos. Eles fazem toda a diferença em aplicações web, APIs, servidores de mídia e até mesmo em downloads.  

Se um servidor estiver retornando o tipo de conteúdo errado, é possível forçar a correção configurando os cabeçalhos HTTP corretamente no back-end.

:::info Saiba mais
https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types
:::