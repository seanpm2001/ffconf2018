import Nav from '../nav';
import Tickets from '../tickets';

import data from './data';

import './nav-main.scss';

const NavMain = () => {
  return (
    <nav className="nav-main">
      <button
        id="nav-main-open"
        aria-expanded="false"
        className="nav-main__link nav-main__link--button"
      >
        Open Menu
      </button>
      <div className="nav-main__content">
        <Nav data={data} className="nav-main" />
        <div>
          <Tickets namespace="nav-main-buy" />
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
