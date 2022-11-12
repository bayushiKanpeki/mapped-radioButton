import React from 'react';
import styled from 'styled-components';

type Props = {};

const AreasOfFocusSelector = ({ all_areas_of_focus, onSelect }: any) => {
  return (
    <Main>
      <div style={{ display: 'grid' }}>
        {all_areas_of_focus.map(x => (
          <label key={x.id}>
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

export default AreasOfFocusSelector;
