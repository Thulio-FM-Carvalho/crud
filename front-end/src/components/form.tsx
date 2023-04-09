import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Space, message } from 'antd';
import InputMask from 'react-input-mask';
import {
  AutoComplete,
  Button,
  Form,
  Input,
  Select,
} from 'antd';

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate('/'); // navegar para a rota /add
  };
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);

    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  };

  //verificando se o CPF já existe no banco de dados
  //disparando requisição na API passandro como parametro a identificação e a response será True ou Flase
  //Se (True), existe o CPF/CNPJ no Banco de dados, imprime a mensagem de aviso
  //Se (False) dispara a requisição para API passando os dados do formulário para o cadastro
  const response = await fetch(`http://127.0.0.1:5000/user?identificacao=${values.identificacao}`);
  const data = await response.json();
      if (data.existePessoa) {
        console.log(data.existePessoa)
        message.error('CPF/CNPJ já existente no Banco de dados.');
      } else {
        // envia o formulário para o servidor
        fetch('http://127.0.0.1:5000/add', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        navigate('/');
      };
  }

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  return (
    <div>
        <h1>CADASTRAR USUÁRIO</h1>
        <Form {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 800, margin: '0 auto' }}
          scrollToFirstError>

          <Form.Item
            name="tipoDePessoa"
            label="Tipo de pessoa"
            rules={[{ required: true, message: 'Por favor, selecione se é pesssoa física ou jurídica!' }]}>
            <Select placeholder="Selecione o tipo de pessoa">
              <Option value="Fisica">Fisica</Option>
              <Option value="Juridica">Juridica</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="nomeRazaoSocial"
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
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
              <Space size={20}>
                <Button type="primary" htmlType="submit">Salvar</Button>
                <Button type="primary" htmlType="submit" onClick={backButton}>Voltar</Button>
              </Space>
          </Form.Item>
        </Form>
    </div>
  );
};

export default UserForm;