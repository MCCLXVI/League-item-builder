// Homepage.tsx
import React, { useState } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const champions = [
    { id: 1, name: 'Ahri', role: 'Mage', imageUrl: '/Ahri_OriginalSquare.png', roleIconUrl: 'logo192.png' },
    { id: 2, name: 'Garen', role: 'Fighter', imageUrl: '/GarenSquare.png', roleIconUrl: 'logo192.png' },
    { id: 3, name: 'Yasuo', role: 'Assassin', imageUrl: '/YasuoSquare.png', roleIconUrl: '.png' },
    { id: 4, name: 'Lux', role: 'Mage', imageUrl: '/LuxSquare.png', roleIconUrl: '.png' },
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
          <option value="Assassin">Assassin</option>
          <option value="Fighter">Fighter</option>
          <option value="Mage">Mage</option>
          <option value="Marksman">Marksman</option>
          
          {/* Add better roles plz milo as i just chucked them in xD */}
        </select>

        <select
          className="role-filter"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="All">Positions</option>
          <option value="Top">Top</option>
          <option value="Jungle">Jungle</option>
          <option value="Mid">Mid</option>
          <option value="Bot">Bot</option>
          <option value="Sup">Sup</option>
          
          {/**/}
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
                <img
                  className="role-icon"
                  src={champion.roleIconUrl}
                  alt={`${champion.name} role icon`}
                />
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
