import Head from 'next/head';
import styled from 'styled-components';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import AreaOfFocusController from '../components/AreaOfFocusController';

const Home: NextPage = () => {
  const list = [
    {
      id: 'cat',
      text: 'Cat',
    },
    {
      id: 'dog',
      text: 'Dog',
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
