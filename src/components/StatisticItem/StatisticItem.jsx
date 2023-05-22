import PropTypes from 'prop-types';
import { StatisticBox, StatisticText, StatisticCounter } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox>
      <StatisticCounter>{label}</StatisticCounter>
      <StatisticText>{percentage}%</StatisticText>
    </StatisticBox>
  );
};
StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
