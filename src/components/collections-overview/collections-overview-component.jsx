import React from 'react';
import PreviewComponent from '../../components/preview/preview-component';

import {CollectionsPreview} from '../../redux/shop/shop-selector';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

const CollectionOverview = ({collections}) =>{
    return(
        <div className='collection-overview'>
       { 
       collections.map(({id, ...otherProps}) => {
            return(
                <PreviewComponent key={id} {...otherProps} />
            );
         })
         }
         </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: CollectionsPreview
})

export default  connect(mapStateToProps)(CollectionOverview);