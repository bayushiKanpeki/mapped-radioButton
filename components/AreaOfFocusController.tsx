import React from 'react';
import AreasOfFocusSelector from './Spacer/AreasOfFocusSelector';

type Props = {};

const AreaOfFocusController = ({ all_areas_of_focus }: any) => {
  const [catPerson, setCatPerson] = React.useState(false);
  const [dogPerson, setDogPerson] = React.useState(false);

  const handleCatChange = () => {
    setCatPerson(!catPerson);
  };

  const handleDogChange = () => {
    setDogPerson(!dogPerson);
  };

  const onSelect = {
    one: handleCatChange,
    two: handleDogChange,
  };

  return (
    <div>
      <AreasOfFocusSelector
        all_areas_of_focus={all_areas_of_focus}
        onSelect={onSelect}
      />
    </div>
  );
};

export default AreaOfFocusController;
