import { Header } from '@components/Header/Header';
import './App.css';
import { Main } from '@components/Main/Main';
import { Solutions } from '@components/Solutions/Solutions';
import { Incomings } from '@components/Incomings/Incomings';
import { Features } from '@components/Features/Features';
import { PixAndQR } from '@components/PixAndQR/PixAndQR';
import { NextStep } from '@components/NextStep/NextStep';
import { ClientExperience } from '@components/ClientExperience/ClientExperience';
import { Cases } from '@components/Cases/Cases';
import { PrimeReactProvider } from 'primereact/api';
import { Contact } from '@components/Contact/Contact';
import { Blog } from '@components/Blog/Blog';
import { Footer } from "@components/Footer/Footer";

function App() {

  return (
    <PrimeReactProvider>
      <div className='container'>
        <Header />
        <Main />
        <ClientExperience />
        <Solutions />
        <Incomings />
        <Features />
        <PixAndQR />
        <NextStep />
        <Cases />
        <Contact />
        <Blog />
        <Footer/>
      </div>
    </PrimeReactProvider>

  );
};

export default App;
