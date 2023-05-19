import React from 'react';
import './DropdownMenu.css';

function DropdownMenu(props) {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Log out</a></li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
