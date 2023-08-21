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

const socialIcons: {
  type: icon;
  link: string;
}[] = [
  {
    type: 'github',
    link: 'https://github.com/dimatytenko',
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/dima-tytenko-a5b26a21b/',
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
            <FooterLink href="tel: +380666812092">
              <TextBlockWrapper>
                <FooterText>call me:</FooterText>
                <FooterText>+380666812092</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href="https://t.me/dimatytenko" target="_blank">
              <TextBlockWrapper>
                <FooterText>telegram:</FooterText>
                <FooterText>@dimatytenko</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href="mailto: amgpetronass@gmail.com">
              <TextBlockWrapper>
                <FooterText>Email:</FooterText>
                <FooterText>amgpetronass@gmail.com</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <ArrowIcon />
          </FooterLinksWrapper>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
