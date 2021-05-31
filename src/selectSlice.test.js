import reducer, {
  updateSelectedCategory,
  updateSelectedRegion,
} from './selectedSlice';

describe('selectSlice', () => {
  describe('action creator', () => {
    it('create action to update category', () => {
      expect(updateSelectedCategory('한식')).toEqual(
        { type: 'selected/updateSelectedCategory', payload: '한식' },
      );
    });

    it('updates selected region', () => {
      expect(updateSelectedRegion('서울')).toEqual(
        { type: 'selected/updateSelectedRegion', payload: '서울' },
      );
    });
  });

  describe('reducer', () => {
    it('update selected category', () => {
      const oldState = { category: '' };
      const newState = { category: '한식' };

      expect(reducer(
        oldState,
        updateSelectedCategory('한식'),
      )).toEqual(newState);
    });

    it('update selected region', () => {
      const oldState = { region: '' };
      const newState = { region: '서울' };

      expect(reducer(
        oldState,
        updateSelectedRegion('서울'),
      )).toEqual(newState);
    });
  });
});
