# Plano de Testes de Software

# FUNCIONALIDADES ATUAIS

- CONTEÚDO DO SITE E SIDEBAR RESPONSIVOS.
- CADASTRO DE USUÁRIOS QUE QUEREM DESCARTAR.
- CADASTRO DE EMPRESA COLETORA.
- LOGIN FUNCIONAL PARA USUÁRIOS COMUNS E EMPRESAS.
- RECUPERAR SENHA PARA USUÁRIOS COMUNS E EMPRESAS.
- BOTÃO DE SAIR(LOGOUT) FUNCIONAL.
- EDITAR PERFIL **(ENDEREÇO, CEP, TELEFONE, CIDADE)**.
- ABA NOTÍCIAS COM JANELA MODAL.
- FILTRAR EMPRESAS POR MATERIAIS.


# TO DO
- ARRUMAR DOCUMENTAÇÃO ETAPA 3 E 4.
- EDIÇÃO DA PERFIL DA EMPRESA COLETORA.
- INTEGRAR AS EMPRESAS COLETORAS COM O FILTRO DE EMPRESAS.

# DOING
- PLANO DE TESTES.
- TESTES.
- HOSPEDAR APLICAÇÃO.

# DONE
- FOTO DE PERFIL PARA USUÁRIOS COMUNS E EMPRESAS.
- SOU COLETOR DE LIXO ELETRÔNICO => CADASTRAR.
- MUDAR INSTITUCIONAL PARA QUEM SOMOS.
- CADASTRO DE NOTÍCIAS FUNCIONAL.
- UNIFICAR OS CADASTROS E O LOGIN.


# PLANOS DE TESTE
| Caso de teste         	| CT-01 - Cadastro de entidades                                                                                                                                                                                	|
|-----------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-01 - Permitir que os usuários comuns façam cadastro.<br>RF-02 - Permitir que empresas coletoras façam cadastro.                                                                                                  	|
| Objetivo do teste     	| Verificar se o cadastro das entidades está funcionando corretamente.                                                                                                                                         	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no botão ENTRAR localizado na barra de navegação lateral.<br>4) Preencher os dados e selecionar o tipo de usuário.                     	|
| Critérios de êxito    	| - Mostrar um alerta informando que o registro foi realizado com sucesso.<br>- Redirecionamento para a parte de Login do site.<br>- Deve haver uma chave USUÁRIO ou EMPRESA na parte de LocalStorage do site. 	|

<hr>

| Caso de teste         	| CT-02 - Login de entidades funcional                                                                                                                                                                                                                 	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-03 - Permitir que os usuários comuns façam login.<br>RF-04 - Permitir que empresas coletoras façam login.                                                                                                                                      	|
| Objetivo do teste     	| Verificar se o login das entidades está funcionando corretamente.                                                                                                                                                                                 	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no botão ENTRAR localizado na barra de navegação lateral.<br>4) Clicar no link que redireciona para a parte de login.<br>5) Preencher os dados e selecionar o tipo de usuário. 	|
| Critérios de êxito    	| - Mostrar um alerta informando que o login foi realizado com sucesso.<br>- Redirecionamento para a parte de Perfil do usuário.                                                                                                                       	|
<hr>

| Caso de teste         	| CT-03 - Registro de notícias                                                                                                              	|
|-----------------------	|-------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-05 - Permitir que usuários específicos façam o cadastro de notícias.                                                                	|
| Objetivo do teste     	| Verificar se o cadastro de notícias está funcionando corretamente.                                                                        	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Acessar /registro-noticias.html<br>4) Informar o título, descrição e data. 	|
| Critérios de êxito    	| - Mostrar um alerta informando que o registro da notícia foi realizado com sucesso.<br>- Redirecionamento para a parte de Notícias.       	|
<hr>

| Caso de teste         	| CT-04 - Visualização completa de notícias                                                                                                                                                                                                	|
|-----------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-05 - Permitir que usuários específicos façam o cadastro de notícias.<br>RF-06 - Permitir que os usuários possam ver o corpo das notícias.<br>RF-07 - Permitir que os usuários possam ler a notícia completa pelo modal. 	|
| Objetivo do teste     	| Verificar se a leitura das notícias está funcionando corretamente.                                                                                                                                                         	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no link NOTICIAS localizado na barra de navegação lateral ou rodapé.<br>4) Selecionar notícia e clicar em Ler mais.                                  	|
| Critérios de êxito    	| - Mostrar todas as notícias cadastradas anteriormente.<br>- Mostrar um modal para a visualização completa da notícia.                                                                                                      	|
<hr>

| Caso de teste         	| CT-05 - Edição do perfil de usuário funcional                                                                                                                                                                                                                 	|
|-----------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Requisitos associados 	| RF-08 - Permitir que os usuários comuns realizem a edição de seu perfil.<br>                                                                                                                                   	|
| Objetivo do teste     	| Verificar se a edição do perfil das entidades está funcionando corretamente.                                                                                                                                                                                 	|
| Passos                	| 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Clicar no botão ENTRAR localizado na barra de navegação lateral.<br>4) Clicar no link que redireciona para a parte de login.<br>5) Preencher os dados e selecionar "Quero descartar meus materiais".<br>6) Editar os dados e clicar no botão Editar. 	|
| Critérios de êxito    	| - Mostrar um alerta informando que o perfil foi editado com sucesso.<br>- Reload da página com as informações editadas.<br>- Aba de LocalStorage com os dados já inseridos.                             
