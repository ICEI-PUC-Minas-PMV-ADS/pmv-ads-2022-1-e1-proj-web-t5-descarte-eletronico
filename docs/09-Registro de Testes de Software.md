# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Os resultados obtidos nos testes de software realizados são descritos abaixo. 

| Caso de teste         	| CT-01 - Cadastro de entidades                                                                                                                                                                                	|
|-----------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-01 - Permitir que os usuários comuns façam cadastro.<br>RF-02 - Permitir que empresas coletoras façam cadastro.                                                                                                  	|
| Objetivo do teste     	| Verificar se o cadastro das entidades está funcionando corretamente.                                                                                                                                         	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no botão ENTRAR localizado na barra de navegação lateral.<br>4) Preencher os dados e selecionar o tipo de usuário.                     	|
| Critérios de êxito    	| - Mostrar um alerta informando que o registro foi realizado com sucesso.<br>- Redirecionamento para a parte de Login do site.<br>- Deve haver uma chave USUÁRIO ou EMPRESA na parte de LocalStorage do site. 	|
| Resultado do Teste      | Ao acessar a tela de cadastro por todos os links disponíveis do site (botão entrar no menu lateral e quero me cadastrar no rodapé) verificou-se que o acesso ocorre de forma correta através do botão entrar, mas está com a versão de cadastro desatualizada na parte do rodapé, mas é um erro que pode ser concertado rapidamente apenas alterando o link href no html. Ao preencher o cadastro verificou-se que o formulário cumpre os requisitos salvando os dados para login e ainda verificando se os dados colocados para o cadastro correspondem ao requisitado (input type), todos os critérios descritos na terceira linha da tabela foram executados com êxito.           |
<hr>

![teste1](https://user-images.githubusercontent.com/102400680/173259500-57ac8e29-417e-4818-8a43-3da734b2fc01.png)

Figura 1: Teste 1 Critérios de Êxito

<hr>

| Caso de teste         	| CT-02 - Login de entidades funcional                                                                                                                                                                                                                 	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-03 - Permitir que os usuários comuns façam login.<br>RF-04 - Permitir que empresas coletoras façam login.                                                                                                                                      	|
| Objetivo do teste     	| Verificar se o login das entidades está funcionando corretamente.                                                                                                                                                                                 	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no botão ENTRAR localizado na barra de navegação lateral.<br>4) Clicar no link que redireciona para a parte de login.<br>5) Preencher os dados e selecionar o tipo de usuário. 	|
| Critérios de êxito    	| - Mostrar um alerta informando que o login foi realizado com sucesso.<br>- Redirecionamento para a parte de Perfil do usuário.                                                                                                                       	|
| Resultado do Teste      | Ao acessar a tela de cadastro por todos os links disponíveis do site (botão entrar no menu lateral e em seguida já possuo cadastro) verificou-se que o acesso ocorre de forma correta. Ao preencher os campos de login com dados utilizados na parte de cadastro verificou-se que o formulário cumpre os requisitos redirecionando para tela de perfil de usuário/empresa coletora. Ao tentar logar com um email e senha não cadastrado não acontece o redirecionamento, mostrando por tanto que  todos os critérios descritos na terceira linha da tabela foram executados com êxito.                                                                                             |
<hr>

![teste2](https://user-images.githubusercontent.com/102400680/173259868-f22b8b7a-1ff8-46a2-bec0-7c6917046602.png)

Figura 2: Teste 2 Critérios de Êxito

![t](https://user-images.githubusercontent.com/102400680/173260432-d2d5944e-448d-4fbf-bb29-ab18c19453f0.png)

Figura 2: Teste 2 Email e senha não cadastrados
<hr>
  
| Caso de teste         	| CT-03 - Registro de notícias                                                                                                              	|
|-----------------------	|-------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-05 - Permitir que usuários específicos façam o cadastro de notícias.                                                                	|
| Objetivo do teste     	| Verificar se o cadastro de notícias está funcionando corretamente.                                                                        	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Acessar /registro-noticias.html<br>4) Informar o título, descrição e data. 	|
| Critérios de êxito    	| - Mostrar um alerta informando que o registro da notícia foi realizado com sucesso.<br>- Redirecionamento para a parte de Notícias.       	|
| Resultado do Teste      | Ao acessar a tela de registro de noticias por todos os links disponíveis do site, verificou-se que o acesso ocorre de forma correta. Ao preencher os campos de registro de noticias, verificou-se que o formulário cumpre os requisitos, gerando mensagem de confirmação de registro, redirecionando para tela de noticias.                                                                                              |
<hr>



| Caso de teste         	| CT-04 - Visualização completa de notícias                                                                                                                                                                                                	|
|-----------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-05 - Permitir que usuários específicos façam o cadastro de notícias.<br>RF-06 - Permitir que os usuários possam ver o corpo das notícias.<br>RF-07 - Permitir que os usuários possam ler a notícia completa pelo modal. 	|
| Objetivo do teste     	| Verificar se a leitura das notícias está funcionando corretamente.                                                                                                                                                         	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no link NOTICIAS localizado na barra de navegação lateral ou rodapé.<br>4) Selecionar notícia e clicar em Ler mais.                                  	|
| Critérios de êxito    	| - Mostrar todas as notícias cadastradas anteriormente.<br>- Mostrar um modal para a visualização completa da notícia.                                                                                                      	|
| Resultado do Teste      | Ao acessar a tela de noticias por todos os links disponíveis do site verificou-se que o acesso ocorre de forma correta. Onde o modal de visualização geral está funcional e apresentando todas as noticias inseridas pelo usuário.                                                                                             |
<hr>

| Caso de teste         	| CT-05 - Edição do perfil de usuário funcional                                                                                                                                                                                                                 	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-08 - Permitir que os usuários comuns realizem a edição de seu perfil.<br>                                                                                                                                   	|
| Objetivo do teste     	| Verificar se a edição do perfil das entidades está funcionando corretamente.                                                                                                                                                                                 	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no botão ENTRAR localizado na barra de navegação lateral.<br>4) Clicar no link que redireciona para a parte de login.<br>5) Preencher os dados e selecionar "Quero descartar meus materiais".<br>6) Editar os dados e clicar no botão Editar. 	|
| Critérios de êxito    	| - Mostrar um alerta informando que o perfil foi editado com sucesso.<br>- Reload da página com as informações editadas.<br>- Aba de LocalStorage com os dados já inseridos.
| Resultado do Teste      | Ao acessar a tela de perfil de usuário por todos os links disponíveis do site, verificou-se que o acesso ocorre de forma correta. Ao preencher os campos de perfil com dados, verificou-se que as informações são salvas, mediante a mensagem de confirmação de edição. Onde o acesso posterior apresenta as informações editadas.                                                                                             |
<hr>