import { useState } from 'react';
import './Search.css'

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOnFocus = () => {
    setIsActive(true);
  };
  const handleOnBlur = () => {
    setIsActive(false);
  };

  return (
    <input
      className={'header__search ' + (isActive ? ' header__search-active' : '')}
      placeholder={isActive ? 'Search...' : ''}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
};

export { Search }