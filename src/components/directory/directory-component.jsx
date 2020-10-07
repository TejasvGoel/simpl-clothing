import React from'react';
import MenuItem from '../menu-item/menu-component';
import './directory-component.scss';

import { connect } from 'react-redux';

import {selectDirectorySection} from '../../redux/directory/directory-selector';
import {createStructuredSelector} from 'reselect';

const DirectoryComponent = ({section})=> {
   
    
    return(
        <div className='directory-menu'>
            {
                section.map(({ id, ...otherComponents}) =>{
                    return(
                        <MenuItem key={id} {...otherComponents}/>
                    );
                })
            }
        </div>
    );
}



const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection
});

export default connect(mapStateToProps)(DirectoryComponent);