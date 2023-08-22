import {Container} from '@/app/styles';
import {AboutPage, AboutContent, AvatarWrapper} from './styles';
import {Avatar} from '@/components/Avatar';
import {about} from '@/public/data/about';
import {AboutComponent} from '@/components/About';

export const metadata = {
  title: 'Portfolio | About',
  description: 'About me',
};

export default function About() {
  return (
    <AboutPage>
      <Container>
        <AboutContent>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
          <AboutComponent data={about} />
        </AboutContent>
      </Container>
    </AboutPage>
  );
}
