import React from 'react';
import './ShopBtn.sass';

const ShopBtn = ({href, name}) => {
    return (
        <a
            href={href}
            className={`shop-btn shop-btn--${name}`}
        >
        </a>
    );
};

export default ShopBtn;