import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';

import { Header } from './components/Header/index';
import { Home } from './components/Home/index';

import { Mortgage } from './components/Mortgage/index';

import { Income } from './components/Income/index';
import { Costs } from './components/Costs/index';
import { Bank } from './components/Bank/';

import { Footer } from './components/Footer/index';
import { Quiz } from './components/Quiz/index';
import { Map } from './components/Map/index';
import { Bonus } from './components/Bonus/index';
import { Contact } from './components/Contact/index';
import { Navigation } from './components/Navigation/index';

import { SecondNav } from './components/SecondNav';
import { Print } from './components/Print/index';
import ScrollToTop from './components/ScrollToTop';

import ReactGA from 'react-ga';
ReactGA.initialize('G-5RT7LC64LG');
ReactGA.pageview(window.location.pathname + window.location.search);

export const App = () => {
  const [listToPrint, setListToPrint] = useState({});
  const addToPrint = (componentName, isSelected) => {
    const clonedList = { ...listToPrint }; // shallow copy
    clonedList[componentName] = isSelected;
    setListToPrint(clonedList);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/hypoteka" exact>
            <SecondNav />
            <Mortgage addToPrint={addToPrint} listToPrint={listToPrint} />
          </Route>
          <Route path="/prijem" exact>
            <SecondNav />

            <Income addToPrint={addToPrint} listToPrint={listToPrint} />
          </Route>

          <Route path="/vydaje" exact>
            <SecondNav />
            <Costs addToPrint={addToPrint} listToPrint={listToPrint} />
          </Route>
          <Route path="/banka" exact>
            <SecondNav />
            <Bank />
          </Route>
          <Route path="/kviz" exact>
            <Header />
            <Quiz />
          </Route>
          <Route path="/mapa" exact>
            <Header />
            <Map />
          </Route>
          <Route path="/bonus" exact>
            <Header />
            <Bonus />
          </Route>
          <Route path="/kontakt" exact>
            <Header />
            <Contact />
          </Route>
          <Route path="/print" exact>
            <Print listToPrint={listToPrint} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
