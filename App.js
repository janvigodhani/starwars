import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './CharacterCard'; 
import Loader from './Loader'; 
import Error from './Error'; 

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchCharacters = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      setCharacters(response.data.results);
    } catch (err) {
      setError("Unable to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div className="app-container">
      {loading && <Loader />}
      {error && <Error message={error} />}
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;


