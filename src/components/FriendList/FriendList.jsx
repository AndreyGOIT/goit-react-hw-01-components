export const FriendList = ({ friends, children }) => {
  console.log({ friends });
  return <ul class="friend-list">{children}</ul>;
};
