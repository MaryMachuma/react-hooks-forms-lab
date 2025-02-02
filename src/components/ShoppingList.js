import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';
import ItemForm from './ItemForm';

function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Yogurt', category: 'Dairy' },
    { id: 2, name: 'Pomegranate', category: 'Produce' },
    { id: 3, name: 'Lettuce', category: 'Produce' },
    { id: 4, name: 'String Cheese', category: 'Dairy' },
    { id: 5, name: 'Ice Cream', category: 'Dessert' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) {
      return false;
    }
    if (searchText !== '' && !item.name.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        searchText={searchText}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;