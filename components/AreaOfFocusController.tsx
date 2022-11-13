import { listeners } from 'process';
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

  const handlerLists = [
    {
      id: 'cat',
      checked: catPerson,
      handler: handleCatChange,
    },
    {
      id: 'dog',
      checked: dogPerson,
      handler: handleDogChange,
    },
  ];

  //add handler and checked property on each object
  const add_checked_and_handler_property = (lists, handlerLists) => {
    const listWithHandlerProperty = lists.map(list => {
      // get the handler with the same id from handlerlists
      const filteredHandlerList = handlerLists.filter(
        handlerList => list.id === handlerList.id
      );

      const handler = filteredHandlerList[0].handler;
      const checkedValue = filteredHandlerList[0].checked;

      return {
        ...list,
        handler: handler,
        checked: checkedValue,
      };
    });

    return listWithHandlerProperty;
  };

  const list_with_handler_and_check_property = add_checked_and_handler_property(
    all_areas_of_focus,
    handlerLists
  );

  //create/update array of selected areas of focus
  const selectedAreasOfFocus = lists => {
    const filteredList = lists.filter(list => list.checked === true);
    return filteredList.map(list => list.id);
  };

  const selected_areas_of_focus_ids = selectedAreasOfFocus(
    list_with_handler_and_check_property
  );

  return (
    <div>
      <AreasOfFocusSelector
        all_areas_of_focus={list_with_handler_and_check_property}
        onSelect={() => {
          console.log('select');
        }}
        selected_areas_of_focus_ids={selected_areas_of_focus_ids}
      />
    </div>
  );
};

export default AreaOfFocusController;
