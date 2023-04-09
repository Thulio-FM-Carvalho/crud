import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { useNavigate, useParams  } from 'react-router-dom';

interface Props {
  id?: number;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const EditUser: React.FC<Props> = () => {
  const [user, setUser] = useState({
  tipoDePessoa: '',
  nomeRazaoSocial: '',
  identificacao: '',
  endereco: '',
  bairro: '',
  cidade: '',
  cep: '',
  estado: '',
  telefone: '',
});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`http://127.0.0.1:5000/user/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          console.log("DADOS VINDO DA API", data)
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const handleUpdateUser = (values: any) => {
    setIsLoading(true);
    console.log(values)
    fetch(`http://127.0.0.1:5000/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Editar usuário</h1>
      <Form {...layout} onFinish={handleUpdateUser} initialValues={user}>
        <Form.Item name="tipoDePessoa" label="Tipo de pessoa">
          <Input />
        </Form.Item>
        <Form.Item name="nomeRazaoSocial" label="Nome / Razão Social">
          <Input />
        </Form.Item>
        <Form.Item name="identificacao" label="CPF / CNPJ">
          <Input />
        </Form.Item>
        <Form.Item name="endereco" label="Endereço">
          <Input />
        </Form.Item>
        <Form.Item name="bairro" label="Bairro">
          <Input />
        </Form.Item>
        <Form.Item name="cidade" label="Cidade">
          <Input />
        </Form.Item>
        <Form.Item name="cep" label="CEP">
          <Input />
        </Form.Item>
        <Form.Item name="estado" label="Estado">
          <Input />
        </Form.Item>
        <Form.Item name="telefone" label="Telefone">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Atualizar
            </Button>
            <Button onClick={() => navigate('/')}>Cancelar</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
