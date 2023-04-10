import React, { useState, useEffect } from 'react';
import '../index.css';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from '@ant-design/icons';
import Header from './header';

interface DataType {
  key: string;
  codigo: number;
  tipo_de_pessoa: string;
  nome_razao_social: string;
  identificacao: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  telefone: string;
}

//função responsável por pegar o telefone e adicionar mascara para apresentar o telefone formatado na tabela
const formatTelefone = (telefone: string) => {
  return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<DataType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const handleRemover = (id: number) => {
      fetch(`http://127.0.0.1:5000/user/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
    fetch('http://127.0.0.1:5000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);

      });
  })
      .catch((error) => {
        console.error('Error:', error);
      });
    };

  const columns: ColumnsType<DataType> = [
  {
    title: 'Codigo',
    dataIndex: 'codigo',
    key: 'codigo',
  },
  {
    title: 'Tipo de pessoa',
    dataIndex: 'tipo_de_pessoa',
    key: 'tipo_de_pessoa',
  },
  {
    title: 'Nome / Razão Social',
    dataIndex: 'nome_razao_social',
    key: 'nome_razao_social',
  },
  {
    title: 'CPF / CNPJ',
    dataIndex: 'identificacao',
    key: 'identificacao',
  },
  {
    title: 'Endereço',
    dataIndex: 'endereco',
    key: 'endereco',
  },
  {
    title: 'Bairro',
    dataIndex: 'bairro',
    key: 'bairro',
  },
  {
    title: 'Cidade',
    dataIndex: 'cidade',
    key: 'cidade',
  },
  {
    title: 'CEP',
    dataIndex: 'cep',
    key: 'cep',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
    key: 'telefone',
    render: (telefone: string) => formatTelefone(telefone),
  },
  {
    title: 'Ação',
    key: 'acao',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/editar/${record.codigo}`}>Editar</Link>
        <a onClick={() => handleRemover(record.codigo)}>Remover</a>
      </Space>
    ),
  },
];

  return (
    <div>
      <Header/>
      <Table columns={columns} dataSource={users} />
    </div>
  )
}


export default UserList;