import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export const selectRegion = (region) => ({
  type: 'SELECT_REGION',
  payload: {
    region,
  },
});

export const selectCategory = (id) => ({
  type: 'SELECT_CATEGORY',
  payload: {
    id,
  },
});

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: {
    categories,
  },
});

export const setRestaurants = (restaurants) => ({
  type: 'SET_RESTAURANTS',
  payload: {
    restaurants,
  },
});

export const setRegions = (regions) => ({
  type: 'SET_REGIONS',
  payload: {
    regions,
  },
});
export const loadRegions = () => {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
};

export const loadCategories = () => {
  return async (dispatch, getState) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
};

export const loadRestaurants = () => {
  return async (dispatch, getState) => {
    const { selectedRegion, selectedCategory } = getState();
    const restaurants = await fetchRestaurants(
      selectedRegion,
      selectedCategory,
    );
    dispatch(setRestaurants(restaurants));
  };
};
