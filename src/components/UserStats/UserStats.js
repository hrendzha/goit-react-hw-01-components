import s from './UserStats.module.css';
import PropTypes from 'prop-types';

function UserStats({ stats: { followers, views, likes } }) {
    return (
        <ul className={s.stats}>
            <li>
                <span className="label">Followers</span>
                <span className="quantity">
                    <b>{followers}</b>
                </span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">
                    <b>{views}</b>
                </span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">
                    <b>{likes}</b>
                </span>
            </li>
        </ul>
    );
}

UserStats.propTypes = {
    stats: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};

export default UserStats;
