import React from 'react';
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="fondo">
            <div className="center">
                <div className="outer circle">
                    <Link to="/home">
                        <button type="button">START</button>
                        <span />
                        <span />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;