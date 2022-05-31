import { useState } from 'react';
import Categories from './Categories';

import Regions from './Regions';

export default function App() {
  const initialState = {
    currentRegionId: Number.MIN_SAFE_INTEGER,
    currentCategoryId: Number.MIN_SAFE_INTEGER,
    regions: [
      {
        id: 1,
        name: '서울',
      },
      {
        id: 2,
        name: '대전',
      },
      {
        id: 3,
        name: '대구',
      },
      {
        id: 4,
        name: '부산',
      },
      {
        id: 5,
        name: '광주',
      },
      {
        id: 6,
        name: '강원도',
      },
      {
        id: 7,
        name: '인천',
      },
      {
        id: 8,
        name: '제주',
      },
      {
        id: 9,
        name: '전주',
      },
      {
        id: 10,
        name: '순천',
      },
      {
        id: 11,
        name: '독도',
      },
    ],
    categories: [
      {
        id: 1,
        name: '한식',
      },
      {
        id: 2,
        name: '중식',
      },
      {
        id: 3,
        name: '일식',
      },
      {
        id: 4,
        name: '양식',
      },
      {
        id: 5,
        name: '분식',
      },
    ],
    restaurants: [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      },
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
      {
        id: 14,
        categoryId: 1,
        name: '김초밥',
        address: '서울시 강남구 역삼동',
        information: '김초밥 in 서울시 강남구 역삼동',
      },
    ],
  };

  const [state, setState] = useState(initialState);

  const handleClick = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div>
      <Regions state={state} onClick={handleClick} />
      <Categories state={state} onClick={handleClick} />
      {(state.currentCategoryId && state.currentRegionId) && (
        <ul>
          {state.restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
