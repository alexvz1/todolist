import React from 'react';
import Header from './components/Header';
import Home from '../Home/Home';
import Footer from './components/Footer'

export class Layout extends React.Component {
  render() {
    return (
      <div>
          <Header></Header>
          <section className="">
            <Home></Home> 
          </section>
          <Footer></Footer>
      </div>
    );
  }
}

export default Layout;