import React, { useState } from 'react';

import FormulaireDepense from './FormulaireDepense';
import './NouvelleDepense.css';

const NouvelleDepense = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerDepenseHandler = (depenseSaisie) => {
    const donneesDepense = {
      ...depenseSaisie,
      id: Math.random().toString(),
    };
    props.onAddExpense(donneesDepense);
    setEnEdition(false);
  };

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

  return (
    <div className='new-expense'>
      {!enEdition && (
        <button onClick={debutEditionHandler}>Ajouter nouvelle dépense</button>
      )}
      {enEdition && (
        <FormulaireDepense
          onSaveExpenseData={enregistrerDepenseHandler}
          onCancel={arretEditionHandler}
        />
      )}
    </div>
  );
};

export default NouvelleDepense;
