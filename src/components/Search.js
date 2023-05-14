import styles from './SideBar.module.css';
import search from '../assets/images/vector.svg';

const Search = ({ openModal }) => {
    return (
        <button className={styles.searchButton} onClick={() => openModal(true)}>
            <img src={search} className={styles.searchIcon} alt='search' /> 
            Search for a city or airport
        </button>
    );
};

export default Search;
