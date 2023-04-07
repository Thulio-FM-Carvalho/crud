import React, { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const addUser = () => {
    navigate('/add'); // navegar para a rota /add
  };
  return (
    <div>
      <h1>Lista de usuários</h1>
      <Button onClick={addUser}>Adicionar usuário</Button>
    </div>
  );
};

export default Header;