import React from 'react';
import UserList from './components/userList';
import Form from './components/form';
import { Layout } from 'antd';
import { Button } from 'antd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const { Header } = Layout;

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList/>,
  },
  {
    path: "/editar/:id",
    element: <Form />,
  },
  {
    path: "/add/",
    element: <Form />,
  }
]);

const App: React.FC = () =>
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>;

export default App;