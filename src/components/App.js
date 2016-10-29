import React, { Component } from 'react';
import Header from './header';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
