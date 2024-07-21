import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPlanetDetails } from './planetSlice';
import starWarsData from '../../starwarsData';
import PlanetSection from './PlanetSection';
import { Spinner, Breadcrumbs } from '@material-tailwind/react';


export default function PlanetsDetails() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const planet = useSelector((state) => state.planet.planet);
  const loading = useSelector((state) => state.planet.loading);
  const error = useSelector((state) => state.planet.error);

  useEffect(() => {
    dispatch(fetchPlanetDetails(id))
  }, [dispatch, id])

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

  if (!planet) {
    return <div>No person found with ID: {id}</div>;
  }

  const planetImageURL = starWarsData.planets[planet.name]


  return (
    <div className="min-h-screen p-10 mt-20 text-white galaxy">
      <div className="flex justify-end mb-8">
        <Breadcrumbs className="text-yellow-500 bg-transparent">
          <Link to="/library" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            library
          </Link>
          <Link to="/planets" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            planets
          </Link>
          <p  className="text-xl text-yellow-400 capitalize cursor-default">
            {planet.name}
          </p>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col md:flex-row mb-20 items-center">
        <div div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img className="w-full h-auto rounded-lg shadow-lg" src={planetImageURL} alt={planet.name} />
        </div>
        <div className="w-full md:w-2/3 md:pl-8 capitalize">
          <h2 className="text-4xl font-bold mb-4">{planet.name}</h2>
          <p className="text-yellow-500 text-lg mb-2">Climate : {planet.climate}</p>
          <p className="text-yellow-500 text-lg mb-2">Created : {planet.created}</p>
          <p className="text-yellow-500 text-lg mb-2">Diameter: {planet.diameter}</p>
          <p className="text-yellow-500 text-lg mb-2">gravity : {planet.gravity}</p>
          <p className="text-yellow-500 text-lg mb-2">population : {planet.population}</p>
        </div>
        </div>
        <PlanetSection title="Films" items={planet.films} />
        <PlanetSection title="Residents" items={planet.residents} />
    </div>
  )
}



