import { render } from '@testing-library/react';

import { WrapperWithStyledComponents } from '~/test/utils';

import { TagInfo } from './TagInfo';

describe('TagInfo', () => {
  test('Should render', () => {
    const { getByText } = WrapperWithStyledComponents(
      render,
      <TagInfo
        title="title test"
        lines={[{ line: 'subtitle test', isSmall: false }]}
      />
    );
    const title = getByText('title test');
    const subtitle = getByText('subtitle test');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
