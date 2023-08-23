import {Container} from '@/app/styles';
import {ServicePage, ServiceContent} from './styles';
import {Service} from '@/components/Service';
import {services} from '@/public/data/services';

export const metadata = {
  title: 'Portfolio | Services',
  description: 'Services',
};

export default function Services() {
  return (
    <ServicePage>
      <Container>
        <ServiceContent>
          {services.map((service) => (
            <Service key={service.tag} data={service} />
          ))}
        </ServiceContent>
      </Container>
    </ServicePage>
  );
}
