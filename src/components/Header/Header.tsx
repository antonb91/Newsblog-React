import './Header.css';
import { Burger } from '../Burger';
import { Search } from '../Search';
import { Username } from '../Username'
import { SearchIcon } from '../Icons';

const Header = () => {
    return (
        <header>
            <Burger/>
            <Search/>
            <SearchIcon/>
            <div className="header__left-side"></div>
            <Username className="userblock" username="Tony Soprano" />
        </header>
    )
}



export { Header }