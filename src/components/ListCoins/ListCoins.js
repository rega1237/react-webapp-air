import React from 'react';
import { NavLink } from 'react-router-dom';

const ListCoins = () => (
  <div className="list-coins">
    <NavLink to="/details-madrid">
      <div>
        Madrid
      </div>
    </NavLink>
    <NavLink to="/details-london">
      <div>London</div>
    </NavLink>
    <NavLink to="/details-paris">
      <div>
        Paris
      </div>
    </NavLink>
    <NavLink to="/details-berlin">
      <div>Berlin</div>
    </NavLink>
    <NavLink to="/details-Roma">
      <div>
        Roma
      </div>
    </NavLink>
    <NavLink to="/details-moscow">
      <div>Moscow</div>
    </NavLink>
    <NavLink to="/details-amsterdam">
      <div>Amsterdam</div>
    </NavLink>
  </div>

);

export default ListCoins;
