import { createSelector } from 'reselect';

export const favorisSelector = state => state.favoris;

export const favorisListSelector = createSelector(
    [favorisSelector],
    favoris => favoris.data
)

export const favorisListNameSelector = createSelector(
    [favorisSelector],
    favorisData => favorisData.map(f => f.title)
)

export const favorisIsLoadingSelector = createSelector(
    [favorisSelector],
    favoris => favoris.IsLoading
)