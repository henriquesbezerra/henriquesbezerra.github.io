---
sidebar_position: 1
---

# Introdução a Containers

Nesta introdução, buscaremos compreender as bases sobre containers, olhando resumidamente
para o contexto histório de surgimento dessa tecnologia e como ela evolui ao longo do tempo até chegar aos poderosos containers runtimers que temos nos dias de hoje, como Docker e Podman.

Durante a década de 1960, surgi um proeminente modelo de computação — o **compartilhamento de tempo** — que, na década de 1970, representou uma grande mudança tecnologica na história da computação.

O compartilhamento de tempo é o compartilhamento simultâneo de um recurso de computação entre muitas
tarefas ou usuários, dando a cada tarefa ou usuário uma pequena fatia do tempo de processamento. Essa
troca rápida entre tarefas ou usuários dá a ilusão de execução simultânea. Esse modelo possibilita multitarefas
por um único usuário ou permite sessões de vários usuários.

Ao permitir que muitos usuários interagissem simultaneamente com um único computador, o compartilhamento de tempo reduziu drasticamente o custo de fornecer capacidade de computação e tornou possível que indivíduos e organizações usassem um computador sem possuir um, e promoveu o uso interativo de computadores e o desenvolvimento de novos aplicativos interativos.

O conceito de compartilhamento de tempo estabeleceu a base para a virtualização, pois introduziu a ideia de dividir um único hardware entre múltiplos usuários e processos isolados. No início, os sistemas operacionais suportavam múltiplos usuários e tarefas, mas todos compartilhavam o mesmo ambiente.

Na década de 1970, a IBM levou esse conceito adiante ao criar o CP-40 e CP-67, sistemas pioneiros que introduziram máquinas virtuais completas, permitindo que múltiplos sistemas operacionais rodassem simultaneamente no mesmo mainframe. Esse avanço deu origem ao VM/370, um dos primeiros hipervisores amplamente utilizados, e abriu caminho para o desenvolvimento das máquinas virtuais modernas.

Nos anos 2000, a virtualização evoluiu para rodar em hardware x86 com tecnologias como VMware, Xen e KVM, permitindo que servidores e desktops rodassem múltiplos sistemas operacionais simultaneamente. No entanto, as VMs ainda tinham um alto custo de inicialização e consumo de recursos.

Foi a necessidade de uma solução mais leve e eficiente que levou à criação dos containers, que compartilham o mesmo kernel do sistema operacional, mas oferecem isolamento de processos semelhante ao das VMs. Com isso, tecnologias como LXC, Docker e Podman emergiram, tornando o desenvolvimento e a implantação de software mais ágeis e eficientes.

Dessa forma, o compartilhamento de tempo não só revolucionou a computação interativa, mas também estabeleceu os princípios fundamentais para a virtualização e, posteriormente, para os containers que usamos hoje.


## Máquina Virtuais (VMs)

Uma máquina virtual (VM) é um ambiente computacional simulado que roda sobre um sistema físico, permitindo a execução de um sistema operacional completo dentro de outro. Isso é possível graças a um software chamado hipervisor, que atua como uma camada entre o hardware e as VMs, gerenciando e alocando recursos (CPU, memória, disco e rede) para cada instância virtual. Existem dois tipos de hipervisores:

- Tipo 1 (Bare Metal): Executado diretamente sobre o hardware, sem um sistema operacional intermediário. Ex.: VMware ESXi, Microsoft Hyper-V, KVM, Xen.

- Tipo 2 (Hosted): Roda sobre um sistema operacional tradicional, como um aplicativo. Ex.: VMware Workstation, VirtualBox.

Cada VM contém seu próprio sistema operacional, kernel, drivers e aplicativos, garantindo isolamento total entre elas. Isso permite rodar diferentes SOs no mesmo hardware físico, executar aplicações legadas e melhorar a segurança, pois falhas ou ataques em uma VM não afetam diretamente as outras. No entanto, esse nível de isolamento tem um custo: cada VM consome uma grande quantidade de recursos, pois precisa emular um sistema completo, tornando sua inicialização e gerenciamento mais pesados em comparação com os containers.

## Containers

Um container é um ambiente isolado que executa uma aplicação junto com todas as suas dependências, bibliotecas e configurações, sem precisar de um sistema operacional completo como ocorre nas máquinas virtuais. Em vez de virtualizar o hardware, os containers compartilham o mesmo kernel do sistema operacional host, usando mecanismos como namespaces e cgroups para fornecer isolamento e controle de recursos.

Os namespaces garantem que cada container tenha sua própria visão isolada do sistema (processos, rede, sistema de arquivos), enquanto os cgroups limitam o uso de CPU, memória e outros recursos. Isso faz com que os containers sejam leves e eficientes, pois rodam como um processo no sistema operacional, sem a necessidade de um kernel próprio.

Outra característica fundamental dos containers é sua imutabilidade. Eles são baseados em imagens imutáveis, que funcionam como snapshots pré-configurados do ambiente necessário para rodar uma aplicação. Isso garante previsibilidade e consistência. Logo um container deverá funcionar da mesma maneira, seja na máquina do desenvolvedor, seja em produção.

Além disso, os containers são rápidos de iniciar e parar, pois não precisam passar por um processo de boot como uma VM. Eles são simplesmente iniciados ou removidos como qualquer outro processo no sistema operacional. Esse comportamento facilita a escalabilidade dinâmica de aplicações, especialmente quando combinados com ferramentas como Kubernetes.

Por trás de tudo isso, o Linux é rei. Embora existam soluções para rodar containers no Windows e macOS, o suporte nativo do Linux e sua implementação eficiente de namespaces e cgroups fazem dele a plataforma dominante para containers.

Em resumo, um container "acredita" que tem um sistema operacional próprio, mas na realidade, ele apenas compartilha e utiliza os recursos do kernel do SO host. Esse isolamento permite que os processos dentro do container só enxerguem e interajam com aquilo que está dentro dele, garantindo segurança e previsibilidade.

## VMs vs. Containers 

### Diferenças, Semelhanças e Quando Usar

Embora tanto máquinas virtuais (VMs) quanto containers sejam tecnologias de virtualização que proporcionam isolamento e eficiência, eles operam de maneiras distintas. As VMs virtualizam o hardware, permitindo a execução de múltiplos sistemas operacionais completos no mesmo servidor físico. Isso garante isolamento forte e compatibilidade entre diferentes SOs, mas traz sobrecarga de recursos, maior tempo de inicialização e maior complexidade na manutenção. Já os containers virtualizam o sistema operacional, permitindo que várias aplicações rodem isoladas, mas compartilhando o mesmo kernel do SO host. Isso os torna mais leves, rápidos e eficientes, com inicialização quase instantânea e menor consumo de recursos.

Na prática, VMs são ideais para executar aplicações legadas, isolar ambientes que exigem diferentes SOs ou rodar workloads pesados que precisam de mais segurança e estabilidade. Já os containers são perfeitos para aplicações modernas, escaláveis e distribuídas, como microserviços e arquiteturas baseadas na nuvem.

💡 Dica: Por que usar containers? Se você busca portabilidade, escalabilidade e eficiência, os containers são a melhor escolha. Eles permitem empacotar e rodar aplicações de forma previsível em qualquer ambiente, garantindo que "na minha máquina funciona" também seja verdade na produção.