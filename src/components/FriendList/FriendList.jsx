import PropTypes from 'prop-types';
import { FriendListItem } from 'components';
import { FriendListBox } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListBox>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
};
