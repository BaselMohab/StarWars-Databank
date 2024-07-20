
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Library from './pages/Library';
import Films from './pages/Films';
import Starships from './pages/Starships';
import Species from './pages/Species';
import People from './pages/People';
import Planets from './pages/Planets';

// Components
import FilmsDetails from './components/FilmsList/FilmsDetails';
import SpeciesDetails from './components/Species/SpeciesDetails';
import PeopleDetails from './components/People/PeopleDetails';
import PlanetsDetails from './components/Planets/PlanetsDetails';
import StarshipsDetails from './components/Starships.jsx/StarshipsDetails';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    element: <Layout />,
    children: [
      { path: '/library', element: <Library /> },
      { path: '/films', element: <Films /> },
      { path: '/films/:id', element: <FilmsDetails /> },
      { path: '/species', element: <Species /> },
      { path: '/species/:id', element: <SpeciesDetails /> },
      { path: '/people', element: <People /> },
      { path: '/people/:id', element: <PeopleDetails /> },
      { path: '/planets', element: <Planets /> },
      { path: '/planets/:id', element: <PlanetsDetails /> },
      { path: '/starships', element: <Starships /> },
      { path: '/starships/:id', element: <StarshipsDetails /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
