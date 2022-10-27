import { Layout } from 'antd';
import React from 'react';
import { FooterComponent } from './FooterComponent';
import { HeaderComponent } from './HeaderComponent';

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutProps) => {
    const { Content } = Layout;

    return (
        <Layout>
            <HeaderComponent />

            <Content className="content-block space-btm-md-padding">
                {children}
            </Content>

            <FooterComponent />
        </Layout>
    );
}

export default LayoutComponent;
