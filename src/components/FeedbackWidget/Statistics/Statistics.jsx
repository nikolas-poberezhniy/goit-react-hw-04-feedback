import { StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = data => {
  return Object.keys(data).map(e => {
    //костыль для того, чтобы соответствовало макету, так как, я
    //названия ключей пропросов использую в верстке, а positivePercentage
    //единственный выбивается
    if (e === 'positivePercentage') {
      return (
        <StatisticsItem key={e}>Positive feedback: {data[e]}%</StatisticsItem>
      );
    }
    return (
      <StatisticsItem key={e}>
        {e}: <span>{data[e]}</span>
      </StatisticsItem>
    );
  });
};

Statistics.propTypes = {
  data: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
