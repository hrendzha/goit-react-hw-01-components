import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

function FriendListItem({ avatar, name, isOnline }) {
    const statusClass = isOnline ? s.online : s.offline;

    return (
        <>
            <span className={statusClass}></span>
            <Avatar url={avatar} userName={name} type="avatarInFriendList" />
            <p className="name">{name}</p>
        </>
    );
}

FriendListItem.defaultProps = {
    isOnline: false,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
