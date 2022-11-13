import React from 'react';
import styled from 'styled-components';

type Props = {};

const AreasOfFocusSelector = ({ all_areas_of_focus, onSelect }: any) => {
  console.log('JAJAJA:', all_areas_of_focus);

  return (
    <Main>
      <div style={{ display: 'grid' }}>
        {all_areas_of_focus.map(x => (
          <Button>
            <label key={x.id}>
              <input type="radio" checked={x.checked} onClick={x.handler} />
              {x.text}
            </label>
          </Button>
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

const Button = styled.button`
  color: tomato;
  padding: 4px 16px;
`;

export default AreasOfFocusSelector;
