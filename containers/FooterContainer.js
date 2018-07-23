import React from 'react';
import Footer from './Footer.js';
import {MODES} from "../constants/index";

const FooterContainer = () => (
    <Footer active={MODES.SCHEDULE} />
);
export default AppFooterContainer;