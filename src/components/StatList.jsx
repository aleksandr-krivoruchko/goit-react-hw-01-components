import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export function StatList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(item => (
        <li className="item" key={item.id}>
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

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const random =  `${getRandomHexColor()}`
