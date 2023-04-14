import '../styles/SideBar.css';
import search from '../assets/images/vector.svg';

const Search = ({ openModal }) => {
    return (
        <button className="search-button" onClick={() => openModal(true)}>
            <img src={search} className="search-icon" />
            Search for a city or airport
        </button>
    );
};

export default Search;
