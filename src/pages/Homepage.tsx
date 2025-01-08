// Homepage.tsx
import React, { useState } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const champions = [
    { id: 1, name: 'Ahri', role: 'Mage', imageUrl: '/Ahri_OriginalSquare.webp' },
    { id: 2, name: 'Garen', role: 'Fighter', imageUrl: '/GarenSquare.webp' },
    { id: 3, name: 'Yasuo', role: 'Marksman', imageUrl: '/YasuoSquare.webp' },
    { id: 4, name: 'Lux', role: 'Mage', imageUrl: '/LuxSquare.webp' },

    // Add the champs here milo
  ];

  // This is where it filters the champions based on search term and role
  const filteredChampions = champions.filter(
    (champion) =>
      champion.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (roleFilter === 'All' || champion.role === roleFilter)
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
          <option value="Mage">Mage</option>
          <option value="Fighter">Fighter</option>
          <option value="Marksman">Marksman</option>
          {/* Add better roles plz milo as i just chucked them in xD */}
        </select>
      </div>

      <div className="champion-grid">
        {filteredChampions.length > 0 ? (
          filteredChampions.map((champion) => (
            <div key={champion.id} className="champion-card">
              <img className="champion-image" src={champion.imageUrl} alt={champion.name} />
              <h3 className="champion-name">{champion.name}</h3>
              <p className="champion-role">{champion.role}</p>
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
