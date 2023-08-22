import Image from 'next/image';
import type {Metadata} from 'next';

import {
  HomeWrapper,
  HomeContent,
  Container,
  LeftSide,
  Title,
  TitleModifyre,
  SubTitle,
  Button,
  CvIcon,
  RightSide,
  Decor,
  DecorIcon,
  CursorWrapper,
  CursorIcon,
  CursorDecor,
  ToolboxWrapper,
  ToolboxIcon,
  CheckWrapper,
  CheckIcon,
  ImageWrapper,
  PhotoWrapper,
  DesktopWrapper,
  MobileWrapper,
} from './styles';
import monitor from '@/assets/images/monitor.png';
import photo_1 from '@/assets/images/photo_1.png';
import {LINKS} from '@/constants/common';

export const metadata: Metadata = {
  title: 'Web developer portfolio',
  description: 'Portfolio web developer from Sumy, Ukraine',
};

export default function Home() {
  return (
    <HomeWrapper>
      <Container>
        <HomeContent>
          <LeftSide>
            <Title>
              Hi There! I am <TitleModifyre>Dima</TitleModifyre>, WEB Developer.
            </Title>
            <SubTitle>I am coding everyday and I love it.</SubTitle>
            <MobileWrapper>
              <Decor>
                <ImageWrapper>
                  <Image
                    src={monitor}
                    alt="monitor"
                    width={476}
                    height={464}
                    priority={true}
                  />
                </ImageWrapper>
                <ToolboxWrapper>
                  <ToolboxIcon />
                  <CheckWrapper>
                    <CheckIcon />
                  </CheckWrapper>
                </ToolboxWrapper>
              </Decor>
            </MobileWrapper>
            <Button href={LINKS.CV}>
              <CvIcon />
              cv
            </Button>
          </LeftSide>
          <RightSide>
            <DecorIcon />
            <DesktopWrapper>
              <Decor>
                <ImageWrapper>
                  <Image
                    src={monitor}
                    alt="monitor"
                    width={476}
                    height={464}
                    priority={true}
                  />
                </ImageWrapper>
                <ToolboxWrapper>
                  <ToolboxIcon />
                  <CheckWrapper>
                    <CheckIcon />
                  </CheckWrapper>
                </ToolboxWrapper>
              </Decor>
            </DesktopWrapper>
            <Decor $isEnd>
              <PhotoWrapper>
                <Image
                  src={photo_1}
                  alt="photo"
                  width={270}
                  height={380}
                  priority={true}
                />
              </PhotoWrapper>
              <CursorWrapper>
                <CursorIcon />
                <CursorDecor>dima</CursorDecor>
              </CursorWrapper>
            </Decor>
          </RightSide>
        </HomeContent>
      </Container>
    </HomeWrapper>
  );
}
