import Logo from '../../images/goit.svg';
import { Item } from './Tweet.styled';

const Tweet = ({ id, name, tweets, avatar }) => {
  return (
    <Item>
      <img
        src={Logo}
        alt="React Logo"
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      />
    </Item>
  );
};

export default Tweet;
