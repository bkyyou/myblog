import React, { Component } from 'react';
import WithTooltip from './withTooltip'

const ItemC = ( props ) => {
  return ( 
      <div className='container'>
        <WithTooltip>
        {({ showToolTip, content}) => (
          <div>
          <button className="btn btn-primary" type="btn"> Tooltip C </button>
          {showToolTip && (
            <span className="badge badge-pill badge-primary ml-2">
              {content}
            </span>
          )}
          </div>
        )}
        </WithTooltip>
      </div>
   );
}
 
export default ItemC;