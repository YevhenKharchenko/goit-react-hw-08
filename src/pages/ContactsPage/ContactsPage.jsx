import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import DocumentTitle from '../../components/DocumentTitle';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts App - Your contacts</DocumentTitle>
      <ContactForm />
      <div className={css.contactsWrapper}>
        <div className={css.searchWrapper}>
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
