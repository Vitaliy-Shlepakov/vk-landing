import React from 'react';
import './FixedArea.sass';
import logo from './logo.svg';
import ShopBtn from "../ShopBtn/ShopBtn";
import QrCode from "../QrCode/QrCode";

const FixedArea = () => {
    return (
        <div className="fixedArea">
            <div className="fixedArea__top">
                <div className="fixedArea__logo">
                    <img src={logo} alt=""/>
                </div>
                <h1 className="fixedArea__title">
                    ВКонтакте всегда с вами
                </h1>
                <p className="fixedArea__description">
                    {/*Установите на телефон официальное приложение ВКонтакте и следите за важными событиями из жизни близких, где бы Вы не находились!*/}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt ea eos incidunt labore minima mollitia, quos repellendus saepe voluptatibus?
                </p>
                <div className="fixedArea__actions">
                    <div className="fixedArea__action">
                        <ShopBtn
                            href="#"
                            name="apple-store"
                        />
                    </div>
                    <div className="fixedArea__action">
                        <ShopBtn
                            href="#"
                            name="google-play"
                        />
                    </div>
                </div>
                <div className="fixedArea__qrCode">
                    <QrCode/>
                    <p className="fixedArea__proposal">
                        или&nbsp;
                        <a href="#" className="fixedArea__sms-link">
                            получить ссылку сообщением на телефон
                        </a>
                    </p>
                </div>
            </div>
            <div className="fixedArea__footer">
                &copy;&nbsp;2020&nbsp;
                <a href="#" className="fixedArea__vk">Команда</a>
            </div>
        </div>
    );
};

export default FixedArea;