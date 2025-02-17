---
sidebar_position: 1
---

# Introdução

## História

Na década de 1960, surge o modelo computacional de **compartilhamento de tempo** (Time-Sharing), que possibilitou o compartilhamento simultâneo de um recurso de computação (CPU, Memória, Armazenamento, Rede, ...) entre múltiplas tarefas e usuários, dando a cada um, uma pequena fatia do tempo de processamento. 

Isso foi um avanço em relação ao processamento em lote (batch processing), pois permitia que os usuários interagissem com o sistem em tempo real. Cada usuário tinha a ilusão de estar utilizando a máquina sozinho, pois o sistema operacional alternava rapidamente entre os 
processos.

Antes do time-sharing, os computadores eram usados de forma sequencial com processamento em lote (batch processing), onde os programas eram submetidos e os resultados retornavam horas ou dias depois. Mas com o advento do time-sharing vários usuários puderam interagir com o sistema em tempo real digitando comando e recebendo repostas imediatas.

Isso levou ao desenvolvimento de interface interativas e linguagem de programação mais dinâmicas, como BASIC, que facilitavam a criação e execução de programas rapidamente. Além disso, abriu espaço para terminais remotos, onde usuário podiam acessar um computador central sem estarem fisicamente próximos dele.

O time-sharing foi um dos primeiros exemplos de multiplexação de recursos. Ele mostrou que um único hardware poderia ser dividido logicamente entre vários usuário e processos, criando a ilusão de múltiplos ambientes independentes. Esse conceito inspirou a ideia de executar sistemas completamente isolados uns dos outros, o que levou ao surgimento das máquinas virtuais.

A motivação inicial para a virtualização era permitir que diversos usuários utilizassem o mesmo mainframe de maneira eficiente, isolando diferentes workloads e testando novos sistemas sem afetar produção.

Porém para implementar essa separação total, não bastava apenas um sistema operacional com suporte a múltiplos usuários e processos, era necessário algo que permitisse que múltiplos sistemas operacionais rodassem simultaneamente sobre um mesmo hardware físico. E para esse fim, surge no laboratório de pesquisa da IBM o conceito de hypervisors. 

### Hypervisor & Virtualização

A IBM foi pioneira no desenvolvimento de hypervisors na década de 1960, introduzindo os primeiros Monitores de Máquina Virtual (VMM - Virtual Machine Monitor) em seus mainframes. O objetivo era permitir que diferentes usuários compartilhassem um mesmo computador de forma eficiente e segura.

Nos anos 1970, a IBM aprimorou essa tecnologia com os sistemas CP-40 e CP-67, que introduziram máquinas virtuais completas, possibilitando a execução simultânea de múltiplos sistemas operacionais no mesmo mainframe. Esse avanço levou ao desenvolvimento do VM/370, um dos primeiros hypervisors amplamente utilizados, estabelecendo as bases da virtualização moderna.

Nos anos 2000, a virtualização expandiu-se para arquiteturas x86, com soluções como VMware, Xen e KVM, permitindo que servidores e desktops executassem múltiplos sistemas operacionais simultaneamente.

### O Papel do Hypervisor
O hypervisor age como uma camada intermediária entre o hardware e os sistemas operacionais, criando e gerenciando Máquinas Virtuais (VMs). Ele aloca recursos como CPU, memória, disco e dispositivos de I/O, garantindo isolamento e segurança entre as VMs.

✅ Principais Funcionalidades:

- Isolamento – Cada VM roda independentemente, sem interferir nas outras.
- Gerenciamento de Recursos – Distribuição dinâmica de CPU, RAM, disco e rede.
- Execução de Múltiplos Sistemas Operacionais – Possibilita rodar Windows e Linux no mesmo hardware.
- Migração e Snapshots – Permite mover VMs entre servidores e criar backups instantâneos.

Os hypervisores são classificados em dois tipos principais:

1. Hypervisor Tipo 1 (Bare-Metal) – Roda diretamente sobre o hardware, sem necessidade de um sistema operacional intermediário.
- Exemplos: VMware ESXi, Microsoft Hyper-V, KVM, Xen.
- Vantagens: Melhor desempenho e segurança, ideal para servidores e datacenters.

2. Hypervisor Tipo 2 (Hosted) – Roda como um software dentro de um sistema operacional já existente.
- Exemplos: VMware Workstation, VirtualBox, Parallels.
- Vantagens: Mais fácil de instalar e usar, ideal para testes e desenvolvimento.

### Virtualização na Computação Moderna

Hoje, os hypervisores são essenciais para diversas aplicações:

- Cloud Computing – Serviços como AWS, Google Cloud e Azure dependem de VMs para alocar recursos dinamicamente.
- Ambientes de Teste e Desenvolvimento – Facilita a execução de diferentes SOs sem necessidade de múltiplos hardwares.
- Segurança e Isolamento – Ambientes virtualizados evitam que falhas ou ataques afetem o sistema principal.

Apesar das vantagens, as VMs possuem um alto custo de inicialização e consumo de recursos, pois cada instância executa um sistema - operacional completo. Isso levou à busca por soluções mais leves e eficientes, culminando no desenvolvimento dos containers.

---

## Resumindo

### Máquinas Virtuais (VMs)

Uma Máquina Virtual (VM) é um ambiente computacional simulado que permite a execução de um sistema operacional completo sobre um hardware físico. Isso é possível graças ao hypervisor, que aloca e gerencia recursos (CPU, memória, disco e rede) para cada instância virtual.

Cada VM possui seu próprio sistema operacional, kernel, drivers e aplicativos, garantindo isolamento total. Isso possibilita:
- Executar diferentes SOs no mesmo hardware.
- Rodar aplicações legadas em sistemas modernos.
- Melhorar a segurança, pois falhas em uma VM não afetam outras.

