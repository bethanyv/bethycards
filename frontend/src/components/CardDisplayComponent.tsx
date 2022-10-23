import { Card, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { cards } from '../test/mocks';

export const CardDisplayComponent = () => {
    const { Meta } = Card;
    const rowGutter = 36;
    const colSpan = 6;

    const displayCards = cards.map((card) => {
        return (
            <Col span={colSpan} >
                <Link to={`item/${card.id}`}>
                    <Card
                        hoverable
                        className="card"
                        cover={<img alt={card.alt} src={card.img} />}
                    >
                        <Meta title={card.title} description={card.description} />
                    </Card>
                </Link>
            </Col>
        );
    })

    return (
        <div className="card-grid">
            <Row gutter={[rowGutter, rowGutter]} style={{ marginBottom: "2rem" }}>
                {displayCards}
            </ Row>
        </div >
    );
}
