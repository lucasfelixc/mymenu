import Image from 'next/image';

import HeaderImageBackgroundDesktop from '~/assets/image/headerBackground.png';
import HeaderImageBackgroundMobile from '~/assets/image/headerSmall.png';
import Logo from '~/assets/image/logo.svg';
import { SearchInput } from '~/components';
import { useWindowSize } from '~/utils';

import {
  Container,
  Title,
  Subtitle,
  Wrapper,
  WrapperText,
  WrapperImage,
  WrapperInput,
} from './Header.style';

export const Header = () => {
  const { width } = useWindowSize();

  return (
    <Container
      data-testid="header"
      imgBg={
        (width as number) < 768
          ? HeaderImageBackgroundMobile.src
          : HeaderImageBackgroundDesktop.src
      }
    >
      <Wrapper>
        {(width as number) >= 992 && (
          <WrapperImage>
            <Image src={Logo} layout="intrinsic" width={131} height={30} />
          </WrapperImage>
        )}

        <WrapperText>
          <Title>Descubra novos sabores</Title>
          <Subtitle>Aqui eu converso com você sobre nossa proposta</Subtitle>
        </WrapperText>
      </Wrapper>
      {(width as number) > 768 && (
        <WrapperInput>
          <SearchInput />
        </WrapperInput>
      )}
    </Container>
  );
};
