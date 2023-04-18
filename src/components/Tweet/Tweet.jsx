import Logo from '../../images/goit.svg';
import {
  Item,
  ItemBcg,
  AvaBorder,
  Avatar,
  Info,
  StatsList,
  StatsItem,
} from './Tweet.styled';
import DefaultAvatar from '../../images/defaultAvatar.png';

const Tweet = ({ id, name, tweets, avatar, followers }) => {
  return (
    <Item>
      <img
        src={Logo}
        alt="React Logo"
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      />
      <ItemBcg />
      <AvaBorder>
        <Avatar src={avatar || DefaultAvatar} alt="Avatar"></Avatar>
      </AvaBorder>
      <Info>
        <StatsList>
          <li>{tweets} tweets</li>
          <li style={{ marginTop: 16 }}>{followers} followers</li>
        </StatsList>
      </Info>
    </Item>
  );
};

export default Tweet;
