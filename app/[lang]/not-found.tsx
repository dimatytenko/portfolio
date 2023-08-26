import {
  NotFoundWrapper,
  NotFoundContent,
  Container,
  NotFoundTitle,
  NotFoundSubTitle,
  NotFoundDescription,
  NotFoundButton,
} from '@/app/[lang]/styles';

export default async function NotFound() {
  return (
    <>
      <NotFoundWrapper>
        <Container>
          <NotFoundContent>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundSubTitle>Page Not Found</NotFoundSubTitle>
            <NotFoundDescription>
              Sorry, we couldn`t find the page you`re looking for
            </NotFoundDescription>
            <NotFoundButton href="/">Back to home</NotFoundButton>
          </NotFoundContent>
        </Container>
      </NotFoundWrapper>
    </>
  );
}
