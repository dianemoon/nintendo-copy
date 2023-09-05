import React from 'react';

const TopHeader = () => {
  return (
    <div id='top-header'>
      <h1>Nintendo</h1>
      <input type='text' placeholder='Search'></input>
      <div class='search-dropdown'>
      </div>
    </div>
  );
}

export default TopHeader;