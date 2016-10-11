import React from 'react';

const ItemList = (props) => {
    return (
      <div>
          <select>
              <For each="option" of={props.language} index="i">
                  <option key={i} value={option}>{option}</option>
              </For>
          </select>
          <button onClick={props.onClick}>Add</button>
      </div>
    );
};

export default ItemList;