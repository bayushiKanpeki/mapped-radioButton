import React from 'react';
import styled from 'styled-components';

type Props = {};

const sample = (props: Props) => {
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
    <Main>
      <br />
      <div style={{ display: 'grid' }}>
        {list.map(x => (
          <label>
            <input type="radio" checked={x.person} onClick={x.handleClick} />
            {x.text}
          </label>
        ))}
      </div>
    </Main>
  );
};

const Main = styled.main`
  display: grid;
  place-content: center;
  height: calc(100vh - 56px);
`;

const RadioButton = styled.input``;

export default sample;
