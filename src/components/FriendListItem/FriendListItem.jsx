import PropTypes from 'prop-types';
import { bool } from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  console.log({ avatar, name, isOnline, id });
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: bool,
};
