import propTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statistics}>
      <li className={css.statisticsItem}>Good: {good}</li>
      <li className={css.statisticsItem}>Neutral: {neutral}</li>
      <li className={css.statisticsItem}>Bad: {bad}</li>
      <li className={css.statisticsItem}>Total: {total}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
