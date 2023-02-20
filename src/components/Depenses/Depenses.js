import React, { useState } from 'react';

import Card from '../UI/Card';
import FiltreDepenses from './FiltreDepenses';
import ListeDepenses from './ListeDepenses';
import TableauDepenses from './TableauDepenses';
import './Depenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const depensesFiltrees = props.items.filter((depense) => {
    return depense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <FiltreDepenses
          selected={filteredYear}
          onChangementFiltre={filterChangeHandler}
        />
        <TableauDepenses depenses={depensesFiltrees} />
        <ListeDepenses items={depensesFiltrees} />
      </Card>
    </div>
  );
};

export default Expenses;
