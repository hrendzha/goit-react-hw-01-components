import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td className={s.type}>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default TransactionHistory;
