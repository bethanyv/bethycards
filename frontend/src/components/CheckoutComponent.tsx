import { Layout } from 'antd';
import React from 'react';
import CheckoutContent from './CheckoutContent';
import HeaderContentComponent from './HeaderContentComponent';

const App = () => {
    const { Header, Content, Footer } = Layout;

    return (
        <div className="app">
            <Layout>
                <Header className="header-content space-btm-md">
                    <HeaderContentComponent />
                </Header>

                <Content className="content-block space-btm-md-padding">
                    <CheckoutContent />
                </Content>

                <Footer className="footer-block">
                    All cards by Bethy herself
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
