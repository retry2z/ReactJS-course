import React from 'react';
import style from './app.module.css';
import Navigation from './components/core/navigation/navigation';
import Aside from './components/core/aside/aside';
import Main from './components/core/main/main';
import Product from './components/product/product';
import Footer from './components/core/footer/footer';

const App = () => {
  return (
    <div className={style.app}>

      <Navigation />
      <div className={style.container}>
        <Aside />

        <Main>
          <Product />
        </Main>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
