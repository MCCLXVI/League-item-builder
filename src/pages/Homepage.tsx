import React, { useState } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All'); // Added this line to handle lane filter

  const champions = [
    { id: 1, name: 'Aatrox', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/aatrox.jpg'},
    { id: 2, name: 'Ahri', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/ahri.jpg'},
    { id: 3, name: 'Akali', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/akali.jpg'},
    { id: 4, name: 'Akshan', role: 'Marksman', lane: 'Mid', imageUrl: '/Icons/akshan.jpg'},
    { id: 5, name: 'Alistar', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/alistar.jpg' },
    { id: 6, name: 'Ambessa', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/ambessa.jpg'},
    { id: 7, name: 'Amumu', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/amumu.jpg'},
    { id: 8, name: 'Anivia', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/anivia.jpg'},
    { id: 9, name: 'Annie', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/annie.jpg'},
    { id: 10, name: 'Aphelios', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/aphelios.jpg'},
    { id: 11, name: 'Ashe', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/ashe.jpg' },
    { id: 12, name: 'Aurelion Sol', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/aurelion.jpg' },
    { id: 12, name: 'Aurora', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/aurora.jpg' },
    { id: 13, name: 'Azir', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/azir.jpg' },
    { id: 14, name: 'Bard', role: 'Support', lane: 'Sup', imageUrl: '/Icons/bard.jpg' },
    { id: 15, name: 'BelVeth', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/belveth.jpg' },
    { id: 16, name: 'Blitzcrank', role: 'Support', lane: 'Sup', imageUrl: '/Icons/blitzcrank.jpg' },
    { id: 17, name: 'Brand', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/brand.jpg' },
    { id: 18, name: 'Braum', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/braum.jpg' },
    { id: 12, name: 'Briar', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/briar.jpg' },
    { id: 19, name: 'Caitlyn', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/caitlyn.jpg' },
    { id: 20, name: 'Camille', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/camille.jpg' },
    { id: 21, name: 'Cassiopeia', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/cassio.jpg' },
    { id: 22, name: 'ChoGath', role: 'Tank', lane: 'Top', imageUrl: '/Icons/chogath.jpg' },
    { id: 23, name: 'Corki', role: 'Marksman', lane: 'Mid', imageUrl: '/Icons/corki.jpg' },
    { id: 24, name: 'Darius', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/darius.jpg' },
    { id: 25, name: 'Diana', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/diana.jpg' },
    { id: 26, name: 'Draven', role: 'Marksman', lane: 'bot', imageUrl: '/Icons/draven.jpg' },
    { id: 27, name: 'Dr Mundo', role: 'Tank', lane: 'Top', imageUrl: '/Icons/drmundo.jpg' },
    { id: 28, name: 'Ekko', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/ekko.jpg' },
    { id: 29, name: 'Elise', role: 'Mage', lane: 'Jungle', imageUrl: '/Icons/elise.jpg' },
    { id: 30, name: 'Evelynn', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/evelynn.jpg' },
    { id: 31, name: 'Ezreal', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/ezreal.jpg' },
    { id: 32, name: 'Fiddlesticks', role: 'Mage', lane: 'Jungle', imageUrl: '/Icons/fiddlesticks.jpg' },
    { id: 33, name: 'Fiora', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/fiora.jpg' },
    { id: 34, name: 'Fizz', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/fizz.jpg' },
    { id: 35, name: 'Gangplank', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/gangplank.jpg' },
    { id: 36, name: 'Galio', role: 'Tank', lane: 'Mid', imageUrl: '/Icons/glaio.jpg' },
    { id: 37, name: 'Gnar', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/gnar.jpg' },
    { id: 38, name: 'Gragas', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/gragas.jpg' },
    { id: 39, name: 'Graves', role: 'Marksman', lane: 'Jungle', imageUrl: '/Icons/graves.jpg' },
    { id: 40, name: 'Gwen', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/gwen.jpg' },
    { id: 41, name: 'Hecarim', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/hecarim.jpg' },
    { id: 42, name: 'Heimerdinger', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/heimerdinger.jpg' },
    { id: 42, name: 'Hwei', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/hwei.jpg' },
    { id: 43, name: 'Illaoi', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/illaoi.jpg' },
    { id: 44, name: 'Irelia', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/irelia.jpg' },
    { id: 45, name: 'Ivern', role: 'Support', lane: 'Jungle', imageUrl: '/Icons/ivern.jpg' },
    { id: 46, name: 'Janna', role: 'Support', lane: 'Sup', imageUrl: '/Icons/janna.jpg' },
    { id: 47, name: 'Jarvan IV', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/jarvaniv.jpg' },
    { id: 48, name: 'Jax', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/jax.jpg' },
    { id: 49, name: 'Jayce', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/jayce.jpg' },
    { id: 50, name: 'Jhin', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/jhin.jpg' },
    { id: 51, name: 'Jinx', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/jinx.jpg' },
    { id: 52, name: 'KaiSa', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/kaisa.jpg' },
    { id: 53, name: 'Kalista', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/kalista.jpg' },
    { id: 54, name: 'Karma', role: 'Support', lane: 'Mid', imageUrl: '/Icons/karma.jpg' },
    { id: 55, name: 'Karthus', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/karthus.jpg' },
    { id: 56, name: 'Kassadin', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/kassadin.jpg' },
    { id: 57, name: 'Katarina', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/katarina.jpg' },
    { id: 58, name: 'Kayle', role: 'Mage', lane: 'Top', imageUrl: '/Icons/kayle.jpg' },
    { id: 59, name: 'Kayn', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/kayn.jpg' },
    { id: 60, name: 'Kennen', role: 'Mage', lane: 'Top', imageUrl: '/Icons/kennen.jpg' },
    { id: 61, name: 'KhaZix', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/khazix.jpg' },
    { id: 62, name: 'Kindred', role: 'Marksman', lane: 'Jungle', imageUrl: '/Icons/kindered.jpg' },
    { id: 63, name: 'Kled', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/kled.jpg' },
    { id: 64, name: 'KogMaw', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/kogmaw.jpg' },
    { id: 64, name: 'Ksante', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/ksante.jpg' },
    { id: 65, name: 'LeBlanc', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/leblanc.jpg' },
    { id: 66, name: 'Lee Sin', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/leesin.jpg' },
    { id: 67, name: 'Leona', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/leaona.jpg' },
    { id: 67, name: 'Leblanc', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/leblanc.jpg' },
    { id: 68, name: 'Lillia', role: 'Mage', lane: 'Jungle', imageUrl: '/Icons/lillia.jpg' },
    { id: 69, name: 'Lissandra', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/lissandra.jpg' },
    { id: 70, name: 'Lucian', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/lucian.jpg' },
    { id: 71, name: 'Lulu', role: 'Support', lane: 'Sup', imageUrl: '/Icons/lulu.jpg' },
    { id: 72, name: 'Lux', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/lux.jpg' },
    { id: 73, name: 'Malphite', role: 'Tank', lane: 'Top', imageUrl: '/Icons/malphite.jpg' },
    { id: 74, name: 'Malzahar', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/malzahar.jpg' },
    { id: 75, name: 'Maokai', role: 'Tank', lane: 'Top', imageUrl: '/Icons/maokai.jpg' },
    { id: 76, name: 'Master Yi', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/masteryi.jpg' },
    { id: 77, name: 'Miss Fortune', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/missfortune.jpg' },
    { id: 78, name: 'Mordekaiser', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/mordekaiser.jpg' },
    { id: 79, name: 'Morgana', role: 'Support', lane: 'Sup', imageUrl: '/Icons/morgana.jpg' },
    { id: 79, name: 'Naafiri', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/naafiri.jpg' },
    { id: 80, name: 'Nami', role: 'Support', lane: 'Sup', imageUrl: '/Icons/nami.jpg' },
    { id: 81, name: 'Nasus', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/nasus.jpg' },
    { id: 82, name: 'Nautilus', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/nautilus.jpg' },
    { id: 83, name: 'Neeko', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/neeko.jpg' },
    { id: 84, name: 'Nidalee', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/nidalee.jpg' },
    { id: 85, name: 'Nilah', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/nilah.jpg' },
    { id: 86, name: 'Nocturne', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/nocturne.jpg' },
    { id: 87, name: 'Nunu & Willump', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/nunu.jpg' },
    { id: 88, name: 'Olaf', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/olaf.jpg' },
    { id: 89, name: 'Orianna', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/orianna.jpg' },
    { id: 90, name: 'Ornn', role: 'Tank', lane: 'Top', imageUrl: '/Icons/ornn.jpg' },
    { id: 91, name: 'Pantheon', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/pantheon.jpg' },
    { id: 92, name: 'Poppy', role: 'Tank', lane: 'Top', imageUrl: '/Icons/poppy.jpg' },
    { id: 93, name: 'Pyke', role: 'Assassin', lane: 'Sup', imageUrl: '/Icons/pyke.jpg' },
    { id: 94, name: 'Qiyana', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/qiyana.jpg' },
    { id: 95, name: 'Quinn', role: 'Marksman', lane: 'Top', imageUrl: '/Icons/quinn.jpg' },
    { id: 96, name: 'Rakan', role: 'Support', lane: 'Sup', imageUrl: '/Icons/rakan.jpg' },
    { id: 97, name: 'Rammus', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/rammus.jpg' },
    { id: 98, name: 'RekSai', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/reksai.jpg' },
    { id: 99, name: 'Rell', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/rell.jpg' },
    { id: 100, name: 'Renata Glasc', role: 'Support', lane: 'Sup', imageUrl: '/Icons/renata glasc.jpg' },
    { id: 101, name: 'Renekton', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/renekton.jpg' },
    { id: 102, name: 'Rengar', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/rengar.jpg' },
    { id: 103, name: 'Riven', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/riven.jpg' },
    { id: 104, name: 'Rumble', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/rumble.jpg' },
    { id: 105, name: 'Ryze', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/ryze.jpg' },
    { id: 106, name: 'Samira', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/samira.jpg' },
    { id: 107, name: 'Sejuani', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/sejuani.jpg' },
    { id: 108, name: 'Senna', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/senna.jpg' },
    { id: 109, name: 'Seraphine', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/seraphine.jpg' },
    { id: 110, name: 'Sett', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/sett.jpg' },
    { id: 111, name: 'Shaco', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/shaco.jpg' },
    { id: 112, name: 'Shen', role: 'Tank', lane: 'Top', imageUrl: '/Icons/shen.jpg' },
    { id: 113, name: 'Shyvana', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/shyvana.jpg' },
    { id: 114, name: 'Singed', role: 'Tank', lane: 'Top', imageUrl: '/Icons/singed.jpg' },
    { id: 115, name: 'Sion', role: 'Tank', lane: 'Top', imageUrl: '/Icons/sion.jpg' },
    { id: 116, name: 'Sivir', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/sivir.jpg' },
    { id: 117, name: 'Skarner', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/skarner.jpg' },
    { id: 117, name: 'Smolder', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/smolder.jpg' },
    { id: 118, name: 'Sona', role: 'Support', lane: 'Sup', imageUrl: '/Icons/sona.jpg' },
    { id: 119, name: 'Soraka', role: 'Support', lane: 'Sup', imageUrl: '/Icons/soraka.jpg' },
    { id: 120, name: 'Swain', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/swain.jpg' },
    { id: 121, name: 'Sylas', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/sylas.jpg' },
    { id: 122, name: 'Syndra', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/syndra.jpg' },
    { id: 123, name: 'Tahm Kench', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/tahmkench.jpg' },
    { id: 124, name: 'Taliyah', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/taliyah.jpg' },
    { id: 125, name: 'Talon', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/talon.jpg' },
    { id: 126, name: 'Taric', role: 'Support', lane: 'Sup', imageUrl: '/Icons/taric.jpg' },
    { id: 127, name: 'Teemo', role: 'Marksman', lane: 'Top', imageUrl: '/Icons/teemo.jpg' },
    { id: 128, name: 'Thresh', role: 'Support', lane: 'Sup', imageUrl: '/Icons/thresh.jpg' },
    { id: 129, name: 'Tristana', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/tristana.jpg' },
    { id: 130, name: 'Trundle', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/trundle.jpg' },
    { id: 131, name: 'Tryndamere', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/tryndamere.jpg' },
    { id: 132, name: 'Twisted Fate', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/twitstedfate.jpg' },
    { id: 133, name: 'Twitch', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/twitch.jpg' },
    { id: 134, name: 'Udyr', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/udyr.jpg' },
    { id: 135, name: 'Urgot', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/urgot.jpg' },
    { id: 136, name: 'Varus', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/varus.jpg' },
    { id: 137, name: 'Vayne', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/vayne.jpg' },
    { id: 138, name: 'Veigar', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/veigar.jpg' },
    { id: 139, name: 'VelKoz', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/velkoz.jpg' },
    { id: 140, name: 'Vex', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/vex.jpg' },
    { id: 141, name: 'Vi', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/vi.jpg' },
    { id: 142, name: 'Viego', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/viego.jpg' },
    { id: 143, name: 'Viktor', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/viktor.jpg' },
    { id: 144, name: 'Vladimir', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/vladimir.jpg' },
    { id: 145, name: 'Volibear', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/volibear.jpg' },
    { id: 146, name: 'Warwick', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/warwick.jpg' },
    { id: 147, name: 'Wukong', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/wukong.jpg' },
    { id: 148, name: 'Xayah', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/xayah.jpg' },
    { id: 149, name: 'Xerath', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/xerath.jpg' },
    { id: 150, name: 'Xin Zhao', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/xinzhao.jpg' },
    { id: 151, name: 'Yasuo', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/yasuo.jpg' },
    { id: 152, name: 'Yone', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/yone.jpg' },
    { id: 153, name: 'Yorick', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/yorick.jpg' },
    { id: 154, name: 'Yuumi', role: 'Support', lane: 'Sup', imageUrl: '/Icons/yuumi.jpg' },
    { id: 155, name: 'Zac', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/zac.jpg' },
    { id: 156, name: 'Zed', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/zed.jpg' },
    { id: 157, name: 'Zeri', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/zeri.jpg' },
    { id: 158, name: 'Ziggs', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/ziggs.jpg' },
    { id: 159, name: 'Zilean', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/zilean.jpg' },
    { id: 160, name: 'Zoe', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/zoe.jpg' },
    { id: 161, name: 'Zyra', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/zyra.jpg' },
  ];

  // This is where it filters the champions based on search term, role, and lane milo
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
        <p className="subtitle">Create and builds for your favorite champions.</p>
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
