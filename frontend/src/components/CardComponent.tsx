import { Button, Card, Col, Row } from 'antd';
import React from 'react';

const CardComponent = () => {
    const { Meta } = Card;
    const rowGutter = 36;
    const colSpan = 6;

    return (
        <div className="card-grid">
            <Row gutter={[rowGutter, rowGutter]} style={{ marginBottom: "2rem" }}>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
            </ Row>
            <Row gutter={[rowGutter, rowGutter]}>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
                <Col span={colSpan} >
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt="example" src="./img/frog.jpg" />}
                    >
                        <Meta title="Happy Froggy Card" description="A happy screaming froggy" />
                    </Card>
                </Col>
            </ Row>
        </div >
    );
}

export default CardComponent;
