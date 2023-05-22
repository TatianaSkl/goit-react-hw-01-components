import PropTypes from 'prop-types';
import { Transaction, THead, TrHead, Tr, Th, TBoby, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <THead>
        <TrHead>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TrHead>
      </THead>

      <TBoby>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </TBoby>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
