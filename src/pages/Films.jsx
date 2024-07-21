import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Typography, Breadcrumbs, Spinner  } from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import starWarsData from '../starwarsData';

export default function Films() {
  const [filmsList, setFilmsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/films/')
      .then(response => {
        setFilmsList(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setError(error.message);
        setLoading(false);
        setFilmsList([]);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="h-20 w-20 text-yellow-500" />
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-8 mt-32 bg-black min-h-screen">
      <div className="flex justify-end mb-8">
        <Breadcrumbs className="text-yellow-500 bg-transparent">
          <Link to="/library" className="text-xl capitalize text-black border border-yellow-400  bg-yellow-400 rounded-md px-3 py-1 hover:bg-black hover:text-yellow-400 transition-all">
            library
          </Link>
          <p className="text-xl text-yellow-400 capitalize cursor-default">
            films
          </p>
        </Breadcrumbs>
      </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filmsList.map(film =>{
            const id = film.url.split('/').filter(Boolean).pop();
            const imageUrl = starWarsData.films[film.title]
            return (
                <Card key={id} className="bg-gray-900 border border-yellow-500 shadow-xl rounded-lg overflow-hidden">
                <img src={imageUrl} alt={film.title} className="w-full h-full object-cover" />
                <CardBody className="text-center p-4">
                    <Typography variant="h4" color="yellow-500" className="font-bold mb-2">
                    {film.title}
                    </Typography>
                    <Typography variant="body1" color="white" className="text-sm">
                    {film.opening_crawl}...
                    </Typography>
                </CardBody>
                <CardFooter className="text-center">
                <Link
                    to={`/films/${id}`}
                    className="inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                    View Details
                </Link>
                </CardFooter>
                </Card>
            )
        }
        )}
        </div>
    </div>
  );
}
