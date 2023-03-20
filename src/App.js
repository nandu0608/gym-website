import './App.css';
import Home from './components/Home/home';
import Programs from './components/programs/programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Payment from './components/Payment/Payment';
import Gototop from './components/gototop/gototop';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {

  return (
    <div className="App">
      <Auth0Provider
        domain="dev-8p6xsh5i2bry5lbb.us.auth0.com"
        clientId="3YSMOX1WdHyBa9ZDMqyYtnBQ6ihd0Fc1"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Router>
          <Routes>
            <Route
              exact path='/'
              element={
                <Fragment>
                  <Home />
                  <Programs />
                  <Reasons />
                  <Plans />
                  <Testimonials />
                  <Join />
                  <Footer />
                  <Gototop />
                </Fragment>
              }
            />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
