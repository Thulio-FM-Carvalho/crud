# CRUD

* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Funcionalidades](#funcionalidades)
* [Aplicação](#aplicação)
* [Ferramentas utilizadas](#ferramentas-utilizadas)
* [Frameworks e tecnologias utilizadas](#frameworks-e-tecnologias-utilizadas)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)

# Descrição do projeto
Este projeto é um CRUD de cadastro de clientes desenvolvido na linguagem Python usando a lib Flask para a construção da API Back-end 
e a linguagem Javascript usando a lib React para construção do Front-end. O projeto consiste em aplicação web que permite cadastrar, listar, editar e remover um usuário. 

# Funcionalidades
 - ✔️ `Funcionalidade 1`: Adicionar um usuário contendo o Tipo(Pessoa física / Jurídica), nome, CPF/CNPJ, endereço, bairro, cidade, cep, estado e telefone.
 - ✔️ `Funcionalidade 2`: Listar todos os usuários.
 - ✔️ `Funcionalidade 3`: Editar um usuário.
 - ✔️ `Funcionalidade 4`: Remover um usuário.
 
# Aplicação

![GIF 09-04-2023 23-28-04](https://user-images.githubusercontent.com/48070981/230814212-969d0be4-6cef-409e-96d8-482c4156d5ad.gif)
# Ferramentas utilizadas
- `PyCharm`
- `StackBlitz`
- `PgAdmin4`

# Frameworks e tecnologias utilizadas
- `Flask`
- `SQLAlchemy`
- `Paradigma de Orientação a objetos`
- `Padrão MVC(Model, View Controller)`
- `Python`
- `JavaScript / Typescript`
- `HTML e CSS`
- `SQL`
- `React`
- `antd`

# Abrir e rodar o projeto
Antes de tudo, será necessário criar um banco de dados no pgAdmin 4. Segue um GIF logo abaixo de como criar um banco de dados no pgAdmin 4:
![GIF 10-04-2023 00-19-17](https://user-images.githubusercontent.com/48070981/230819590-4eb64269-8720-4681-a589-adc499fa0529.gif)
Segue o Script usado no gif:
```
CREATE TABLE users (
    codigo SERIAL PRIMARY KEY NOT NULL,
    tipo_de_pessoa VARCHAR(10),
    nome_razao_social VARCHAR(100),
    identificacao VARCHAR(14),
    endereco VARCHAR(100),
    bairro VARCHAR(50),
    cidade VARCHAR(60),
    cep VARCHAR(8),
    estado VARCHAR(14),
    telefone VARCHAR(15)
);

INSERT INTO users (tipo_de_pessoa, nome_razao_social, identificacao, endereco, bairro, cidade, cep, estado, telefone)
VALUES ('Física', 'João da Silva','06319295588', 'Rua das Flores, 123', 'Centro', 'São Paulo', '01234567', 'SP', '1198765432'); 3
```
Após baixar o projeto, você pode abrir com o PyCharm. Para isso, na tela de launcher clique em:

- Open;
- Procure o local onde o projeto está e o selecione (Caso o projeto seja baixado via zip, é necessário extraí-lo antes de procurá-lo);
- Por fim clique em OK;

Com o projeto aberto no pycharm, agora você pode observar a seguinte estrutura de pasta:

![image](https://user-images.githubusercontent.com/48070981/230822678-9ea93bf5-0f08-4555-90c0-634a8f9f2207.png)

Agora abra o terminal do Pycharm, digite: ```cd .\back-end\``` para entrar na pasta raiz do back-end, digite: ```.\venv\Scripts\activate``` para ativar o ambiente virtual python e depois digite: ```pip install requirements.txt``` para instalar todas as dependências da aplicação back-end. Com as dependências instaladas, no subdiretório ```back-end``` abra o arquivo ```config.py``` configure o acesso do banco de dados que você acabou de criar no passo anterior. Feito as configurações, agora clique com o botão direito do mouse no arquivo ```app.py``` e clique em ```➤ Run 'app''``` . Feito isso, agora o back-end estará rodando.

Agora abra o terminal do PyCharm, digite: ```deactivate``` para desativar o ambiente virtual python, digite ```cd ..```, depois ```cd .\front-end\ ``` para entrar na pasta raiz do front-end. Agora digite ```npm install``` para instalar todas as dependências da aplicação front-end. Com as dependências instaladas, agora digite ```npm start``` para inicar a aplicação front-end. Feito isso, será aberto automaticamente uma aba no seu navegador de internet com aplicação já em execução! Agora é só testar! 🏆🏆🏆


# Autores

| [<img src="https://avatars.githubusercontent.com/u/48070981?s=400&v=4" width=115><br><sub>Thulio Carvalho</sub>](https://github.com/Thulio-FM-Carvalho) |  
| :---: |

