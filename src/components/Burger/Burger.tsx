import { useState } from 'react';
import './Burger.css';
import { Username } from '../Username';

const Burger = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="header__burger" onClick={handleExpanded}>
        <span className={'header__burger-string ' + (expanded ? ' open' : '')}></span>
        <span className={'header__burger-string ' + (expanded ? ' open' : '')}></span>
        <span className={'header__burger-string ' + (expanded ? ' open' : '')}></span>
      </div>
      <Username
        username="Tony Soprano"
        className={'userblock' + (!expanded ? ' popup-hidden' : ' popup-open')}
      />
    </>
  );
};

export { Burger }