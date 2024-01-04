import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Mantras from './Components/Mantras/Mantra';
import Places from './Components/Places/Places';
import Guru from './Components/Guru/Guru';
import GuruCharitra from './Components/Guru/GuruCharitra/GuruCharitra';
import Raghavastakam from './Components/Mantras/MantraPages/Raghavastakam';
import Ramastakam from './Components/Mantras/MantraPages/Ramastakam';
import SitaRamaStotram from './Components/Mantras/MantraPages/SitaRamaStotram';
import SitaKavacham from './Components/Mantras/MantraPages/SitaKavacham';
import GayatriRamayanam from './Components/Mantras/MantraPages/GayatriRamayanam';
import Ramayana from './Components/Ramayana';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "",
      element: <Hero/>
    },
    {
      path: "/ramayan",
      element: <Ramayana/ >
    },
    {
      path: "/mantras",
      element: <Mantras/>
    },
    {
      path: "/places",
      element: <Places/>
    },
    {
      path: "/gurudeepika",
      element: <Guru/>
    },
    {
      path: "/gurucharitra",
      element: <GuruCharitra/>
    },
    {
      path: "/mantras/raghavastakam",
      element: <Raghavastakam/>
    },
    {
      path: "/mantras/rama-astakam",
      element: <Ramastakam/>
    },
    {
      path: "/mantras/sita-rama-stotram",
      element: <SitaRamaStotram/>
    },
    {
      path: "/mantras/sita-kavacham",
      element: <SitaKavacham/>
    },
    {
      path: "/mantras/gayatri-ramayanam",
      element: <GayatriRamayanam/>
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
