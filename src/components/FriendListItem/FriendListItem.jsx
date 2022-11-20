export const FriendListItem = ({ avatar, name, isOnLine }) => {
  return (
    <li class="item">
      <span class="status">{isOnLine}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
