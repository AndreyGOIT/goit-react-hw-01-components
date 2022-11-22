import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(({ amount, currency, id, type }) => (
        <tbody>
          <tr key={id}>
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