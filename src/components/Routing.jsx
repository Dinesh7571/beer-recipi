import React from 'react'
import CardList from './card/CardList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Details/Details'
import App from '../App'
const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/details/:id" element={<Details/>} />
        </Routes>
      </Router>
    </>

  )
}

export default Routing