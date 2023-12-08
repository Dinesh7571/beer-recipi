import React, { useState, useEffect } from 'react';
import Card from './Card';
import useData from '../../Hooks/useData';
import Searchbar from '../Searchbar/Searchbar';

 import './CardList.css'
const CardList = () => {
  const { data, error, isLoading } = useData();
  console.log('Data:', data);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Update suggestions based on the current input value
    const filteredSuggestions = data?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [searchTerm, data]);



  const handleClick = () => {
    // Only filter the data when the button is clicked and there is a search term
    if (searchTerm) {
      const results = data?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Search results:', results);
      setSearchResults(results);
    }
  };

  

  return (
    <div className='container'>
      <Searchbar
        value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
        onClick={handleClick}
        suggestions={suggestions}
      />
      <section className="articles">
         
      {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <p>Error loading data: {error.message}</p>
        ) : (
          (searchTerm && searchResults.length > 0 ? searchResults : data)?.map(
            (item) => (
              <Card
                key={item.id}
                name={item.name}
                tagline={item.tagline}
                image={item.image_url}
                to={`/details/${item.id}`}
              />
            )
          )
        )}
        {!isLoading && searchTerm && searchResults.length === 0 && (
          <p>No results found</p>
        )}
       
      </section>
    </div>
  );
};

export default CardList;
