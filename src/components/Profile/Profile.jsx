import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ userName, tag, location, avatar, followers, views, likes }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={userName} />
        <UserName>{userName}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};
Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
