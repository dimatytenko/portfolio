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
} from '@/app/styles';
import monitor from '@/public/img/static/monitor.png';
import photo_1 from '@/public/img/static/photo_1.png';
import {LINKS} from '@/constants/common';
import {getDictionary} from '@/get-dictionary';
import {Locale} from '@/i18n-config';

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang);

  return (
    <HomeWrapper>
      <Container>
        <HomeContent>
          <LeftSide>
            <Title>
              {dictionary['home'].titleBeforeName}
              <TitleModifyre>{dictionary['home'].name}</TitleModifyre>
              {dictionary['home'].titleAfterName}
            </Title>
            <SubTitle>{dictionary['home'].subTitle}</SubTitle>
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
              {dictionary['home'].cv}
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
                <CursorDecor>{dictionary['home'].name}</CursorDecor>
              </CursorWrapper>
            </Decor>
          </RightSide>
        </HomeContent>
      </Container>
    </HomeWrapper>
  );
}

export async function generateMetadata({
  params: {lang},
}: {
  params: {lang: Locale};
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary['meta'].title,
    description: dictionary['meta'].description,
  };
}
