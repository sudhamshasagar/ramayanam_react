import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Mantras from './Components/Mantras/Mantra';
import Places from './Components/Places/Places';
import Raghavastakam from './Components/Mantras/MantraPages/Raghavastakam';
import Ramastakam from './Components/Mantras/MantraPages/Ramastakam';
import SitaRamaStotram from './Components/Mantras/MantraPages/SitaRamaStotram';
import SitaKavacham from './Components/Mantras/MantraPages/SitaKavacham';
import GayatriRamayanam from './Components/Mantras/MantraPages/GayatriRamayanam';
import ContactForm from './Components/Contact/ContactUs';
import Home from './Components/Gurukula/Home';
import Shridhara from './Components/Gurukula/Varadahalli/shridhara';
import Shankara from './Components/Gurukula/Parampara/Shankara';
import Raghavendra from './Components/Gurukula/Mantralay/Raghavendra';
import EkaShlokiRamayanam from './Components/Mantras/MantraPages/EkaShlokiRamayanam';
import JanakiJeevana from './Components/Mantras/MantraPages/JanakiJeevana';
import LakshmanaKavacham from './Components/Mantras/MantraPages/LakshmanaKavacham';
import BharathaKavacham from './Components/Mantras/MantraPages/BharathaKavacham';
import Plants from './Components/Plants/Plants';
import Contact from './Components/Contact/ContactUs';
import ShatrughnaKavacham from './Components/Mantras/MantraPages/ShatrughnaKavacham';
import NamaRamayanam from './Components/Mantras/MantraPages/NamaRamayanam';
import JayaMantra from './Components/Mantras/MantraPages/JayaMantra';
import Sankshepa from './Components/Mantras/MantraPages/Sankshepa';
import Raghava from './Components/Mantras/MantraPages/Raghava';
import RamaKavacham from './Components/Mantras/MantraPages/RamaKavacham';
import RamayanaHome from './Components/Ramayana/Home';
import Balakanda from './Components/Ramayana/Chapters/Balakanda';
import AyodhyaKanda from './Components/Ramayana/Chapters/AyodhyaKanda';
import AranyaKanda from './Components/Ramayana/Chapters/AranyaKanda';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "", element: <Hero/>
    },
    {
      path: "/ramayan", element: <RamayanaHome/>
    },
    {
      path: "/ramayan/bala-kanda", element: <Balakanda/>
    },
    {
      path: "/ramayan/ayodhya-kanda", element: <AyodhyaKanda/>
    },
    {
      path: "/ramayan/aranya-kanda", element: <AranyaKanda/>
    },
    {
      path: "/mantras", element: <Mantras/>
    },
    {
      path: "/places", element: <Places/>
    },
    {
      path: "/gurudeepika", element: <Home/>
    },
    {
      path: "/mantras/raghavastakam", element: <Raghavastakam/>
    },
    {
      path: "/mantras/rama-astakam", element: <Ramastakam/>
    },
    {
      path: "/mantras/sita-rama-stotram", element: <SitaRamaStotram/>
    },
    {
      path: "/mantras/sita-kavacham", element: <SitaKavacham/>
    },
    {
      path: "/mantras/gayatri-ramayanam", element: <GayatriRamayanam/>
    },
    {
      path: "/mantras/eka-shloki-ramayana", element: <EkaShlokiRamayanam/>
    },
    {
      path: "/mantras/janaki-jeevana-astakam", element: <JanakiJeevana/>
    },
    {
      path: "/mantras/lakshmana-kavacham", element: <LakshmanaKavacham/>
    },
    {
      path: "/mantras/bharatha-kavacham", element: <BharathaKavacham/>
    },
    {
      path: "/mantras/shatrughna-kavacham", element: <ShatrughnaKavacham/>
    },
    {
      path: "/mantras/naama-ramayana", element: <NamaRamayanam/>
    },
    {
      path: "/mantras/ramayana-jaya-mantra", element: <JayaMantra/>
    },
    {
      path: "/mantras/sankshepa-ramayana", element: <Sankshepa/>
    },
    {
      path: "/mantras/raghava-stotra", element: <Raghava/>
    },
    {
      path: "/mantras/rama-kavacham", element: <RamaKavacham/>
    },
    {
      path: "/contact-us", element: <ContactForm/>
    },
    {
      path: "/gurukula/shri-adi-shankaracharya", element: <Shankara/>
    },
    {
      path: "/gurukula/shri-shridhara-swamy", element: <Shridhara/>
    },
    {
      path: "/gurukula/shri-raghavendra-swamy", element: <Raghavendra/>
    },
    {
      path: "/plants", element: <Plants/>
    },
    {
      path: "/contact", element: <Contact/>
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
