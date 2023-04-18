import Logo from '../../images/goit.svg';
import { Item, PictureBox } from './Tweet.styled';

const Tweet = ({ id, name, tweets, avatar }) => {
  return (
    <Item>
      <img
        src={Logo}
        alt="React Logo"
        style={{ position: 'absolute', top: '20px', left: '20px' }}
      />
      <PictureBox />
    </Item>
  );
};

export default Tweet;
