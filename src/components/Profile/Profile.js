import UserInfo from '../UserInfo/UserInfo';
import UserStats from '../UserStats/UserStats';

function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div>
            <UserInfo name={name} tag={tag} location={location} avatar={avatar} />
            <UserStats stats={stats} />
        </div>
    );
}

export default Profile;
