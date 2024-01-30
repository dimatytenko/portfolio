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
  ButtonWrapper,
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
} from '@/app/[lang]/styles';
import monitorMob from '@/public/img/static/monitor-mob.webp';
import monitorDesk from '@/public/img/static/monitor-desk.webp';

import photo_1 from '@/public/img/static/photo_1.webp';
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
                    src={monitorMob}
                    alt="monitor"
                    width={286}
                    height={274}
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
            <ButtonWrapper>
              <Button href={LINKS.CV}>
                <CvIcon />
                {dictionary['home'].cv}
              </Button>
            </ButtonWrapper>
          </LeftSide>
          <RightSide>
            <DecorIcon />
            <DesktopWrapper>
              <Decor>
                <ImageWrapper>
                  <Image
                    src={monitorDesk}
                    alt="monitor"
                    width={376}
                    height={364}
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

    // additionalMetaTags: [{name: 'freelancehunt', content: 'f22b9f5ab098322'}],
  };
}
