import React from 'react';

import {Container} from '@/app/[lang]/styles';
import {
  StyledFooter,
  FooterContent,
  SocialIcons,
  SocialIconWrapper,
  SocialIcon,
  FooterLinksWrapper,
  FooterLink,
  TextBlockWrapper,
  FooterText,
  ArrowIcon,
} from './styles';
import {icon} from '@/ui-kit/Icon/Svg/types';
import {LINKS} from '@/constants/common';
import {TDictionary} from '@/types/locale';

const socialIcons: {
  type: icon;
  link: string;
}[] = [
  {
    type: 'github',
    link: LINKS.GITHUB,
  },
  {
    type: 'linkedin',
    link: LINKS.LINKEDIN,
  },
];

interface IFooterProps {
  dictionary: TDictionary;
}

export const Footer: React.FC<IFooterProps> = ({dictionary}) => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <SocialIcons>
            {socialIcons.map((icon) => (
              <SocialIconWrapper href={icon.link} key={icon.type}>
                <SocialIcon type={icon.type} />
              </SocialIconWrapper>
            ))}
          </SocialIcons>
          <FooterLinksWrapper>
            <FooterLink href={`tel: ${LINKS.PHONE}`}>
              <TextBlockWrapper>
                <FooterText>{dictionary['footer'].call}:</FooterText>
                <FooterText>{LINKS.PHONE}</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href={LINKS.TELEGRAM}>
              <TextBlockWrapper>
                <FooterText>{dictionary['footer'].telegram}:</FooterText>
                <FooterText>{`@${LINKS.TELEGRAM.split('/')[3]}`}</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href={`mailto: ${LINKS.EMAIL}`}>
              <TextBlockWrapper>
                <FooterText>{dictionary['footer'].email}:</FooterText>
                <FooterText>{LINKS.EMAIL}</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <ArrowIcon />
          </FooterLinksWrapper>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
