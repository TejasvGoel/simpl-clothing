import React from 'react';
import './menu-component.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, id, imageUrl, size, linkUrl, match, history }) => {
    return (
      
        <div className={`${size} menu-item`}
            onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >
            <div style={{backgroundImage:`url(${imageUrl})`}} className='background-effect'/>
            <div className='content '>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop Now</span>
                </div>
            </div>
    
        
    );
}

export default withRouter(MenuItem);