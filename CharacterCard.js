import React, { useState } from 'react';
import CharacterModal from './CharacterModal';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="character-card" onClick={() => setShowModal(true)}>
        <h3>{character.name}</h3>
      </div>
      {showModal && <CharacterModal character={character} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CharacterCard;
