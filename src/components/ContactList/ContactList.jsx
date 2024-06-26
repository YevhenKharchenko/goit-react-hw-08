import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.listWrapper}>
      {contacts.length ? (
        <List sx={{ width: '100%', bgcolor: 'background.paper', paddingBottom: 0 }}>
          {contacts.map(({ id, name, number }) => (
            <ListItem
              key={id}
              sx={{
                display: 'flex',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
              }}
            >
              <Contact name={name} number={number} id={id} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h5" component="p" sx={{ textAlign: 'center', marginTop: '50px' }}>
          You do not have any contacts yet!
        </Typography>
      )}
      {loading && !error && <Loader />}
    </div>
  );
};

export default ContactList;
