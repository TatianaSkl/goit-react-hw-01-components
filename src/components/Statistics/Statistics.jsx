import PropTypes from 'prop-types';
import { StatisticItem } from 'components';
import { Box, StatisticsList, StatisticTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
};
