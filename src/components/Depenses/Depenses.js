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

  const filteredExpenses = props.items.filter((depense) => {
    return depense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <FiltreDepenses
          selected={filteredYear}
          onChangementFiltre={filterChangeHandler}
        />
        <TableauDepenses expenses={filteredExpenses} />
        <ListeDepenses items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