Desvantagens:
- Alto consumo de recursos.
- Maior tempo de inicialização.
- Sobreposição de sistemas operacionais pode reduzir eficiência.

---

### Containers

Os containers surgiram como uma alternativa mais leve e eficiente às VMs. Eles não virtualizam o hardware, mas sim o sistema operacional, permitindo que várias aplicações rodem isoladas sem necessidade de múltiplos SOs completos.

Um container é um ambiente isolado que executa uma aplicação junto com todas as suas dependências, bibliotecas e configurações, sem precisar de um sistema operacional completo como ocorre nas máquinas virtuais. Em vez de virtualizar o hardware, os containers compartilham o mesmo kernel do sistema operacional host, usando mecanismos como namespaces e cgroups para fornecer isolamento e controle de recursos.

Os namespaces garantem que cada container tenha sua própria visão isolada do sistema (processos, rede, sistema de arquivos), enquanto os cgroups limitam o uso de CPU, memória e outros recursos. Isso faz com que os containers sejam leves e eficientes, pois rodam como um processo no sistema operacional, sem a necessidade de um kernel próprio.

Outra característica fundamental dos containers é sua imutabilidade. Eles são baseados em imagens imutáveis, que funcionam como snapshots pré-configurados do ambiente necessário para rodar uma aplicação. Isso garante previsibilidade e consistência: se um container funciona na máquina do desenvolvedor, funcionará da mesma forma em produção.

Além disso, os containers são rápidos de iniciar e parar, pois não precisam passar por um processo de boot como uma VM. Eles são simplesmente iniciados ou removidos como qualquer outro processo no sistema operacional. Esse comportamento facilita a escalabilidade dinâmica de aplicações, especialmente quando combinados com ferramentas como Kubernetes.

Em resumo, um container "acredita" que tem um sistema operacional próprio, mas na realidade, ele apenas compartilha e utiliza os recursos do kernel do SO host. Esse isolamento permite que os processos dentro do container só enxerguem e interajam com aquilo que está dentro dele, garantindo segurança e previsibilidade.


#### Como Funcionam os Containers?

Em vez de criar múltiplos kernels, os containers compartilham o kernel do sistema operacional host e utilizam tecnologias como namespaces e cgroups para fornecer isolamento e controle de recursos.
- Namespaces – Criam uma visão isolada do sistema para cada container (processos, rede, sistema de arquivos).
- Cgroups – Limitam o uso de CPU, memória e outros recursos.

Principais Características:

✅ Leves – Cada container roda apenas os processos necessários.

✅ Rápidos – Inicializam em segundos, ao contrário das VMs.

✅ Imutáveis – Baseados em imagens padronizadas para garantir consistência.

✅ Portáveis – Funcionam da mesma forma em diferentes ambientes.

Os containers são amplamente utilizados em arquiteturas cloud-native, onde a escalabilidade e a eficiência são essenciais. Tecnologias como Docker, LXC e Podman impulsionaram seu crescimento, tornando o desenvolvimento e a implantação de software mais ágeis.

:::note

#### Linux: A Base dos Containers
Embora existam soluções para Windows e macOS, o Linux domina o cenário de containers devido ao seu suporte nativo a namespaces e cgroups. Ferramentas como Kubernetes facilitam a orquestração e escalabilidade de aplicações baseadas em containers.
:::

---

### VMs vs. Containers: Comparativo

| Critério             | Máquinas Virtuais (VMs)                                  | Containers                                   |
|----------------------|--------------------------------------------------------|----------------------------------------------|
| **Virtualização**   | Do hardware (hipervisor emula um sistema completo)      | Do sistema operacional (compartilha o kernel) |
| **Isolamento**      | Forte (cada VM tem seu próprio SO)                      | Médio (compartilha o kernel do host)        |
| **Consumo de Recursos** | Alto (cada VM precisa de um SO completo)             | Baixo (somente a aplicação e dependências)  |
| **Tempo de Inicialização** | Lento (boot do SO dentro da VM)                   | Rápido (roda como um processo)              |
| **Eficiência**      | Menos eficiente devido ao overhead do SO                | Alta eficiência, menor consumo de recursos  |
| **Escalabilidade**  | Limitada (cada VM exige mais recursos)                  | Alta (containers são leves e fáceis de replicar) |
| **Portabilidade**   | Depende do hipervisor e do SO                           | Alto (pode rodar em qualquer ambiente com o mesmo SO) |
| **Segurança**       | Maior isolamento (cada VM é independente)               | Menos isolado (compartilha o kernel)        |
| **Casos de Uso**    | Aplicações legadas, múltiplos SOs, ambientes isolados   | Microserviços, cloud computing, CI/CD       |
| **Exemplos**        | VMware ESXi, Microsoft Hyper-V, KVM, Xen                | Docker, Podman, LXC, Kubernetes             |


---


## Conclusão
O conceito de compartilhamento de tempo estabeleceu os fundamentos para a virtualização, levando à criação dos hypervisors, que possibilitaram a execução de múltiplos sistemas operacionais em um único hardware.

Com o tempo, a virtualização evoluiu para se tornar mais leve e eficiente, culminando nos containers, que revolucionaram o desenvolvimento e a implantação de software. Hoje, tanto VMs quanto containers desempenham papéis essenciais na computação moderna, cada um com suas vantagens e aplicações específicas.

🔹 VMs são ideais para isolamento total e execução de múltiplos sistemas operacionais.

🔹 Containers são a escolha certa para aplicações escaláveis e ágeis, otimizadas para a nuvem.
