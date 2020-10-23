import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { restaurants } from '../../fixtures';

import RegionsContaioner from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

import {
  loadRegions,
} from '../actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  });

  return (
    <>
      <RegionsContaioner />
      <CategoriesContainer />
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
          </li>
        ))}
      </ul>
    </>
  );
}
