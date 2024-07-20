import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSpeciesDetails } from './speciesSlice';
import starWarsData from '../../starwarsData';
import SpeciesSection from './SpeciesSection'
import { Spinner, Breadcrumbs } from '@material-tailwind/react';


export default function SpeciesDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const species = useSelector((state) => state.species.species); 
  const loading = useSelector((state) => state.species.loading);
  const error = useSelector((state) => state.species.error);

  useEffect(() => {
    dispatch(fetchSpeciesDetails(id));
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

  if (!species) {
    return <div>No species found with ID: {id}</div>;
  }

  const speciesImageURL = starWarsData.species[species.name] 


  return (
    <div className="min-h-screen p-10 mt-20 text-white galaxy">
      <div className="flex justify-end mb-8">
        <Breadcrumbs className="text-yellow-500 bg-transparent">
          <Link to="/library" className="text-xl text-yellow-400 hover:text-white capitalize">
            library
          </Link>
          <Link to="/speices" className="text-xl text-yellow-400 hover:text-white capitalize">
            species
          </Link>
          <Link to="/speices:id" className="text-xl text-yellow-400 hover:text-white capitalize">
            {species.name}
          </Link>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col md:flex-row mb-20 items-center">
        <div div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img className="w-full h-auto rounded-lg shadow-lg" src={speciesImageURL} alt={species.name} />
        </div>
        <div className="w-full md:w-2/3 md:pl-8 capitalize">
          <h2 className="text-4xl font-bold mb-4">{species.name}</h2>
          <p className="text-yellow-500 text-lg mb-2">Skin Color : {species.skin_colors}</p>
          <p className="text-yellow-500 text-lg mb-2">Eye Color : {species.eye_colors}</p>
          <p className="text-yellow-500 text-lg mb-2">Designation : {species.designation}</p>
          <p className="text-yellow-500 text-lg mb-2">Life Span : {species.average_lifespan}</p>
          <p className="text-yellow-500 text-lg mb-2">Created on : {species.created}</p>
        </div>
        </div>
      <SpeciesSection title="Films" items={species.films} />
      <SpeciesSection title="People" items={species.people} />
    </div>
  );
}
