import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomColor from '../../js/getRandomColor';

function Statistics({ title, stats }) {
    return (
        <>
            {title && (
                <div className={s.titleWrapper}>
                    <h2 className="title">{title}</h2>
                </div>
            )}

            <ul className="grid">
                {stats.map(stat => (
                    <li
                        className={`${s.statsItem} gridItem`}
                        style={{
                            backgroundColor: getRandomColor(),
                        }}
                        key={stat.id}
                    >
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
        }),
    ).isRequired,
};

export default Statistics;
