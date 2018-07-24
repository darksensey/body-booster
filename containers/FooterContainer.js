import React from 'react';
import Footer from '../app/components/Fotter';
import {MODES} from "../constants/index";

const FooterContainer = () => (
    <Footer active={MODES.SCHEDULE} />
);
export default FooterContainer;