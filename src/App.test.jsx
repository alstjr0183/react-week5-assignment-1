import { render } from "@testing-library/react";

import App from './App';

describe('App', () => {
  // 1. 지역목록을 보여준다!
  // 2. 지역목록을 누를 수 있는 버튼으로 보여준다!
  test('show region button list', () => {
    const { getByText, getByDisplayValue } = render((
      <App />
    ));

    expect(getByText(/대전/)).not.toBeNull();
    expect(getByDisplayValue('대전')).not.toBeNull();
  });
  // 카테고리도 똑같으니까 나중에.
});