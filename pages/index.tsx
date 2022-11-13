import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import AreaOfFocusController from '../components/AreaOfFocusController';

const Home: NextPage = () => {
  const [catPerson, setCatPerson] = React.useState(false);
  const [dogPerson, setDogPerson] = React.useState(false);

  const handleCatChange = () => {
    setCatPerson(!catPerson);
  };

  const handleDogChange = () => {
    setDogPerson(!dogPerson);
  };

  const list = [
    {
      id: 'cat',
      text: 'Cat',
      handleClick: handleCatChange,
      person: catPerson,
    },
    {
      id: 'dog',
      text: 'Dog',
      handleClick: handleDogChange,
      person: dogPerson,
    },
  ];

  return (
    <>
      <Main>
        <AreaOfFocusController all_areas_of_focus={list} />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: grid;
  place-content: center;
  height: calc(100vh - 56px);
`;

export default Home;
