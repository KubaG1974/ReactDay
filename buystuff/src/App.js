import React, { Component } from 'react';
import Header from './Header';
import InventoryItem from './InventoryItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Item 1', price: '$10' },
        { name: 'Item 2', price: '$20' },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <Header title="buystuff" />
        {items.map((item, index) => (
          <InventoryItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    );
  }
}

export default App;
