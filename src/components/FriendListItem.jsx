import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? 'status-green' : 'status-red'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
