---
sidebar_position: 7
title: Endereços e Domínios
---

### Endereços e Domínios

Vimos anteriormente o protocolo HTTP e sua versão segura o HTTP**S,** já sabemos que esses protocolos aparecem no início das **URL**'s que usamos para acessar sites na internet, mas o que exatamente é uma URL?

### URL - Uniform Resource Locator

Em português: **Localizador de Recursos Universal**, como o próprio nome diz, se refere ao local, o host que você quer acessar determinado recurso, **também conhecido como domínio**. O Objetivo da URL é associar um endereço remoto com um nome de recurso na internet. 

Veremos mais a frente, mas **URL** é parte da **URI.**

Exemplo:

- www.google.com
- www.youtube.com
- www.gov.br

Acessando um desses endereços, fazemos uma requisição a um servidor que vai se encarregar de processar a solicitação.

### URN - Uniform Resource Name

Em português: **Nome de recursos universal** é o nome do recurso que será acessado e **também fará parte da URI.**

Exemplo:

- home.html
- contact.php
- services.html
- /api/v01/exemplo/users

É comum associarmos URN a página que estamos acessando.

### URI - Uniform Resource Identifier

Em português: **Identificador de Recursos Universal,** é o identificador do recurso. Pode ser uma imagem, uma pagina, etc, pois tudo o que está disponível na internet precisa de um identificador único para que não seja confundido.

Exemplos de URI

- https://www.gov.br/receitafederal/pt-br
- https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol

