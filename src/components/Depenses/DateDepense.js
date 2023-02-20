import React from 'react';

import './DateDepense.css';

const DateDepense = (props) => {
  const mois = props.date.toLocaleString('fr-CA', { month: 'long' });
  const jour = props.date.toLocaleString('fr-CA', { day: '2-digit' });
  const annee = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{mois}</div>
      <div className='expense-date__year'>{annee}</div>
      <div className='expense-date__day'>{jour}</div>
    </div>
  );
};

export default DateDepense;
