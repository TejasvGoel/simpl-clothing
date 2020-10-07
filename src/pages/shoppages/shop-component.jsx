import React from 'react';
import './shop.data';

import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview-component';
import CollectionPage from '../collectionPage/collectionPage';



const shopPage = ({match}) => {
    
    return ( 
        <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}  />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
    );
}

export default shopPage;