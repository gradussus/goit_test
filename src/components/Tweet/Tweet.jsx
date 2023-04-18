import Logo from '../../images/goit.svg';
import { Item, ItemBcg, AvaBorder } from './Tweet.styled';

const Tweet = ({ id, name, tweets, avatar }) => {
  return (
    <Item>
      <img
        src={Logo}
        alt="React Logo"
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      />
      <ItemBcg />
      <AvaBorder></AvaBorder>
    </Item>
  );
};

export default Tweet;
