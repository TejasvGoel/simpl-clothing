
import {createSelector} from 'reselect';

import memoize from 'lodash.memoize';




const selectShop = state => state.shop_data;

export const Collections = createSelector(
    [selectShop],
    shop_data => shop_data.collections
);   

export const CollectionsPreview = createSelector(
    [Collections],
    collections => Object.keys(collections).map(key=>collections[key])
);

export const selectCollection =memoize((collectionUrlParam) =>
createSelector(
    [Collections],
    collections => collections[collectionUrlParam]
)
);
