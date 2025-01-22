import React, { useState } from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All'); // Added this line to handle lane filter

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
  { id: 13, name: 'Aurora', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/aurora.jpg' },
  { id: 14, name: 'Azir', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/azir.jpg' },
  { id: 15, name: 'Bard', role: 'Support', lane: 'Sup', imageUrl: '/Icons/bard.jpg' },
  { id: 16, name: 'BelVeth', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/belveth.jpg' },
  { id: 17, name: 'Blitzcrank', role: 'Support', lane: 'Sup', imageUrl: '/Icons/blitzcrank.jpg' },
  { id: 18, name: 'Brand', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/brand.jpg' },
  { id: 19, name: 'Braum', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/braum.jpg' },
  { id: 20, name: 'Briar', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/briar.jpg' },
  { id: 21, name: 'Caitlyn', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/caitlyn.jpg' },
  { id: 22, name: 'Camille', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/camille.jpg' },
  { id: 23, name: 'Cassiopeia', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/cassio.jpg' },
  { id: 24, name: 'ChoGath', role: 'Tank', lane: 'Top', imageUrl: '/Icons/chogath.jpg' },
  { id: 25, name: 'Corki', role: 'Marksman', lane: 'Mid', imageUrl: '/Icons/corki.jpg' },
  { id: 26, name: 'Darius', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/darius.jpg' },
  { id: 27, name: 'Diana', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/diana.jpg' },
  { id: 28, name: 'Draven', role: 'Marksman', lane: 'bot', imageUrl: '/Icons/draven.jpg' },
  { id: 29, name: 'Dr Mundo', role: 'Tank', lane: 'Top', imageUrl: '/Icons/drmundo.jpg' },
  { id: 30, name: 'Ekko', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/ekko.jpg' },
  { id: 31, name: 'Elise', role: 'Mage', lane: 'Jungle', imageUrl: '/Icons/elise.jpg' },
  { id: 32, name: 'Evelynn', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/evelynn.jpg' },
  { id: 33, name: 'Ezreal', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/ezreal.jpg' },
  { id: 34, name: 'Fiddlesticks', role: 'Mage', lane: 'Jungle', imageUrl: '/Icons/fiddlesticks.jpg' },
  { id: 35, name: 'Fiora', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/fiora.jpg' },
  { id: 36, name: 'Fizz', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/fizz.jpg' },
  { id: 37, name: 'Gangplank', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/gangplank.jpg' },
  { id: 38, name: 'Galio', role: 'Tank', lane: 'Mid', imageUrl: '/Icons/glaio.jpg' },
  { id: 39, name: 'Gnar', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/gnar.jpg' },
  { id: 40, name: 'Gragas', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/gragas.jpg' },
  { id: 41, name: 'Graves', role: 'Marksman', lane: 'Jungle', imageUrl: '/Icons/graves.jpg' },
  { id: 42, name: 'Gwen', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/gwen.jpg' },
  { id: 44, name: 'Hecarim', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/hecarim.jpg' },
  { id: 45, name: 'Heimerdinger', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/heimerdinger.jpg' },
  { id: 46, name: 'Hwei', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/hwei.jpg' },
  { id: 47, name: 'Illaoi', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/illaoi.jpg' },
  { id: 48, name: 'Irelia', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/irelia.jpg' },
  { id: 49, name: 'Ivern', role: 'Support', lane: 'Jungle', imageUrl: '/Icons/ivern.jpg' },
  { id: 50, name: 'Janna', role: 'Support', lane: 'Sup', imageUrl: '/Icons/janna.jpg' },
  { id: 51, name: 'Jarvan IV', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/jarvaniv.jpg' },
  { id: 52, name: 'Jax', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/jax.jpg' },
  { id: 53, name: 'Jayce', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/jayce.jpg' },
  { id: 54, name: 'Jhin', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/jhin.jpg' },
  { id: 55, name: 'Jinx', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/jinx.jpg' },
  { id: 56, name: 'KaiSa', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/kaisa.jpg' },
  { id: 57, name: 'Kalista', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/kalista.jpg' },
  { id: 58, name: 'Karma', role: 'Support', lane: 'Mid', imageUrl: '/Icons/karma.jpg' },
  { id: 59, name: 'Karthus', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/karthus.jpg' },
  { id: 60, name: 'Kassadin', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/kassadin.jpg' },
  { id: 61, name: 'Katarina', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/katarina.jpg' },
  { id: 62, name: 'Kayle', role: 'Mage', lane: 'Top', imageUrl: '/Icons/kayle.jpg' },
  { id: 63, name: 'Kayn', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/kayn.jpg' },
  { id: 64, name: 'Kennen', role: 'Mage', lane: 'Top', imageUrl: '/Icons/kennen.jpg' },
  { id: 65, name: 'KhaZix', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/khazix.jpg' },
  { id: 66, name: 'Kindred', role: 'Marksman', lane: 'Jungle', imageUrl: '/Icons/kindered.jpg' },
  { id: 67, name: 'Kled', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/kled.jpg' },
  { id: 68, name: 'KogMaw', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/kogmaw.jpg' },
  { id: 69, name: 'Ksante', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/ksante.jpg' },
  { id: 70, name: 'LeBlanc', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/leblanc.jpg' },
  { id: 71, name: 'Lee Sin', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/leesin.jpg' },
  { id: 72, name: 'Leona', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/leaona.jpg' },
  { id: 74, name: 'Lillia', role: 'Mage', lane: 'Jungle', imageUrl: '/Icons/lillia.jpg' },
  { id: 75, name: 'Lissandra', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/lissandra.jpg' },
  { id: 76, name: 'Lucian', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/lucian.jpg' },
  { id: 77, name: 'Lulu', role: 'Support', lane: 'Sup', imageUrl: '/Icons/lulu.jpg' },
  { id: 78, name: 'Lux', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/lux.jpg' },
  { id: 79, name: 'Malphite', role: 'Tank', lane: 'Top', imageUrl: '/Icons/malphite.jpg' },
  { id: 80, name: 'Malzahar', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/malzahar.jpg' },
  { id: 81, name: 'Maokai', role: 'Tank', lane: 'Top', imageUrl: '/Icons/maokai.jpg' },
  { id: 82, name: 'Master Yi', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/masteryi.jpg' },
  { id: 83, name: 'Miss Fortune', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/missfortune.jpg' },
  { id: 84, name: 'Mordekaiser', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/mordekaiser.jpg' },
  { id: 85, name: 'Morgana', role: 'Support', lane: 'Sup', imageUrl: '/Icons/morgana.jpg' },
  { id: 86, name: 'Naafiri', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/naafiri.jpg' },
  { id: 87, name: 'Nami', role: 'Support', lane: 'Sup', imageUrl: '/Icons/nami.jpg' },
  { id: 88, name: 'Nasus', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/nasus.jpg' },
  { id: 89, name: 'Nautilus', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/nautilus.jpg' },
  { id: 90, name: 'Neeko', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/neeko.jpg' },
  { id: 91, name: 'Nidalee', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/nidalee.jpg' },
  { id: 92, name: 'Nilah', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/nilah.jpg' },
  { id: 93, name: 'Nocturne', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/nocturne.jpg' },
  { id: 94, name: 'Nunu & Willump', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/nunu.jpg' },
  { id: 95, name: 'Olaf', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/olaf.jpg' },
  { id: 96, name: 'Orianna', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/orianna.jpg' },
  { id: 97, name: 'Ornn', role: 'Tank', lane: 'Top', imageUrl: '/Icons/ornn.jpg' },
  { id: 98, name: 'Pantheon', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/pantheon.jpg' },
  { id: 99, name: 'Poppy', role: 'Tank', lane: 'Top', imageUrl: '/Icons/poppy.jpg' },
  { id: 100, name: 'Pyke', role: 'Assassin', lane: 'Sup', imageUrl: '/Icons/pyke.jpg' },
  { id: 101, name: 'Qiyana', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/qiyana.jpg' },
  { id: 102, name: 'Quinn', role: 'Marksman', lane: 'Top', imageUrl: '/Icons/quinn.jpg' },
  { id: 103, name: 'Rakan', role: 'Support', lane: 'Sup', imageUrl: '/Icons/rakan.jpg' },
  { id: 104, name: 'Rammus', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/rammus.jpg' },
  { id: 105, name: 'RekSai', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/reksai.jpg' },
  { id: 106, name: 'Rell', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/rell.jpg' },
  { id: 107, name: 'Renata Glasc', role: 'Support', lane: 'Sup', imageUrl: '/Icons/renata glasc.jpg' },
  { id: 108, name: 'Renekton', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/renekton.jpg' },
  { id: 109, name: 'Rengar', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/rengar.jpg' },
  { id: 110, name: 'Riven', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/riven.jpg' },
  { id: 111, name: 'Rumble', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/rumble.jpg' },
  { id: 112, name: 'Ryze', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/ryze.jpg' },
  { id: 113, name: 'Samira', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/samira.jpg' },
  { id: 114, name: 'Sejuani', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/sejuani.jpg' },
  { id: 115, name: 'Senna', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/senna.jpg' },
  { id: 116, name: 'Seraphine', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/seraphine.jpg' },
  { id: 117, name: 'Sett', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/sett.jpg' },
  { id: 118, name: 'Shaco', role: 'Assassin', lane: 'Jungle', imageUrl: '/Icons/shaco.jpg' },
  { id: 119, name: 'Shen', role: 'Tank', lane: 'Top', imageUrl: '/Icons/shen.jpg' },
  { id: 120, name: 'Shyvana', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/shyvana.jpg' },
  { id: 121, name: 'Singed', role: 'Tank', lane: 'Top', imageUrl: '/Icons/singed.jpg' },
  { id: 122, name: 'Sion', role: 'Tank', lane: 'Top', imageUrl: '/Icons/sion.jpg' },
  { id: 123, name: 'Sivir', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/sivir.jpg' },
  { id: 124, name: 'Skarner', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/skarner.jpg' },
  { id: 125, name: 'Smolder', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/smolder.jpg' },
  { id: 126, name: 'Sona', role: 'Support', lane: 'Sup', imageUrl: '/Icons/sona.jpg' },
  { id: 127, name: 'Soraka', role: 'Support', lane: 'Sup', imageUrl: '/Icons/soraka.jpg' },
  { id: 128, name: 'Swain', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/swain.jpg' },
  { id: 129, name: 'Sylas', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/sylas.jpg' },
  { id: 130, name: 'Syndra', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/syndra.jpg' },
  { id: 131, name: 'Tahm Kench', role: 'Tank', lane: 'Sup', imageUrl: '/Icons/tahmkench.jpg' },
  { id: 132, name: 'Taliyah', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/taliyah.jpg' },
  { id: 133, name: 'Talon', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/talon.jpg' },
  { id: 134, name: 'Taric', role: 'Support', lane: 'Sup', imageUrl: '/Icons/taric.jpg' },
  { id: 135, name: 'Teemo', role: 'Marksman', lane: 'Top', imageUrl: '/Icons/teemo.jpg' },
  { id: 136, name: 'Thresh', role: 'Support', lane: 'Sup', imageUrl: '/Icons/thresh.jpg' },
  { id: 137, name: 'Tristana', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/tristana.jpg' },
  { id: 138, name: 'Trundle', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/trundle.jpg' },
  { id: 139, name: 'Tryndamere', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/tryndamere.jpg' },
  { id: 140, name: 'Twisted Fate', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/twitstedfate.jpg' },
  { id: 141, name: 'Twitch', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/twitch.jpg' },
  { id: 142, name: 'Udyr', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/udyr.jpg' },
  { id: 143, name: 'Urgot', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/urgot.jpg' },
  { id: 144, name: 'Varus', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/varus.jpg' },
  { id: 145, name: 'Vayne', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/vayne.jpg' },
  { id: 146, name: 'Veigar', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/veigar.jpg' },
  { id: 147, name: 'VelKoz', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/velkoz.jpg' },
  { id: 148, name: 'Vex', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/vex.jpg' },
  { id: 149, name: 'Vi', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/vi.jpg' },
  { id: 150, name: 'Viego', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/viego.jpg' },
  { id: 151, name: 'Viktor', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/viktor.jpg' },
  { id: 152, name: 'Vladimir', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/vladimir.jpg' },
  { id: 153, name: 'Volibear', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/volibear.jpg' },
  { id: 154, name: 'Warwick', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/warwick.jpg' },
  { id: 156, name: 'Wukong', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/wukong.jpg' },
  { id: 157, name: 'Xayah', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/xayah.jpg' },
  { id: 158, name: 'Xerath', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/xerath.jpg' },
  { id: 159, name: 'Xin Zhao', role: 'Fighter', lane: 'Jungle', imageUrl: '/Icons/xinzhao.jpg' },
  { id: 160, name: 'Yasuo', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/yasuo.jpg' },
  { id: 161, name: 'Yone', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/yone.jpg' },
  { id: 162, name: 'Yorick', role: 'Fighter', lane: 'Top', imageUrl: '/Icons/yorick.jpg' },
  { id: 163, name: 'Yuumi', role: 'Support', lane: 'Sup', imageUrl: '/Icons/yuumi.jpg' },
  { id: 164, name: 'Zac', role: 'Tank', lane: 'Jungle', imageUrl: '/Icons/zac.jpg' },
  { id: 165, name: 'Zed', role: 'Assassin', lane: 'Mid', imageUrl: '/Icons/zed.jpg' },
  { id: 166, name: 'Zeri', role: 'Marksman', lane: 'Bot', imageUrl: '/Icons/zeri.jpg' },
  { id: 167, name: 'Ziggs', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/ziggs.jpg' },
  { id: 168, name: 'Zilean', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/zilean.jpg' },
  { id: 169, name: 'Zoe', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/zoe.jpg' },
  { id: 170, name: 'Zyra', role: 'Mage', lane: 'Mid', imageUrl: '/Icons/zyra.jpg' },
];

export default Homepage;
