import React, { useState } from 'react';

import NouvelleDepense from './components/NouvelleDepense/NouvelleDepense';
import Depenses from './components/Depenses/Depenses';

const DEPENSES = [
  {
    id: 'e1',
    titre: 'Papier de toilette',
    montant: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', titre: 'Télévision', montant: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    titre: 'Assurance voiture',
    montant: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    titre: 'Nouveau bureau en bois',
    montant: 450,
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
      <NouvelleDepense onAjoutDepense={ajoutDepenseHandler} />
      <Depenses items={depenses} />
    </div>
  );
};

export default App;
