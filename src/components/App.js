import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
