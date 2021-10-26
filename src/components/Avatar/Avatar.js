import s from './Avatar.module.css';
import PropTypes from 'prop-types';

function Avatar({ url, userName }) {
    return <img className={s.avatar} src={url} alt={`${userName} avatar`} />;
}

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
};

export default Avatar;
