import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const LinkLogo = ({to, ...props}) => {
    return (
        <Link to={to}>
        <img {...props}/>
    </Link>
    );
};

LinkLogo.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};
LinkLogo.defaultProps = {
   to:'/'
}
export default LinkLogo;