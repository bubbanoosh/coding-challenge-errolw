import React from 'react';
import AppConfig from '../../appConfig/appConfig'
import kogan from '../../assets/kogan.png'

function getAuthorName() {
    let pckg = require('../../../package.json');
    return pckg.author;
}

const Header = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1><img src={kogan} alt={AppConfig.APP_HEADING} /></h1>
                <h2>Challenger: {getAuthorName()}</h2>
            </div>
        </div>
    );
}

export default Header;