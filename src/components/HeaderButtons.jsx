import React, { useState } from 'react';
import DropdownButton, { Item } from 'terra-dropdown-button';

const HeaderButtons = (props) => {
  const [columnLabel, setColumnLabel] = useState('filter by column name');
  const [data, setData] = useState('filter by value');

  if(props) {
    return (
        <div>
        <DropdownButton
            label={columnLabel}
        >
            {props.options&&props.options.map(option => <Item label={option} onSelect={() => setColumnLabel(option)} />)}
        </DropdownButton>
        <br />
        <br />
        <div>
            <DropdownButton
                label={data}
            >
                {props.options&&props.options.map(option => <Item label={option} onSelect={() => setData(data)} />)}
            </DropdownButton>
        </div>
        </div>
    );
  }
  return <></>;
};

export default HeaderButtons;