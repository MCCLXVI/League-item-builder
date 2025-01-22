import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Buildspage.css';

const Buildspage: React.FC = () => {
  const { championName } = useParams<{ championName: string }>(); // Access champion name from URL
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedRunes, setSelectedRunes] = useState<string[]>([]);

  // Sample items and runes
  const items = ['Doran\'s Blade', 'Infinity Edge', 'Rabadon\'s Deathcap', 'Boots of Speed'];
  const runes = ['Conqueror', 'Electrocute', 'Phase Rush', 'Predator'];

  // Champion data with images
  const champions = {
    Ahri: '/Icons/ahri.jpg',
    Aatrox: '/images/aatrox.png',
  };

  // Handle item and rune selection
  const handleItemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleRuneSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !selectedRunes.includes(value)) {
      setSelectedRunes([...selectedRunes, value]);
    }
  };

  const removeItem = (item: string) => {
    setSelectedItems(selectedItems.filter(i => i !== item));
  };

  const removeRune = (rune: string) => {
    setSelectedRunes(selectedRunes.filter(r => r !== rune));
  };

  return (
    <div className="buildspage">
      <div className="build-header">
        <h1>Create Build for {championName}</h1>
      </div>
      <div className="build-form">
        {/* Champion Image */}
        <div className="champion-info">
          <img src={champions[championName as keyof typeof champions]} alt={championName} className="champion-profile-pic" />
          <h2>{championName}</h2>
        </div>

        {/* Items selection */}
        <div className="build-form-group">
          <label htmlFor="item-select">Select Items:</label>
          <select id="item-select" onChange={handleItemSelect}>
            <option value="" disabled>Select Item</option>
            {items.map((item, idx) => (
              <option key={idx} value={item}>{item}</option>
            ))}
          </select>
          <div className="selected-items">
            {selectedItems.map((item, idx) => (
              <span key={idx} className="item-badge">
                {item} <button onClick={() => removeItem(item)}>x</button>
              </span>
            ))}
          </div>
        </div>

        {/* Runes selection */}
        <div className="build-form-group">
          <label htmlFor="rune-select">Select Runes:</label>
          <select id="rune-select" onChange={handleRuneSelect}>
            <option value="" disabled>Select Rune</option>
            {runes.map((rune, idx) => (
              <option key={idx} value={rune}>{rune}</option>
            ))}
          </select>
          <div className="selected-runes">
            {selectedRunes.map((rune, idx) => (
              <span key={idx} className="rune-badge">
                {rune} <button onClick={() => removeRune(rune)}>x</button>
              </span>
            ))}
          </div>
        </div>

        {/* Create Build Button */}
        <div className="create-build-btn">
          <button>Create Build</button>
        </div>
      </div>
    </div>
  );
};

export default Buildspage;
