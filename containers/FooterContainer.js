import React from 'react';
import Footer from '../app/components/Fotter';
import {connect} from "react-redux";
import {setMode} from '../actions';

const mapStateToProps = (state) => ({
    mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
    setMode(mode) {
        console.log('dispatch', mode);
        dispatch(setMode(mode));
    }
});

const FooterContainer = ({mode, setMode}) => (
    <Footer mode={mode} setMode={setMode} />
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterContainer);