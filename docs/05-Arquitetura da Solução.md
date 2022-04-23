# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na Figura que se segue.
![Internet](https://user-images.githubusercontent.com/102400680/164915501-1877b05f-7fd1-4ef9-834e-e1218d74255b.png)

**FIGURA 16**- Diagrama de Componentes


A solução implementada conta com os seguintes módulos:
 - **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
    - **Avaliações** - registro de opniões do usuário a cerca de uma determinada empresa/ instituição coletora de materiais reciclados. 
     - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 



A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Home Page), nela o é possível navegar por várias opções de menu e tela principal,onde suas funcionalidades e redirecionamentos foram discorridos no tópico Interface do Sistema, seção de Wireframes.

![Home PAGE](https://user-images.githubusercontent.com/102400680/164913316-f9c4b863-93c4-4789-9937-1ac8c789e8ee.png)
**Figura 1** - USER FLOW DESCARTE DE ELETRÔNICOS


## Hospedagem

O site utiliza a plataforma do GitHub Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

https://link_exemplo.github.io/repository  (url do site ficará disponível apartir da próxima etapa do projeto). 

A publicação do site no GitHub PAges é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço: 
https://git.heroku.com/link_exemplo.git
