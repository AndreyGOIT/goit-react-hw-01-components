import PropTypes from 'prop-types';
import { bool } from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnLine, id }) => {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnLine}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnLine: bool,
};
