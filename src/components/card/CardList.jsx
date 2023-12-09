import React, { useState} from 'react';
import Card from './Card';
import useData from '../../Hooks/useData';
import Searchbar from '../Searchbar/Searchbar';

import './CardList.css'

const CardList = () => {
  const { data, error, isLoading } = useData();
  console.log('Data:', data);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    // Only filter the data when the button is clicked and there is a search term
    if (searchTerm) {
      const results = data?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
     
      setSearchResults(results);
      setClick(true)
    }
  };

  

  return (
    <div className='main'>
      <div>
      <Searchbar
        value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
        onClick={handleClick}
       
      />
        {!isLoading && searchTerm && searchResults.length == 0 && click && (
          <p>No results found</p>
        )}
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
        )
        
        }



      
       
      </section>
      </div>
    </div>
  );
};

export default CardList;
