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
  id: number;
  tipoDePessoa: string;
  nomeRazaoSocial: string;
  identificacao: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  telefone: string;
}


const columns: ColumnsType<DataType> = [
  {
    title: 'Codigo',
    dataIndex: 'codigo',
    key: 'codigo',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tipo de pessoa',
    dataIndex: 'tipoDePessoa',
    key: 'tipoDePessoa',
    render: (text) => <a>{text}</a>,

  },
  {
    title: 'Nome / Razão Social',
    dataIndex: 'nomeRazaoSocial',
    key: 'nomeRazaoSocial',
    render: (text) => <a>{text}</a>,
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
  },
  {
    title: 'Ação',
    key: 'acao',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/editar/${record.id}`}>Editar</Link>
        <a>Remover</a>
      </Space>
    ),
  },
];

/*
const data: DataType[] = [
  {
    key: '1',
    id: 1,
    tipoDePessoa: 'Fisica',
    nomeRazaoSocial: 'Thulio Freires Maia',
    identificacao: '06319293128',
    endereco: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    id: 2,
    tipoDePessoa: 'Juridica',
    nomeRazaoSocial: 'Jamel Pereira Chaves Eirelli',
    identificacao: '091002280400152',
    endereco: 'Rua copacaíba, n 14'
  },
];
*/

const UserList: React.FC = () => {
  const [users, setUsers] = useState<DataType[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <Header/>
      <Table columns={columns} dataSource={users} />;
    </div>
  )
}


export default UserList;