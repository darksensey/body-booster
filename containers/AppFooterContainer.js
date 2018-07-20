import React from 'react';
import Footer from './Footer.js';
import {MODES} from "../constants/index";

const AppFooterContainer = () => (
    <Footer mode={MODES.ARTICLES} />
);
export default AppFooterContainer;