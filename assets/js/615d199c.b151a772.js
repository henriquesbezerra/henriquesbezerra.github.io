"use strict";(self.webpackChunksii=self.webpackChunksii||[]).push([[541],{5040:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"containers/intro","title":"Introdu\xe7\xe3o","description":"Hist\xf3ria","source":"@site/docs/containers/intro.md","sourceDirName":"containers","slug":"/containers/intro","permalink":"/containers/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"containersSidebar","next":{"title":"\ud83d\udea7 Introdu\xe7\xe3o","permalink":"/containers/Docker/intro"}}');var i=a(4848),n=a(8453);const r={sidebar_position:1},t="Introdu\xe7\xe3o",d={},c=[{value:"Hist\xf3ria",id:"hist\xf3ria",level:2},{value:"Hypervisor &amp; Virtualiza\xe7\xe3o",id:"hypervisor--virtualiza\xe7\xe3o",level:3},{value:"O Papel do Hypervisor",id:"o-papel-do-hypervisor",level:3},{value:"Virtualiza\xe7\xe3o na Computa\xe7\xe3o Moderna",id:"virtualiza\xe7\xe3o-na-computa\xe7\xe3o-moderna",level:3},{value:"Resumindo",id:"resumindo",level:2},{value:"M\xe1quinas Virtuais (VMs)",id:"m\xe1quinas-virtuais-vms",level:3},{value:"Containers",id:"containers",level:3},{value:"Como Funcionam os Containers?",id:"como-funcionam-os-containers",level:4},{value:"Linux: A Base dos Containers",id:"linux-a-base-dos-containers",level:4},{value:"VMs vs. Containers: Comparativo",id:"vms-vs-containers-comparativo",level:3},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function l(e){const s={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"})}),"\n",(0,i.jsx)(s.h2,{id:"hist\xf3ria",children:"Hist\xf3ria"}),"\n",(0,i.jsxs)(s.p,{children:["Na d\xe9cada de 1960, surge o modelo computacional de ",(0,i.jsx)(s.strong,{children:"compartilhamento de tempo"})," (Time-Sharing), que possibilitou o compartilhamento simult\xe2neo de um recurso de computa\xe7\xe3o (CPU, Mem\xf3ria, Armazenamento, Rede, ...) entre m\xfaltiplas tarefas e usu\xe1rios, dando a cada um, uma pequena fatia do tempo de processamento."]}),"\n",(0,i.jsx)(s.p,{children:"Isso foi um avan\xe7o em rela\xe7\xe3o ao processamento em lote (batch processing), pois permitia que os usu\xe1rios interagissem com o sistem em tempo real. Cada usu\xe1rio tinha a ilus\xe3o de estar utilizando a m\xe1quina sozinho, pois o sistema operacional alternava rapidamente entre os\nprocessos."}),"\n",(0,i.jsx)(s.p,{children:"Antes do time-sharing, os computadores eram usados de forma sequencial com processamento em lote (batch processing), onde os programas eram submetidos e os resultados retornavam horas ou dias depois. Mas com o advento do time-sharing v\xe1rios usu\xe1rios puderam interagir com o sistema em tempo real digitando comando e recebendo repostas imediatas."}),"\n",(0,i.jsx)(s.p,{children:"Isso levou ao desenvolvimento de interface interativas e linguagem de programa\xe7\xe3o mais din\xe2micas, como BASIC, que facilitavam a cria\xe7\xe3o e execu\xe7\xe3o de programas rapidamente. Al\xe9m disso, abriu espa\xe7o para terminais remotos, onde usu\xe1rio podiam acessar um computador central sem estarem fisicamente pr\xf3ximos dele."}),"\n",(0,i.jsx)(s.p,{children:"O time-sharing foi um dos primeiros exemplos de multiplexa\xe7\xe3o de recursos. Ele mostrou que um \xfanico hardware poderia ser dividido logicamente entre v\xe1rios usu\xe1rio e processos, criando a ilus\xe3o de m\xfaltiplos ambientes independentes. Esse conceito inspirou a ideia de executar sistemas completamente isolados uns dos outros, o que levou ao surgimento das m\xe1quinas virtuais."}),"\n",(0,i.jsx)(s.p,{children:"A motiva\xe7\xe3o inicial para a virtualiza\xe7\xe3o era permitir que diversos usu\xe1rios utilizassem o mesmo mainframe de maneira eficiente, isolando diferentes workloads e testando novos sistemas sem afetar produ\xe7\xe3o."}),"\n",(0,i.jsx)(s.p,{children:"Por\xe9m para implementar essa separa\xe7\xe3o total, n\xe3o bastava apenas um sistema operacional com suporte a m\xfaltiplos usu\xe1rios e processos, era necess\xe1rio algo que permitisse que m\xfaltiplos sistemas operacionais rodassem simultaneamente sobre um mesmo hardware f\xedsico. E para esse fim, surge no laborat\xf3rio de pesquisa da IBM o conceito de hypervisors."}),"\n",(0,i.jsx)(s.h3,{id:"hypervisor--virtualiza\xe7\xe3o",children:"Hypervisor & Virtualiza\xe7\xe3o"}),"\n",(0,i.jsx)(s.p,{children:"A IBM foi pioneira no desenvolvimento de hypervisors na d\xe9cada de 1960, introduzindo os primeiros Monitores de M\xe1quina Virtual (VMM - Virtual Machine Monitor) em seus mainframes. O objetivo era permitir que diferentes usu\xe1rios compartilhassem um mesmo computador de forma eficiente e segura."}),"\n",(0,i.jsx)(s.p,{children:"Nos anos 1970, a IBM aprimorou essa tecnologia com os sistemas CP-40 e CP-67, que introduziram m\xe1quinas virtuais completas, possibilitando a execu\xe7\xe3o simult\xe2nea de m\xfaltiplos sistemas operacionais no mesmo mainframe. Esse avan\xe7o levou ao desenvolvimento do VM/370, um dos primeiros hypervisors amplamente utilizados, estabelecendo as bases da virtualiza\xe7\xe3o moderna."}),"\n",(0,i.jsx)(s.p,{children:"Nos anos 2000, a virtualiza\xe7\xe3o expandiu-se para arquiteturas x86, com solu\xe7\xf5es como VMware, Xen e KVM, permitindo que servidores e desktops executassem m\xfaltiplos sistemas operacionais simultaneamente."}),"\n",(0,i.jsx)(s.h3,{id:"o-papel-do-hypervisor",children:"O Papel do Hypervisor"}),"\n",(0,i.jsx)(s.p,{children:"O hypervisor age como uma camada intermedi\xe1ria entre o hardware e os sistemas operacionais, criando e gerenciando M\xe1quinas Virtuais (VMs). Ele aloca recursos como CPU, mem\xf3ria, disco e dispositivos de I/O, garantindo isolamento e seguran\xe7a entre as VMs."}),"\n",(0,i.jsx)(s.p,{children:"\u2705 Principais Funcionalidades:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Isolamento \u2013 Cada VM roda independentemente, sem interferir nas outras."}),"\n",(0,i.jsx)(s.li,{children:"Gerenciamento de Recursos \u2013 Distribui\xe7\xe3o din\xe2mica de CPU, RAM, disco e rede."}),"\n",(0,i.jsx)(s.li,{children:"Execu\xe7\xe3o de M\xfaltiplos Sistemas Operacionais \u2013 Possibilita rodar Windows e Linux no mesmo hardware."}),"\n",(0,i.jsx)(s.li,{children:"Migra\xe7\xe3o e Snapshots \u2013 Permite mover VMs entre servidores e criar backups instant\xe2neos."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Os hypervisores s\xe3o classificados em dois tipos principais:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Hypervisor Tipo 1 (Bare-Metal) \u2013 Roda diretamente sobre o hardware, sem necessidade de um sistema operacional intermedi\xe1rio."}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Exemplos: VMware ESXi, Microsoft Hyper-V, KVM, Xen."}),"\n",(0,i.jsx)(s.li,{children:"Vantagens: Melhor desempenho e seguran\xe7a, ideal para servidores e datacenters."}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"Hypervisor Tipo 2 (Hosted) \u2013 Roda como um software dentro de um sistema operacional j\xe1 existente."}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Exemplos: VMware Workstation, VirtualBox, Parallels."}),"\n",(0,i.jsx)(s.li,{children:"Vantagens: Mais f\xe1cil de instalar e usar, ideal para testes e desenvolvimento."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"virtualiza\xe7\xe3o-na-computa\xe7\xe3o-moderna",children:"Virtualiza\xe7\xe3o na Computa\xe7\xe3o Moderna"}),"\n",(0,i.jsx)(s.p,{children:"Hoje, os hypervisores s\xe3o essenciais para diversas aplica\xe7\xf5es:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Cloud Computing \u2013 Servi\xe7os como AWS, Google Cloud e Azure dependem de VMs para alocar recursos dinamicamente."}),"\n",(0,i.jsx)(s.li,{children:"Ambientes de Teste e Desenvolvimento \u2013 Facilita a execu\xe7\xe3o de diferentes SOs sem necessidade de m\xfaltiplos hardwares."}),"\n",(0,i.jsx)(s.li,{children:"Seguran\xe7a e Isolamento \u2013 Ambientes virtualizados evitam que falhas ou ataques afetem o sistema principal."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Apesar das vantagens, as VMs possuem um alto custo de inicializa\xe7\xe3o e consumo de recursos, pois cada inst\xe2ncia executa um sistema - operacional completo. Isso levou \xe0 busca por solu\xe7\xf5es mais leves e eficientes, culminando no desenvolvimento dos containers."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"resumindo",children:"Resumindo"}),"\n",(0,i.jsx)(s.h3,{id:"m\xe1quinas-virtuais-vms",children:"M\xe1quinas Virtuais (VMs)"}),"\n",(0,i.jsx)(s.p,{children:"Uma M\xe1quina Virtual (VM) \xe9 um ambiente computacional simulado que permite a execu\xe7\xe3o de um sistema operacional completo sobre um hardware f\xedsico. Isso \xe9 poss\xedvel gra\xe7as ao hypervisor, que aloca e gerencia recursos (CPU, mem\xf3ria, disco e rede) para cada inst\xe2ncia virtual."}),"\n",(0,i.jsx)(s.p,{children:"Cada VM possui seu pr\xf3prio sistema operacional, kernel, drivers e aplicativos, garantindo isolamento total. Isso possibilita:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Executar diferentes SOs no mesmo hardware."}),"\n",(0,i.jsx)(s.li,{children:"Rodar aplica\xe7\xf5es legadas em sistemas modernos."}),"\n",(0,i.jsx)(s.li,{children:"Melhorar a seguran\xe7a, pois falhas em uma VM n\xe3o afetam outras."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Desvantagens:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Alto consumo de recursos."}),"\n",(0,i.jsx)(s.li,{children:"Maior tempo de inicializa\xe7\xe3o."}),"\n",(0,i.jsx)(s.li,{children:"Sobreposi\xe7\xe3o de sistemas operacionais pode reduzir efici\xeancia."}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"containers",children:"Containers"}),"\n",(0,i.jsx)(s.p,{children:"Os containers surgiram como uma alternativa mais leve e eficiente \xe0s VMs. Eles n\xe3o virtualizam o hardware, mas sim o sistema operacional, permitindo que v\xe1rias aplica\xe7\xf5es rodem isoladas sem necessidade de m\xfaltiplos SOs completos."}),"\n",(0,i.jsx)(s.p,{children:"Um container \xe9 um ambiente isolado que executa uma aplica\xe7\xe3o junto com todas as suas depend\xeancias, bibliotecas e configura\xe7\xf5es, sem precisar de um sistema operacional completo como ocorre nas m\xe1quinas virtuais. Em vez de virtualizar o hardware, os containers compartilham o mesmo kernel do sistema operacional host, usando mecanismos como namespaces e cgroups para fornecer isolamento e controle de recursos."}),"\n",(0,i.jsx)(s.p,{children:"Os namespaces garantem que cada container tenha sua pr\xf3pria vis\xe3o isolada do sistema (processos, rede, sistema de arquivos), enquanto os cgroups limitam o uso de CPU, mem\xf3ria e outros recursos. Isso faz com que os containers sejam leves e eficientes, pois rodam como um processo no sistema operacional, sem a necessidade de um kernel pr\xf3prio."}),"\n",(0,i.jsx)(s.p,{children:"Outra caracter\xedstica fundamental dos containers \xe9 sua imutabilidade. Eles s\xe3o baseados em imagens imut\xe1veis, que funcionam como snapshots pr\xe9-configurados do ambiente necess\xe1rio para rodar uma aplica\xe7\xe3o. Isso garante previsibilidade e consist\xeancia: se um container funciona na m\xe1quina do desenvolvedor, funcionar\xe1 da mesma forma em produ\xe7\xe3o."}),"\n",(0,i.jsx)(s.p,{children:"Al\xe9m disso, os containers s\xe3o r\xe1pidos de iniciar e parar, pois n\xe3o precisam passar por um processo de boot como uma VM. Eles s\xe3o simplesmente iniciados ou removidos como qualquer outro processo no sistema operacional. Esse comportamento facilita a escalabilidade din\xe2mica de aplica\xe7\xf5es, especialmente quando combinados com ferramentas como Kubernetes."}),"\n",(0,i.jsx)(s.p,{children:'Em resumo, um container "acredita" que tem um sistema operacional pr\xf3prio, mas na realidade, ele apenas compartilha e utiliza os recursos do kernel do SO host. Esse isolamento permite que os processos dentro do container s\xf3 enxerguem e interajam com aquilo que est\xe1 dentro dele, garantindo seguran\xe7a e previsibilidade.'}),"\n",(0,i.jsx)(s.h4,{id:"como-funcionam-os-containers",children:"Como Funcionam os Containers?"}),"\n",(0,i.jsx)(s.p,{children:"Em vez de criar m\xfaltiplos kernels, os containers compartilham o kernel do sistema operacional host e utilizam tecnologias como namespaces e cgroups para fornecer isolamento e controle de recursos."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Namespaces \u2013 Criam uma vis\xe3o isolada do sistema para cada container (processos, rede, sistema de arquivos)."}),"\n",(0,i.jsx)(s.li,{children:"Cgroups \u2013 Limitam o uso de CPU, mem\xf3ria e outros recursos."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Principais Caracter\xedsticas:"}),"\n",(0,i.jsx)(s.p,{children:"\u2705 Leves \u2013 Cada container roda apenas os processos necess\xe1rios."}),"\n",(0,i.jsx)(s.p,{children:"\u2705 R\xe1pidos \u2013 Inicializam em segundos, ao contr\xe1rio das VMs."}),"\n",(0,i.jsx)(s.p,{children:"\u2705 Imut\xe1veis \u2013 Baseados em imagens padronizadas para garantir consist\xeancia."}),"\n",(0,i.jsx)(s.p,{children:"\u2705 Port\xe1veis \u2013 Funcionam da mesma forma em diferentes ambientes."}),"\n",(0,i.jsx)(s.p,{children:"Os containers s\xe3o amplamente utilizados em arquiteturas cloud-native, onde a escalabilidade e a efici\xeancia s\xe3o essenciais. Tecnologias como Docker, LXC e Podman impulsionaram seu crescimento, tornando o desenvolvimento e a implanta\xe7\xe3o de software mais \xe1geis."}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsx)(s.h4,{id:"linux-a-base-dos-containers",children:"Linux: A Base dos Containers"}),(0,i.jsx)(s.p,{children:"Embora existam solu\xe7\xf5es para Windows e macOS, o Linux domina o cen\xe1rio de containers devido ao seu suporte nativo a namespaces e cgroups. Ferramentas como Kubernetes facilitam a orquestra\xe7\xe3o e escalabilidade de aplica\xe7\xf5es baseadas em containers."})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"vms-vs-containers-comparativo",children:"VMs vs. Containers: Comparativo"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Crit\xe9rio"}),(0,i.jsx)(s.th,{children:"M\xe1quinas Virtuais (VMs)"}),(0,i.jsx)(s.th,{children:"Containers"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Virtualiza\xe7\xe3o"})}),(0,i.jsx)(s.td,{children:"Do hardware (hipervisor emula um sistema completo)"}),(0,i.jsx)(s.td,{children:"Do sistema operacional (compartilha o kernel)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Isolamento"})}),(0,i.jsx)(s.td,{children:"Forte (cada VM tem seu pr\xf3prio SO)"}),(0,i.jsx)(s.td,{children:"M\xe9dio (compartilha o kernel do host)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Consumo de Recursos"})}),(0,i.jsx)(s.td,{children:"Alto (cada VM precisa de um SO completo)"}),(0,i.jsx)(s.td,{children:"Baixo (somente a aplica\xe7\xe3o e depend\xeancias)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Tempo de Inicializa\xe7\xe3o"})}),(0,i.jsx)(s.td,{children:"Lento (boot do SO dentro da VM)"}),(0,i.jsx)(s.td,{children:"R\xe1pido (roda como um processo)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Efici\xeancia"})}),(0,i.jsx)(s.td,{children:"Menos eficiente devido ao overhead do SO"}),(0,i.jsx)(s.td,{children:"Alta efici\xeancia, menor consumo de recursos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Escalabilidade"})}),(0,i.jsx)(s.td,{children:"Limitada (cada VM exige mais recursos)"}),(0,i.jsx)(s.td,{children:"Alta (containers s\xe3o leves e f\xe1ceis de replicar)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Portabilidade"})}),(0,i.jsx)(s.td,{children:"Depende do hipervisor e do SO"}),(0,i.jsx)(s.td,{children:"Alto (pode rodar em qualquer ambiente com o mesmo SO)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Seguran\xe7a"})}),(0,i.jsx)(s.td,{children:"Maior isolamento (cada VM \xe9 independente)"}),(0,i.jsx)(s.td,{children:"Menos isolado (compartilha o kernel)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Casos de Uso"})}),(0,i.jsx)(s.td,{children:"Aplica\xe7\xf5es legadas, m\xfaltiplos SOs, ambientes isolados"}),(0,i.jsx)(s.td,{children:"Microservi\xe7os, cloud computing, CI/CD"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Exemplos"})}),(0,i.jsx)(s.td,{children:"VMware ESXi, Microsoft Hyper-V, KVM, Xen"}),(0,i.jsx)(s.td,{children:"Docker, Podman, LXC, Kubernetes"})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,i.jsx)(s.p,{children:"O conceito de compartilhamento de tempo estabeleceu os fundamentos para a virtualiza\xe7\xe3o, levando \xe0 cria\xe7\xe3o dos hypervisors, que possibilitaram a execu\xe7\xe3o de m\xfaltiplos sistemas operacionais em um \xfanico hardware."}),"\n",(0,i.jsx)(s.p,{children:"Com o tempo, a virtualiza\xe7\xe3o evoluiu para se tornar mais leve e eficiente, culminando nos containers, que revolucionaram o desenvolvimento e a implanta\xe7\xe3o de software. Hoje, tanto VMs quanto containers desempenham pap\xe9is essenciais na computa\xe7\xe3o moderna, cada um com suas vantagens e aplica\xe7\xf5es espec\xedficas."}),"\n",(0,i.jsx)(s.p,{children:"\ud83d\udd39 VMs s\xe3o ideais para isolamento total e execu\xe7\xe3o de m\xfaltiplos sistemas operacionais."}),"\n",(0,i.jsx)(s.p,{children:"\ud83d\udd39 Containers s\xe3o a escolha certa para aplica\xe7\xf5es escal\xe1veis e \xe1geis, otimizadas para a nuvem."})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>t});var o=a(6540);const i={},n=o.createContext(i);function r(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);