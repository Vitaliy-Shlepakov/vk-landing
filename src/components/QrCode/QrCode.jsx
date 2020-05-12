import React from 'react';
import './QrCode.sass';
import qrCode from './qr-code.svg';

const QrCode = () => {
    return (
        <div className="qrCode">
            <div className="qrCode__code">
                <img src={qrCode} alt="ВКонтакте"/>
            </div>
            <div className="qrCode__text">
                Отсканируйте QR-КОД с помощью телефона, чтобы скачать ВКонтакте.
            </div>
        </div>
    );
};

export default QrCode;