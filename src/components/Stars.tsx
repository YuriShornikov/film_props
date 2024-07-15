import React from 'react';
import { Star } from './Star';
import { StarsProps } from '../types/types';

export const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }

    const starsArray = Array.from({ length: count }, (_, index) => <Star key={index} />);

    return (
        <ul className="card-body-stars u-clearfix">
            {starsArray}
        </ul>
    );
};
