import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { useNavigate, useParams  } from 'react-router-dom';
import { Select } from 'antd';
import InputMask from 'react-input-mask';
import '../header.css';

interface Props {
  id?: number;
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const { Option } = Select;

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
      <h1>EDITAR USUÁRIO</h1>
          <Form {...layout}
          onFinish={handleUpdateUser}
          style={{ maxWidth: 800, margin: '0 auto' }}
          initialValues={user}>

          <Form.Item
            name="tipo_de_pessoa"
            label="Tipo de pessoa"
            rules={[{ required: true, message: 'Por favor, selecione se é pesssoa física ou jurídica!' }]}>
            <Select placeholder="Selecione o tipo de pessoa">
              <Option value="Fisica">Fisica</Option>
              <Option value="Juridica">Juridica</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="nome_razao_social"
            label="Nome"
            tooltip="Como podemos te chamar?"
            rules={[{ required: true, message: 'Por favor, digite o nome!', whitespace: true }]}>
            <Input maxLength={100}/>
          </Form.Item>

          <Form.Item
            name="identificacao"
            label="CPF / CNPJ"
            rules={[{ required: true, message: 'Por favor, digite o CPF ou CNPJ!' },{ min: 11, message: 'O CPF/CNPJ deve ter no mínimo 11 caracteres!' },{ max: 15, message: 'O CPF/CNPJ deve ter no máximo 15 caracteres!' }]}>
            <Input type="number"/>
          </Form.Item>

          <Form.Item
            name="endereco"
            label="Endereço"
            rules={[{ required: true, message: 'Por favor, digite o endereço!' }]}>
            <Input maxLength={100}/>
          </Form.Item>

          <Form.Item
            name="bairro"
            label="Bairro"
            rules={[{ required: true, message: 'Por favor, digite o bairro!' }]}>
            <Input maxLength={50}/>
          </Form.Item>

          <Form.Item
            name="cidade"
            label="Cidade"
            rules={[{ required: true, message: 'Por favor, digite a cidade!' }]}>
            <Input maxLength={60}/>
          </Form.Item>

          <Form.Item
            name="cep"
            label="CEP"
            rules={[{ required: true, message: 'Por favor, digite o CEP da sua região!' },{ min: 8, message: 'O CEP deve ter no mínimo 8 caracteres!' },{ max: 8, message: 'O CEP deve ter no máximo 8 caracteres!' }]}>
            <Input type="number"/>
          </Form.Item>

          <Form.Item
            name="estado"
            label="Estado"
            rules={[{ required: true, message: 'Por favor, digite o estado!' }]}>
            <Input maxLength={14}/>
          </Form.Item>

          <Form.Item
            name="telefone"
            label="Telefone"
            rules={[
                {
                     required: true,
                     message: 'Por favor, digite o telefone de contato!' },
                {
                     validator: (_, value) => {
                        if (value && value.replace(/[^0-9]/g, '').length < 11) {
                          return Promise.reject(new Error('Preencha o campo telefone por completo.'));
                        }
                        return Promise.resolve();
                      },
                    }
                ]}>
              <InputMask
                  mask="(99) 99999-9999"
                  maskChar="_"
                  className="ant-input"
                  style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: "4px 11px",
                    color: "rgba(0, 0, 0, 0.88)",
                    fontSize: "14px",
                    lineHeight: "1.5714285714285714",
                    listStyle: "none",
                    fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
                    position: "relative",
                    display: "inline-block",
                    width: "100%",
                    minWidth: 0,
                    backgroundColor: "#ffffff",
                    backgroundImage: "none",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#d9d9d9",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                  }}/>
          </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>Atualizar</Button>
            <Button onClick={() => navigate('/')}>Cancelar</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
