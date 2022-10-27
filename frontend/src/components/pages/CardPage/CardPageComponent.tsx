import React from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../../../test/mocks';
import { Card } from '../../../types/types';

export const CardPageComponent = () => {
    const { id } = useParams();
    const cardId = id ? id : 0;

    const card: Card = cards[cardId as number];

    return (
        <div className="card-page">
            <img
                className="single-card-page__image"
                src={card.img}
                alt={card.alt}
            />
            <div className="single-card-page__description">
                <div className="single-card-page__title space-btm-sm">
                    {card.title}
                </div>
                {card.description}
            </div>
        </div>
    );
}
