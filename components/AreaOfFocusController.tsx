import { listeners } from 'process';
import React from 'react';
import AreasOfFocusSelector from './Spacer/AreasOfFocusSelector';

type Props = {};

const AreaOfFocusController = ({ all_areas_of_focus }: any) => {
  const [catPerson, setCatPerson] = React.useState(false);
  const [dogPerson, setDogPerson] = React.useState(false);
  const [areas_of_focus_List, set_areas_of_focus_List] =
    React.useState(all_areas_of_focus);

  const handleCatChange = () => {
    setCatPerson(!catPerson);
  };

  const handleDogChange = () => {
    setDogPerson(!dogPerson);
  };

  const handlerLists = [
    {
      id: 'cat',
      catHandle: handleCatChange,
    },
    {
      id: 'dog',
      dogHandle: handleDogChange,
    },
  ];

  //add checked property on each  object on array of object
  const addCheckProperty = lists => {
    return lists.map(list => ({
      ...list,
      checked: false,
    }));
  };

  const listWithCheckProperty = addCheckProperty(all_areas_of_focus);

  //add handler property
  const addHandlers = (lists, handlerLists) => {
    const listWithHandlerProperty = lists.map(list => {
      // get the handler with the same id from handlerlists
      const handlerValue = handlerLists.filter(
        handlerList => list.id === handlerList.id
      );

      return {
        ...list,
        handler: handlerValue,
      };
    });

    return listWithHandlerProperty;
  };

  const listWithHandlerAnDCheckProperty = addHandlers(
    listWithCheckProperty,
    handlerLists
  );

  //toggle radio button check/uncheck
  const toggleCheck = (list, id, checked) => {
    return list.map(list => (list.id === id ? { ...list, checked } : list));
  };

  //create/update array of selected areas of focus
  const selectedAreasOfFocus = lists => {
    const filteredList = lists.filter(list => list.checked === true);
    return filteredList.map(list => list.id);
  };

  return (
    <div>
      <AreasOfFocusSelector
        all_areas_of_focus={all_areas_of_focus}
        onSelect={() => {
          console.log('select');
        }}
      />
    </div>
  );
};

export default AreaOfFocusController;
