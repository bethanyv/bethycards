import { Layout } from 'antd';
import React from 'react';
import './App.css';
import CardComponent from './components/CardComponent';
import HeaderContentComponent from './components/HeaderContentComponent';
import MenuComponent from './components/MenuComponent';

const App = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <div className="app">
      <Layout>
        <Header className="header-content space-btm-md">
          <HeaderContentComponent />
          <MenuComponent />
        </Header>

        <Content className="content-block space-btm-md-padding">
          <CardComponent />
        </Content>

        <Footer className="footer-block">
          All cards by Bethy herself
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
