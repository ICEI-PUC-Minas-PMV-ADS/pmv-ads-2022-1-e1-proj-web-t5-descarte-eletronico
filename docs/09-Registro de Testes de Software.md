# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

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
