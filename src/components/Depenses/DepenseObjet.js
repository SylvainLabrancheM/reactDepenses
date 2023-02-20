import React from 'react';

import DateDepense from './DateDepense';
import Card from '../UI/Card';
import './DepenseObjet.css';

const DepenseObjet = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <DateDepense date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.titre}</h2>
          <div className='expense-item__price'>${props.montant}</div>
        </div>
      </Card>
    </li>
  );
};

export default DepenseObjet;
