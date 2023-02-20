import React from 'react';

import DepenseObjet from './DepenseObjet';
import './ListeDepenses.css';

const ListeDepenses = (props) => {
  {console.log(props.items)}
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Aucune dépense trouvée</h2>;
  }
  
  return (
    <ul className='expenses-list'>
      {props.items.map((depense) => (
        
        <DepenseObjet
          key={depense.id}
          titre={depense.titre}
          montant={depense.montant}
          date={depense.date}
        />
      ))}
    </ul>
  );
};

export default ListeDepenses;
