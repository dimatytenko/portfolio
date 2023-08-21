import React from 'react';

import {Container} from '@/app/styles';
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

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <SocialIcons>
            {socialIcons.map((icon) => (
              <SocialIconWrapper
                href={icon.link}
                target="_blank"
                key={icon.type}>
                <SocialIcon type={icon.type} />
              </SocialIconWrapper>
            ))}
          </SocialIcons>
          <FooterLinksWrapper>
            <FooterLink href={`tel: ${LINKS.PHONE}`}>
              <TextBlockWrapper>
                <FooterText>call me:</FooterText>
                <FooterText>{LINKS.PHONE}</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href={LINKS.TELEGRAM} target="_blank">
              <TextBlockWrapper>
                <FooterText>telegram:</FooterText>
                <FooterText>{`@${LINKS.TELEGRAM.split('/')[3]}`}</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href={`mailto: ${LINKS.EMAIL}`}>
              <TextBlockWrapper>
                <FooterText>email:</FooterText>
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
