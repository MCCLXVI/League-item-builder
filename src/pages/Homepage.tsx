import React, { useState } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All'); // Added this line to handle lane filter

  const champions = [
    { id: 1, name: 'Aatrox', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/aatrox.jpg'},
    { id: 2, name: 'Ahri', role: 'Mage', lane: 'Mid', imageUrl: '/PNG%20images/Ahri.png'},
    { id: 3, name: 'Akali', role: 'Assassin', lane: 'Mid', imageUrl: '/PNG%20images/Akali.png'},
    { id: 4, name: 'Akshan', role: 'Marksman', lane: 'Mid', imageUrl: '/PNG%20images/Akshan.png'},
    { id: 5, name: 'Alistar', role: 'Tank', lane: 'Sup', imageUrl: '/PNG%20images/Alistar.png' },
    { id: 6, name: 'Amumu', role: 'Tank', lane: 'Jungle', imageUrl: '/PNG%20images/Amumu.png'},
    { id: 7, name: 'Annie', role: 'Mage', lane: 'Mid', imageUrl: '/PNG%20images/Amumu.png'},
    { id: 200, name: 'Garen', role: 'Fighter', lane: 'Top', imageUrl: '/PNG%20images/Garen.png',},
    { id: 1000, name: 'Yasuo', role: 'Assassin', lane: 'Mid', imageUrl: '/PNG%20images/Yasuo.png',},
    { id: 100000, name: 'Lux', role: 'Mage', lane: 'Mid', imageUrl: '/PNG%20images//Lux.png',},
    // Add more milo
  ];

  // This is where it filters the champions based on search term, role, and lane
  const filteredChampions = champions.filter(
    (champion) =>
      champion.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (roleFilter === 'All' || champion.role === roleFilter) &&
      (classFilter === 'All' || champion.lane === classFilter) // Add the lane filter
  );

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">LeagueBuild</h1>
        <p className="subtitle">Create and share builds for your favorite champions.</p>
      </header>

      <div className="filters">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Champions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="role-filter"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Assassin">Assassin</option>
          <option value="Fighter">Fighter</option>
          <option value="Mage">Mage</option>
          <option value="Marksman">Marksman</option>
          <option value="Tank">Tank</option>
          {/* Add more roles as necessary milo */}
        </select>

        <select
          className="class-filter"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          <option value="All">All Lanes</option>
          <option value="Top">Top</option>
          <option value="Jungle">Jungle</option>
          <option value="Mid">Mid</option>
          <option value="Bot">Bot</option>
          <option value="Sup">Sup</option>
           {/* */}
        </select>
      </div>

      <div className="champion-grid">
        {filteredChampions.length > 0 ? (
          filteredChampions.map((champion) => (
            <div key={champion.id} className="champion-card">
              <img className="champion-image" src={champion.imageUrl} alt={champion.name} />
              <h3 className="champion-name">{champion.name}</h3>
              <div className="champion-info">
                <p className="champion-role">{champion.role}</p>
                <p className="champion-lane">{champion.lane}</p> {/**/}
              </div>
              <div className="role-icon-container">
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No champions found!</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
