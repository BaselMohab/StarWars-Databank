import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchStarshipDetails } from './starshipSlice';
import starWarsData from '../../starwarsData';
import StarshipSection from './StarshipSection';
import { Spinner, Breadcrumbs } from '@material-tailwind/react';


export default function StarshipDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const starship = useSelector((state) => state.starship.starship);
  const loading = useSelector((state) => state.starship.loading);
  const error = useSelector((state) => state.starship.error);

  useEffect(() => {
    dispatch(fetchStarshipDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="h-20 w-20 text-yellow-500" />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!starship) {
    return <div>No starship found with ID: {id}</div>;
  }

  const starshipImageURL = starWarsData.starships[starship.name]

  return (
    <div className="min-h-screen p-10 mt-20 text-white galaxy">
      <div className="flex justify-end mb-8">
        <Breadcrumbs className="text-yellow-500 bg-transparent">
          <Link to="/library" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            library
          </Link>
          <Link to="/starships" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            starships
          </Link>
          <p className="text-xl text-yellow-400 capitalize cursor-default">
            {starship.name}
          </p>
        </Breadcrumbs>
      </div>
    <div className="flex flex-col md:flex-row mb-20 items-center">
      <div div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img className="w-full h-auto rounded-lg shadow-lg" src={starshipImageURL} alt={starship.name} />
      </div>
        <div className="w-full md:w-2/3 md:pl-8 capitalize">
          <h2 className="text-4xl font-bold mb-4">{starship.name}</h2>
          <p className="text-yellow-500 text-lg mb-2">Created on: {starship.created}</p>
          <p className="text-yellow-500 text-lg mb-2">Crew: {starship.crew}</p>
          <p className="text-yellow-500 text-lg mb-2">Edited on: {starship.edited}</p>
          <p className="text-yellow-500 text-lg mb-2">Hyperdrive Rating: {starship.hyperdrive_rating}</p>
          <p className="text-yellow-500 text-lg mb-2">Model: {starship.model}</p>
          <p className="text-yellow-500 text-lg mb-2">Passengers: {starship.passengers}</p>
        </div>
      </div>
      <StarshipSection title="Films" items={starship.films} />
  </div>
  );
}


    
