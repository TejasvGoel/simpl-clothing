import React, { Component } from 'react';
import './shop.data';
import SHOP_DATA from './shop.data';
import PreviewComponent from '../../components/preview/preview-component';

class shopPage extends Component {
    constructor(){
        super();

        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
        const { collections } = this.state;
        return(
          collections.map(({id, ...otherProps}) => {
             return(
                 <PreviewComponent key={id} {...otherProps} />
             );
          })
        );
    }
}

export default shopPage;