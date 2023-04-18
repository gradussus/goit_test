const Tweet = ({ id, name, tweets, avatar }) => {
  return (
    <li>
      <>{id}</>
      <div className="App">
        <img src="../../images/goit.svg" alt="React Logo" />
      </div>
    </li>
  );
};

export default Tweet;
