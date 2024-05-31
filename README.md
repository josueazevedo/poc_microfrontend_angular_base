# Microfrontends com Angular - POC

## Descrição

Este é um projeto de prova de conceito (POC) para demonstrar a arquitetura de microfrontends usando Angular. O objetivo é mostrar como diferentes partes de uma aplicação web podem ser desenvolvidas, versionadas e implantadas independentemente, e como elas podem ser compostas para formar uma única aplicação coesa.

## Estrutura do Projeto

O projeto é dividido em várias partes:

1. **Base**: A aplicação principal que integra os microfrontends.
2. **Microfrontend One**: Um microfrontend que representa uma parte específica da funcionalidade da aplicação.
3. **Microfrontend Two**: Outro microfrontend que representa outra parte da funcionalidade da aplicação.

## Instalação

Para executar este projeto em sua máquina local, siga estas etapas:

1. Clone os 3 repositórios:

    ```
    git clone josueazevedo/poc_microfrontend_angular_base.git
    git clone josueazevedo/poc_microfrontend_angular_mfe1.git
    git clone josueazevedo/poc_microfrontend_angular_mfe2.git
    ```

2. Instale as dependências em cada projeto:

    ```
    npm install
    ```

## Executando o Projeto

Para executar o projeto, siga estas etapas:

1. Inicie o servidor de desenvolvimento para cada microfrontend:

    ```
    npm start
    ```

2. Abra um navegador e vá para [http://localhost:4200](http://localhost:4200).

## Acessando o Projeto

O acesso ao projeto também pode ser feito pelo Github Pages, cada repositório faz uso do GitHub Action para realizar o Build e Deploy em cada nova versão.

E pode ser acesso pelo link [https://josueazevedo.github.io/poc_microfrontend_angular_base](https://josueazevedo.github.io/poc_microfrontend_angular_base).

## Detalhes de Implementação

### Base

O Base é a aplicação principal que integra os microfrontends. Ele é responsável por carregar dinamicamente os microfrontends e renderizá-los na interface do usuário. Para melhor performance cada Microfrontend é injetado no momento em que é solicitado pelo usuário.

### Microfrontend One e Two

Cada microfrontend é uma aplicação Angular separada que representa uma parte específica da funcionalidade da aplicação. Eles são desenvolvidos, versionados e implantados independentemente. Cada microfrontend é empacotado como um Custom Element e pode ser carregado dinamicamente pelo Base.

## Contribuição

Contribuições são bem-vindas!

## Projeto em construção

Melhorias e novas funcionalidades estão em desenvolvimento.
