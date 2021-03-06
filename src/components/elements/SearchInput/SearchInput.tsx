import { useState } from 'react';

import Image from 'next/image';

import Search from '~/assets/icons/search.png';

import { Input, ContainerInput, ContentSearchImage } from './SearchInput.style';

export const SearchInput = () => {
  const [value, setValue] = useState('');

  return (
    <ContainerInput data-testid="container-input">
      <ContentSearchImage>
        <Image src={Search} alt="Search" width={15} height={15} />
      </ContentSearchImage>
      <Input
        data-testid="input"
        placeholder="Encontre um restaurante"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </ContainerInput>
  );
};
