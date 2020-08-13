import React from 'react';
import './menu-component.scss';
const MenuItem = ({ title, id, imageUrl, size }) => {
    return (
      
        <div className={`${size} menu-item`}>
            <div style={{backgroundImage:`url(${imageUrl})`}} className='background-effect'/>
            <div className='content '>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Shop Now</span>
                </div>
            </div>
    
        
    );
}

export default MenuItem;