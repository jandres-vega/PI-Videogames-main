import React from 'react';
import '../styles/Home.css';
import Header from '../containers/Header';
import ListGame from '../containers/ListGame';
const Home = () => {
  return (
    <div>
      <Header />
      <ListGame />
    </div>
  );
};

export default Home;
