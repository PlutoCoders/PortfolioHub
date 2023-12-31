import './App.css';
import logo from './logo.svg';
// import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <section className={`plutoBGSection`}>
          <div className={`containerWithSpinningLogo`}>
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{marginTop: 35}}>Portfolio Hub</p>
          </div>
        </section>
        <section className={`flex`}>
          Section 2
        </section>
      </main>
      <Footer />
    </div>
  );
}