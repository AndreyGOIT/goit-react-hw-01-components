import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  console.log({ friends });
  return (
    <ul className={styles.listOfItems}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnLine={friend.isOnLine}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
