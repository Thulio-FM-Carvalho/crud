import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

interface Props {
  id?: number;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const EditUser: React.FC<Props> = ({ id }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [id]);

  const handleUpdateUser = (values: any) => {
    setIsLoading(true);
    fetch(`http://127.0.0.1:5000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(() => {
        setIsLoading(false);
        navigate('/users');
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
