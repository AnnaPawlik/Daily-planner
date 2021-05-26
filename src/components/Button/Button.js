import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({children, secondary, ...props}) => {

    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <button className={buttonClass}{...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    secondary: PropTypes.bool,
}

export default Button;