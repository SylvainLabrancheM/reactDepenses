import React, { useState } from 'react';

import NouvelleDepense from './components/NouvelleDepense/NouvelleDepense';
import Depenses from './components/Depenses/Depenses';

const DEPENSES = [
  {
    id: 'e1',
    title: 'Papier de toilette',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Télévision', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Assurance voiture',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Nouveau bureau en bois',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [depenses, setDepenses] = useState(DEPENSES);

  const ajoutDepenseHandler = (depense) => {
    setDepenses((anciennesDepenses) => {
      return [depense, ...anciennesDepenses];
    });
  };

  return (
    <div>
      <NouvelleDepense onAddExpense={ajoutDepenseHandler} />
      <Depenses items={depenses} />
    </div>
  );
};

export default App;
