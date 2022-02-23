import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import css from './StatList.module.css';

export function StatList({ stats }) {
  return (
    <ul className={css.stat__list}>
      {stats.map(item => (
        <li
          className={css.item}
          key={item.id}
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
