import Logo from '../../images/goit.svg';
import {
  Item,
  ItemBcg,
  AvaBorder,
  Avatar,
  Info,
  StatsList,
  FollowButton,
  UnfollowButton,
} from './Tweet.styled';
import DefaultAvatar from '../../images/defaultAvatar.png';
import axios from 'axios';
import { useState } from 'react';

const addToLocalStorage = ID => {
  const str = JSON.parse(localStorage.getItem('follows')) || [];
  str.push(ID);
  localStorage.setItem('follows', JSON.stringify(str));
};
const deleteFromLocalStorage = ID => {
  let str = JSON.parse(localStorage.getItem('follows'));
  str = str.filter(n => {
    return n !== ID;
  });
  localStorage.setItem('follows', JSON.stringify(str));
};
const ifInLocalStorage = ID => {
  let str = JSON.parse(localStorage.getItem('follows'));
  return str.includes(ID);
};

const Tweet = ({ id, name, tweets, avatar, followers }) => {
  const [count, setCount] = useState(followers);
  const [isFollow, setIsFollow] = useState(ifInLocalStorage(id));
  const [isClick, setIsClick] = useState(false);

  const followClick = async () => {
    try {
      setIsClick(true);
      await axios.put(`/${id}`, {
        followers: followers + 1,
      });
      addToLocalStorage(id);
      setIsFollow(true);
      setCount(prevState => prevState + 1);
      setIsClick(false);
    } catch (err) {
      console.log(err);
    }
  };
  const unfollowClick = async () => {
    try {
      setIsClick(true);
      await axios.put(`/${id}`, {
        followers: followers - 1,
      });
      deleteFromLocalStorage(id);
      setIsFollow(false);
      setCount(prevState => prevState - 1);
      setIsClick(false);
    } catch (err) {
      console.log(err);
    }
  };
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
          <li style={{ marginTop: 16 }}>{count} followers</li>
        </StatsList>
        {isFollow ? (
          <UnfollowButton disabled={isClick} onClick={unfollowClick}>
            Unfollow
          </UnfollowButton>
        ) : (
          <FollowButton disabled={isClick} onClick={followClick}>
            Follow
          </FollowButton>
        )}
      </Info>
    </Item>
  );
};

export default Tweet;