Olhando atentamente para a URI podemos observar que ela une o **Protocolo** (https://) a **Localização do recurso** (URL) e o nome do recurso (URN, exemplo: **/receitafederal/pt-br**) para que acessemos os conteúdos na web.

### Endereços na web

Como vimos um URI é a composição do Protocolo HTTP ou HTTPS + URL + URN, também chamaremos essa composição de endereço na web. 

Nesse momento, olharemos mais atentamente para a parte URL ou domínio como já havíamos visto, pois ele carrega consigo algumas informações importante.

Um domínio é formado por um nome e uma extensão, por exemplo em google.com, temos o nome Google e .com que chamamos de extensão ou mais tecnicamente **TLD.**

:::info Saiba mais
O **TLD** refere-se às iniciais de Top-Level Domain, cuja tradução é domínio de nível de topo, ou apenas domínio de topo. O TLD mais conhecido do mundo é ".com", mas existem vários outros com objetivos diferentes. O ".org", por exemplo, é normalmente usado por organizações sem fins lucrativos, já o ".me" para sites pessoais.
 
**Podemos ver uma lista de TLDs e ccTLD disponíveis:** [Lista de TLDs - Wikipédia, a enciclopédia livre](https://pt.wikipedia.org/wiki/Lista_de_TLDs)

:::

Essa extensão algumas vezes poderá vir acompanhada de uma outra parte chamada **ccTLD**, que refere-se às iniciais de **"Country Code Top Level Domain"**, que significa o **código de país de domínio de primeiro nível**. O seu uso é opcional, mas facilita bastante na hora de identificar a origem de um website, pois cada país do mundo tem um código próprio já preestabelecido. No brasil, por exemplo, usamos o ".br" que podemos ver em alguns sites como ".com.br"



### Subdomínio

Tendo falado sobre o domínio, vamos ver agora o subdomínio, esse por sua vez é uma ramificação do domínio, que cria um novo endereço relacionado ao domínio. O subdomínio usa o domínio principal e se diferencia pela adição de um outro nome, além do nome do domínio. Por exemplo: [drive.google.com](http://drive.google.com) ou [mail.google.com](http://mail.google.com) 

### Domínio Estacionado

Vamos adicionar mais um conceito o domínio estacionado, que em poucas palavras é apenas um outro domínio que é direcionado para o domínio principal. De forma prática podemos ter dois domínios: [**dominioum.com**](http://dominioum.com) e um **dominiodois.com.br,**
supondo que o **dominioum.com** seja nosso domínio estacionado, quando alguém o acessar será direcionado para o domínio principal o **dominiodois.com.br**

### Endereços IP's

Vimos que o nome de um domínio é organizado em uma hierarquia que foi criada para organizar os sites na internet e para termos algo fácil para se lembrar. Porém, a internet funciona sem esses domínios. Os nome que damos aos domínios são convenções criadas por nós humanos, mas as máquina na internet tem uma outra forma de se endereçar. Elas usam o que se chama endereços de IP, que nada mais são do que números, porém um pouco difíceis de serem decorados.

Sendo assim, podemos acessar o Google usando um IP.  Podemos fazer um teste descobrindo qual é o IP do Google,  digitando em um terminal a instrução **nslookup google.com** que procura o número IP do Google na internet e nos trás como resultado e um campo chamado **address,**  podemos então copiar esse IP e tentar acessar em nosso navegador o site do Google.

<img src="/img/docs/fundamentos/web/nslookup-google.png" style={{margin: "0 auto"}} />
Obs.: Esse IP pode mudar dependendo do servidor concreto onde o Google foi instalado.

### DNS

Como se lembrar de endereços IPs para acessar os sites na internet pode ser uma tarefa muito trabalhosa nós utilizamos as URI ou URL, pois são muito mais intuitivas para decorarmos. 

Acontece que por baixo dos panos quando realizamos uma requisição essa URL é transformada em um número por um serviço transparente chamado de DNS (Domain Name System).

Esse serviço age como um grande banco de dados de domínios que relaciona o domínio ao endereço IP, portanto quando fazemos uma requisição para o google.com.br o DNS age transformando o domínio para um IP e a requisição prossegue.

Podemos inclusive escolher um servidor DNS de preferência na nossa internet. Um bastante usado é o da própria Google: [Public DNS | Google Developers](https://developers.google.com/speed/public-dns/)

### Portas

Resumidamente em redes de computadores, uma porta é utilizada para identificar aplicações e processos de um único computador, assim possibilitando o compartilhamento de uma única conexão física (endereço IP) entre várias aplicações. 

Os protocolos de rede como o HTTP que vimos até o momento e outros como TCP e UDP, fazem uso dessas portas para fazer o compartilhamento de conexão.

Para entendermos melhor, vamos pensar em um servidor como uma casa que possui um endereço (no caso do servidor o endereço IP) e dentro dessa casa há vários quartos, supondo que enviaremos um entrega para essa casa e para o morador de um desses quartos, precisaremos então saber o número do quarto para que a entrega seja feita com sucesso.

Por padrão o protocolo HTTP usa uma porta pré-definida e reservada, identificada pelo número **80,**

enquanto o HTTPS usa a porta **443.**  Quando acessamos a URL do Google por exemplo poderíamos adicioná-la ao endereço, por exemplo:

```jsx
https://google.com:80
```

Esse endereço irá funcionar normalmente, tanto que o navegador automaticamente esconde a porta **80.**  Existem muitas outras portas representadas por números que podemos tentar acessar, porém só irão funcionar para estabelecermos uma conexão se o servidor permitir o uso dessa porta, ou seja, deixar a porta destrancada.

:::info Saiba mais
Sobre Portas: 
[https://pt.wikipedia.org/wiki/Porta_(redes_de_computadores)](https://pt.wikipedia.org/wiki/Porta_(redes_de_computadores))

Lista de Portas padrões dos protocolos:
https://pt.wikipedia.org/wiki/Lista_de_portas_dos_protocolos_TCP_e_UDP
:::

### Finalmente, a URL

Agora sabemos que usamos regras bem definidas para descrever a localização de um recurso na web. Todos os endereço na web sempre seguem esse mesmo padrão:

```jsx
protocolo://dominio:porta/caminho/recurso
```

Esse padrão, na verdade, segue uma especificação que foi batizada de **Uniform Resource Locator**, abreviada como URL. Então, as URLs são os endereços na web!

<img src="/img/docs/fundamentos/web/estrutura-url.png" style={{margin: "0 auto"}} />


### URL ou URI?

Toda URL é uma URI, mas nem toda URI é uma URL. No geral, dá pra tratar como sinônimos quando se fala de endereços na web, mas tecnicamente tem diferença.

URI (Uniform Resource Identifier) → Qualquer identificador de um recurso, não importa como ele será acessado.
URL (Uniform Resource Locator) → Uma URI que também indica onde o recurso está e como acessá-lo.
Exemplo:

- **URL**: https://meusite.com/artigos/http (indica o caminho e o protocolo)

- **URI**: meusite:artigos:http (identifica, mas sem localização nem protocolo)

Tem também URN (Uniform Resource Name), que é uma URI que só identifica o recurso, sem localização nem forma de acesso, tipo:

```makefile
urn:uuid:123e4567-e89b-12d3-a456-426614174000
```

Isso pode ser útil em sistemas para identificar algo de forma única, sem precisar apontar pra um local específico.

No dia a dia, URL e URI acabam sendo usados como se fossem a mesma coisa, mas vale lembrar que tecnicamente a URL é um tipo de URI.