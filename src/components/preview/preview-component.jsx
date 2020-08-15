import React from 'react';
import './preview-component.style.scss';
import CollectionItem from '../collection-item/collection-item-component';

const PreviewComponent = ({title, items, id}) =>{
    return(
        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx)=> idx < 4).map(({id, ...otherComponents}) =>{
                        return(
                            <CollectionItem key={id} {...otherComponents} />   
                        )
                    })
                }

            </div>
        </div>
    );
}

export default PreviewComponent;