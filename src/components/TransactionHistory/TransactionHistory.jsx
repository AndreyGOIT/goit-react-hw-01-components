import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.upperRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(({ amount, currency, id, type }) => (
        <tbody className={styles.tablerow}>
          <tr key={id} className={styles.bodyRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = PropTypes.arrayOf(
  PropTypes.objectOf(
    PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
      id: PropTypes.string,
      type: PropTypes.string,
    })
  )
).isRequired;
