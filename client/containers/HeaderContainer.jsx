import React from 'react';
import TopHeader from '../components/TopHeader.jsx';
import BottomHeader from '../components/BottomHeader.jsx';
import TempHeader from '../components/TempHeader.jsx';


const HeaderContainer = () => {
  return (
    <div>
      <TopHeader/>
      <BottomHeader/>
      <TempHeader/>
    </div>
  );
}

export default HeaderContainer;