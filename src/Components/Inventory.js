import React from 'react';
import '../Styles/Custom.css';

import Menu from './Menu';

 function Inventory() {
  return (
      <div className="inv-container">
          <div className="box1">
              <h3> Box 1</h3>
              <p> Box1 content goes here</p>
          </div>

          <div className="box2">
              <h3> Box 2</h3>
              <p> Box2 content goes here</p>
          </div>

          <div className="box3">
              <h3> Box 3</h3>
              <p> Box3 content goes here</p>
          </div>
          <div className="box4">
            <h3> Box 4</h3>
            <p> Box4 content goes here</p>
          </div>
      </div>
      
    
  )
 }

export default Inventory;
