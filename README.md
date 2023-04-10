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

# Configurações para execução da aplicação
Antes de tudo, é necessário criar um banco de dados no pgAdmin 4. Siga o exemplo do GIF logo abaixo de como criar um banco de dados no pgAdmin 4:
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
VALUES ('Física', 'João da Silva','06319295588', 'Rua das Flores, 123', 'Centro', 'São Paulo', '01234567', 'SP', '1198765432');
```
Com o banco de dados e a tabela criados, você pode prosseguir com a execução da aplicação.

Para abrir o projeto no PyCharm, siga os seguintes passos:

1. Na tela de launcher do PyCharm, clique em "Open".
2. Procure o local onde o projeto está salvo e selecione-o. Se o projeto foi baixado como um arquivo zip, é necessário extrair os arquivos antes de abri-lo no PyCharm.
3. Clique em "OK" para abrir o projeto no PyCharm.

Depois de abrir o projeto no PyCharm, você poderá observar a seguinte estrutura de pastas do projeto:

![image](https://user-images.githubusercontent.com/48070981/230822678-9ea93bf5-0f08-4555-90c0-634a8f9f2207.png)


Para executar a aplicação completa, siga estes passos:

1. Abra o PyCharm e abra o terminal.
2. No terminal, digite ```cd .\back-end\``` para entrar na pasta raiz do back-end.
3. Digite ```.\venv\Scripts\activate``` para ativar o ambiente virtual Python. Caso o comando não funcionar, digite ```python -m venv venv``` para criar um ambiente virtual e depois digite ```.\venv\Scripts\activate``` para ativá-lo.
4. Digite ```pip install -r requirements.txt``` para instalar todas as dependências da aplicação back-end.
5. Abra o arquivo config.py dentro do subdiretório back-end e configure o acesso ao banco de dados que você criou anteriormente.
6. Feito isso, clique com o botão direito do mouse no arquivo app.py e clique em ➤ Run 'app'.
7. Agora, deixe o back-end rodando e abra um novo terminal no PyCharm.
8. No novo terminal, digite ```cd ..``` para sair da pasta back-end.
9. Digite ```cd .\front-end\``` para entrar na pasta raiz do front-end.
10. Digite ```npm install``` para instalar todas as dependências da aplicação front-end.
11. Digite ```npm start``` para iniciar a aplicação front-end.
12. Aguarde a aplicação front-end iniciar e o navegador de internet abrir automaticamente com a aplicação em execução.
13. Pronto, agora você pode testar a aplicação completa! Lembre-se de deixar o back-end rodando enquanto utiliza a aplicação front-end. Quando terminar, basta fechar os terminais e o PyCharm. 🏆🏆🏆

# Autores

| [<img src="https://avatars.githubusercontent.com/u/48070981?s=400&v=4" width=115><br><sub>Thulio Carvalho</sub>](https://github.com/Thulio-FM-Carvalho) |  
| :---: |

