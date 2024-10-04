import React from 'react';
import './CharacterModal.css';

const CharacterModal = ({ character, onClose }) => {
  const addedDate = new Date(character.created).toLocaleDateString('en-GB'); 

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{character.name}</h2>
        <p><strong>Height:</strong> {character.height / 100} meters</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Date Added:</strong> {addedDate}</p>
        <p><strong>Films:</strong> {character.films.length}</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
