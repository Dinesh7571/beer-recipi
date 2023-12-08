import React, { useState, useEffect } from 'react'

import useData from '../../Hooks/useData'
import './Details.css'
import { useParams } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState(null)
  const { id } = useParams();
  console.log(`id=${id}`)
  const { data, error, isLoading } = useData(`/${id}`)
  useEffect(() => {
    // Check if data is available before trying to access its elements
    if (data && data.length > 0) {
      setDetails(data[0]);
    }
    console.log(details)
  }, [data]);



  return (
    <div >
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>Error loading data: {error.message}</p>
      ) : details ? (
        <div className="beer-container">
          <div className="image_container">
            <img className="beer-image" src={details.image_url} alt={details.name}></img>
          </div>
          <div className="beer-details">
            <h1>{details.name}</h1>
            <p className="tagline">{details.tagline}</p>
            <ul className="details-list">
              <li>
                <span className="details-label">ABV:</span> {details.abv}%
              </li>
              <li>
                <span className="details-label">IBU:</span> {details.ibu}
              </li>
              {/* Add other details from the API response */}
            </ul>
            <h2>Method</h2>
            <p>
              <span className="details-label">Mash Temperature:</span> {details.method?.mash_temp[0]?.temp.value}°C for{' '}
              {details.method?.mash_temp[0]?.duration} minutes
            </p>
            <p>
              <span className="details-label">Fermentation Temperature:</span> {details.method?.fermentation?.temp.value}°C
            </p>
            <h2>Ingredients</h2>
            <p>
              <span className="details-label">Malts:</span>
            </p>
            <ul>
              {details.ingredients?.malt.map((malt) => (
                <li key={malt.name}>
                  {malt.name} - {malt.amount.value} {malt.amount.unit}
                </li>
              ))}
            </ul>
            <p>
              <span className="details-label">Hops:</span>
            </p>
            <ul>
              {details.ingredients?.hops.map((hop) => (
                <li key={hop.name}>
                  {hop.name} - {hop.amount.value} {hop.amount.unit} ({hop.add}, attribute: {hop.attribute})
                </li>
              ))}
            </ul>
            <p>
              <span className="details-label">Yeast:</span> {details.ingredients?.yeast}
            </p>
            <div className="food-pairing">
              <h2>Food Pairing:</h2>
              <ul>
                {details.food_pairing.map((food) => (
                  <li key={food}>{food}</li>
                ))}
              </ul>
            </div>
            <p className="brewers-tips">
              <span className="details-label">Brewer's Tips:</span> {details.brewers_tips}
            </p>
            <p className="contributed-by">
              <span className="details-label">Contributed By:</span> {details.contributed_by}
            </p>
          </div>
        </div>
      ) : (
        <p>No details found for the specified ID</p>
      )}
    </div>
  )
}

export default Details