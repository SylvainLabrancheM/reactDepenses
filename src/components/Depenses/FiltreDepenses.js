import React from 'react';

import './FiltreDepenses.css';

const FiltreDepenses = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtrer par année</label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default FiltreDepenses;
