
import React from 'react';
import { Item } from './ItemForm';
import './itemList.css'


interface ItemListProps {
  items: Item[];
  onRemoveItem: (index: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onRemoveItem }) => {
  const totalWattUsage = items.reduce((total, item) => total + item.watt * item.hours, 0);
  const totalPrice = (totalWattUsage * 7) / 1000;

  return (
    <div className="item-list">
    <h2>My Home</h2>
    <table className="styled-table">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Watt</th>
          <th>Hours</th>
          <th>Quantity</th>
          <th>Total (Wh)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.watt}</td>
            <td>{item.hours}</td>
            <td>{item.quantity}</td>
            <td>{item.watt * item.hours * item.quantity}</td>
            <td>
              <button className="remove-button" onClick={() => onRemoveItem(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3 className='result-title'>Total Watt Usage: {totalWattUsage} Wh</h3>
  <p>Assuming average unit/KW price is ₹7 </p>
    <h3 className='result-title'>Estimated Bill: ₹{totalPrice.toFixed(2)}</h3>
  </div>
  );
};

export default ItemList;
