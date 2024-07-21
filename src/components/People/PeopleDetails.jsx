import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPersonDetails } from './personSlice';
import starWarsData from '../../starwarsData';
import PersonSection from './PersonSection';
import { Spinner, Breadcrumbs } from '@material-tailwind/react';


export default function PeopleDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector((state) => state.person.person);
  const loading = useSelector((state) => state.person.loading);
  const error = useSelector((state) => state.person.error);

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="h-20 w-20 text-yellow-500" />
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!person) {
    return <div className="text-center text-yellow-500">No person found with ID: {id}</div>;
  }

  const personImageURL = starWarsData.people[person.name];

  return (
    <div className="min-h-screen p-10 mt-20 text-white galaxy">
      <div className="flex justify-end mb-8">
        <Breadcrumbs className="text-yellow-500 bg-transparent">
          <Link to="/library" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            library
          </Link>
          <Link to="/people" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            people
          </Link>
          <p className="text-xl text-yellow-400 capitalize cursor-default">
            {person.name}
          </p>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col md:flex-row mb-20 items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img className="w-full h-auto rounded-lg shadow-lg" src={personImageURL} alt={person.name} />
        </div>
        <div className="w-full md:w-2/3 md:pl-8 capitalize">
          <h2 className="text-4xl font-bold mb-4">{person.name}</h2>
          <p className="text-yellow-500 text-lg mb-2">Gender : {person.gender}</p>
          <p className="text-yellow-500 text-lg mb-2">Birth Year : {person.birth_year}</p>
          <p className="text-yellow-500 text-lg mb-2">Skin Color : {person.skin_color}</p>
        </div>
      </div>
      <PersonSection title="Films" items={person.films} />
      <PersonSection title="Starships" items={person.starships} />
      <PersonSection title="Species" items={person.species} />
      <PersonSection title="Planet" items={person.planet ? [person.planet] : []} singleItem />
    </div>
  );
}
