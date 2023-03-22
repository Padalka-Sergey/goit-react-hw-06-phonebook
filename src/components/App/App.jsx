// import { data } from 'data/data';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsListWrapper } from 'components/ContactsList/ContactsList';

export function App() {
  return (
    <Container>
      <ContactForm />
      <ContactsListWrapper></ContactsListWrapper>
    </Container>
  );
}
