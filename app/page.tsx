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
  DesktopWrapper,
  MobileWrapper,
} from './styles';
import monitor from '@/assets/images/monitor.png';

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
            <Button
              href="https://drive.google.com/file/d/1-bhPHtrqXvLJ1E9UP6maCLLe_VLDWUnr/view?usp=drive_link"
              target="_blank">
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
