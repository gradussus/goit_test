import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/api';
import Tweet from 'components/Tweet/Tweet';
import { List } from './TweetsList.styled';

const TweetsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const firstPage = async () => {
      try {
        await fetchUsers().then(res => {
          setItems(() => res.data);
        });
      } catch (e) {
        console.log(e);
      }
    };
    firstPage();
    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoading && (
        <List>
          {console.log(items)}
          {items &&
            items.map(({ avatar, user, id, tweets }) => (
              <Tweet
                key={id}
                id={id}
                tweets={tweets}
                avatar={avatar}
                user={user}
              />
            ))}
        </List>
      )}
    </>
  );
};

export default TweetsList;
