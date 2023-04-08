import React, { useState } from 'react';
import '../index.css';
import type { CascaderProps } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Space } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';


const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate('/'); // navegar para a rota /add
  };
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);

    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  };

  fetch('http://127.0.0.1:5000/add', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600, margin: '0 auto' }}
      scrollToFirstError
    >
      <Form.Item
        name="tipoDePessoa"
        label="Tipo de pessoa"
        rules={[{ required: true, message: 'Por favor, selecione se é pesssoa física ou jurídica!' }]}
      >
        <Select placeholder="Selecione o tipo de pessoa">
          <Option value="fisica">Fisica</Option>
          <Option value="juridica">Juridica</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="nomeRazaoSocial"
        label="Nome"
        tooltip="Como podemos te chamar?"
        rules={[{ required: true, message: 'Por favor, digite seu nome!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="identificacao"
        label="CPF / CNPJ"
        rules={[{ required: true, message: 'Por favor, digite seu CPF ou CNPJ!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="endereco"
        label="Endereco"
        rules={[{ required: true, message: 'Por favor, digite seu endereço!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="bairro"
        label="Bairro"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="cidade"
        label="Cidade"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="cep"
        label="CEP"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="estado"
        label="Estado"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="telefone"
        label="Telefone"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
      <Space size={20}>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
        <Button type="primary" htmlType="submit" onClick={backButton}>Voltar</Button>
        </Space>
      </Form.Item>
      
    </Form>
  );
};

export default UserForm;