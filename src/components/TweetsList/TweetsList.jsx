import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchAllUsers } from '../api/api';
import Tweet from 'components/Tweet/Tweet';
import { List } from './TweetsList.styled';

const TweetsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [allUsers, setAllUsers] = useState(fetchAllUsers().length);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    const goTweets = async () => {
      try {
        await fetchUsers(page).then(res => {
          setItems(prevState => [...prevState, ...res.data]);
        });
      } catch (e) {
        console.log(e);
      }
    };
    goTweets();

    setIsLoading(false);
  }, [page]);

  return (
    <>
      {!isLoading && (
        <>
          <List>
            {items &&
              items.map(({ avatar, user, id, tweets, followers }) => (
                <Tweet
                  key={id}
                  id={id}
                  tweets={tweets}
                  avatar={avatar}
                  user={user}
                  followers={followers}
                />
              ))}
          </List>
          {allUsers < items.length && (
            <button onClick={loadMore}>Load More</button>
          )}
        </>
      )}
    </>
  );
};

export default TweetsList;
