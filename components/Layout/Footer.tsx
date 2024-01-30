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
  ariaLabel: string;
}[] = [
  {
    type: 'github',
    link: LINKS.GITHUB,
    ariaLabel: 'git hub',
  },
  {
    type: 'linkedin',
    link: LINKS.LINKEDIN,
    ariaLabel: 'linkedin',
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
              <SocialIconWrapper
                href={icon.link}
                key={icon.type}
                aria-label={icon.ariaLabel}
                target="_blank"
                rel="
            noopener noreferrer
            ">
                <SocialIcon type={icon.type} />
              </SocialIconWrapper>
            ))}
          </SocialIcons>
          <FooterLinksWrapper>
            <FooterLink href={`tel: ${LINKS.PHONE}`}>
              <TextBlockWrapper color="#ffdd1c">
                <FooterText
                  color="#ffdd1c"
                  data-text={`${dictionary['footer'].call}:`}>
                  {dictionary['footer'].call}:
                </FooterText>
                <FooterText color="#ffdd1c" data-text={LINKS.PHONE}>
                  {LINKS.PHONE}
                </FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink
              href={LINKS.TELEGRAM}
              target="_blank"
              rel="
            noopener noreferrer
            ">
              <TextBlockWrapper color="#ff6492">
                <FooterText
                  color="#ff6492"
                  data-text={`${dictionary['footer'].telegram}:`}>
                  {dictionary['footer'].telegram}:
                </FooterText>
                <FooterText
                  color="#ff6492"
                  data-text={`@${LINKS.TELEGRAM.split('/')[3]}`}>{`@${
                  LINKS.TELEGRAM.split('/')[3]
                }`}</FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <FooterLink href={`mailto: ${LINKS.EMAIL}`}>
              <TextBlockWrapper color="#00dc82">
                <FooterText
                  color="#00dc82"
                  data-text={`${dictionary['footer'].email}:`}>
                  {dictionary['footer'].email}:
                </FooterText>
                <FooterText color="#00dc82" data-text={LINKS.EMAIL}>
                  {LINKS.EMAIL}
                </FooterText>
              </TextBlockWrapper>
            </FooterLink>
            <ArrowIcon />
          </FooterLinksWrapper>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
