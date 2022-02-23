import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li className={css.friend} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
