import s from './UserInfo.module.css';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

function UserInfo({ name, tag, location, avatar }) {
    return (
        <div className={s.description}>
            <Avatar url={avatar} userName={name} />
            <p className="name">
                <b>{name}</b>
            </p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
    );
}

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default UserInfo;
