import vector from "../assets/vector.svg";
import vector2 from "../assets/vector2.svg";
import moontheme from "../assets/moontheme.svg";
import suntheme from "../assets/suntheme.svg";
import addbtn from "../assets/addbtn.svg";
// search bar with icon
export const SearchBar = ({
  darkMode,
  setDarkMode,
  Search,
  setSearch,
  filter,
  setFilter,
}) => {
  return (
    <div className="three-top-btn">
      <div className="search-box">
        <input
          className="search-bar"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search note..."
        />

        <span className="mirror">
          <img src={darkMode ? vector2 : vector} alt="Search_bar" />
        </span>
      </div>

      <Themebtns
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};
// Themebtns
export const Themebtns = ({ darkMode, setDarkMode, filter, setFilter }) => {
  const handleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="top-two">
      <select
        className="all-btn"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value="complete">COMPLETE</option>
        <option value="incomplete">INCOMPLETE</option>
      </select>

      <button onClick={handleTheme} className="theme-btn">
        <img src={darkMode ? suntheme : moontheme} alt="dark_theme_btn" />
      </button>
    </div>
  );
};
export const Addbtn = ({ setShowModal }) => {
  return (
    <button className="addbtn" onClick={() => setShowModal(true)}>
      <img src={addbtn} alt="Add_btn" />
    </button>
  );
};
