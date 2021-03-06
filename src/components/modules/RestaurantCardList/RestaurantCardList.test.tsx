import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { RecoilRoot } from 'recoil';

import { WrapperWithStyledComponents, createMockRouter } from '~/test/utils';

import { RestaurantCardList } from './RestaurantCardList';

jest.mock('~/utils/getSizeWindow', () => ({
  useWindowSize: () => ({
    width: 900,
  }),
}));

describe('RestaurantCardList', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RecoilRoot>
          <RestaurantCardList
            listCards={[
              {
                id: '',
                name: '',
                image: '',
                logo: '',
                description: '',
                telephone: '',
                price_range: '',
                payment_methods: '',
                website: '',
                opening_hours: '',
              },
            ]}
          />
        </RecoilRoot>
      </RouterContext.Provider>
    );
    const list = getByTestId('list-restaurant-cards');

    expect(list).toBeInTheDocument();
  });

  test('Should not render the wrapper input', () => {
    const { queryByTestId } = WrapperWithStyledComponents(
      render,
      <RouterContext.Provider value={createMockRouter({})}>
        <RecoilRoot>
          <RestaurantCardList
            listCards={[
              {
                id: '',
                name: '',
                image: '',
                logo: '',
                description: '',
                telephone: '',
                price_range: '',
                payment_methods: '',
                website: '',
                opening_hours: '',
              },
            ]}
          />
        </RecoilRoot>
      </RouterContext.Provider>
    );
    const list = queryByTestId('wrapper-input');

    expect(list).not.toBeInTheDocument();
  });
});
