import s from './Avatar.module.css';
import PropTypes from 'prop-types';

function Avatar({ url, userName, type }) {
    return <img className={s[type]} src={url} alt={`${userName} avatar`} />;
}

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Avatar;
