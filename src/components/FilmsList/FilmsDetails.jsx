import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchFilmDetails } from './filmSlice';
import starWarsData from '../../starwarsData';
import FilmSectionDetails from './FilmSectionDetails';
import { Spinner, Breadcrumbs } from '@material-tailwind/react';

export default function FilmDetails ()  {
  const { id } = useParams();
  const dispatch = useDispatch();
  const film = useSelector((state) => state.film.film);
  const loading = useSelector((state) => state.film.loading);
  const error = useSelector((state) => state.film.error);

  useEffect(() => {
    dispatch(fetchFilmDetails(id));
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

  if (!film) {
    return <div>No film found with ID: {id}</div>;
  }

  const imageURL = starWarsData.films[film.title]

  return (
    <div className="min-h-screen p-10 mt-20 text-white galaxy">
      <div className="flex justify-end mb-8">
        <Breadcrumbs className="text-yellow-500 bg-transparent">
          <Link to="/library" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            library
          </Link>
          <Link to="/films" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            films
          </Link>
          <p className="text-xl text-yellow-400 capitalize cursor-default">
            {film.title}
          </p>
        </Breadcrumbs>
      </div>
      <div className="flex flex-col md:flex-row mb-20 items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img className="w-full h-auto rounded-lg shadow-lg" src={imageURL} alt={film.title} />
        </div>
        <div className="w-full md:w-2/3 md:pl-8 capitalize">
            <h2 className="text-4xl font-bold mb-4">{film.title}</h2>
            <p className="text-yellow-500 text-lg mb-2">Director: {film.director}</p>
            <p className="text-yellow-500 text-lg mb-2">Created on: {film.created}</p>
        </div>
      </div>
      <FilmSectionDetails title="People" items={film.characters} />
      <FilmSectionDetails title="Starships" items={film.starships} />
      <FilmSectionDetails title="Species" items={film.species} />
      <FilmSectionDetails title="Planets" items={film.planets} />
    </div>
  );
};
























