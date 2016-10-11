import React from 'react';

const ItemList = (props) => {
    return (
      <div>
          <If condition={props.loading}>
              <div className="loading-label">Loading...</div>
          </If>
        <ul>
          <For each="item" of={props.items}>
              <li key={ item }>{ item }</li>
          </For>
        </ul>
      </div>
    );
};

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
};

export default ItemList;