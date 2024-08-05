import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { selectLoading, selectError } from '../redux/contactsSlice'
import {fetchContacts} from '../redux/contactsOps'
import s from './App.module.css'


const App = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
      }, [dispatch]);

     return (
       <div className={s.contactsWrapper}>
         <h1> Contact book </h1>
         <ContactsForm />
          <SearchBox />
          {loading && !error && <p>Request in progress...</p>}
          <ContactList />
        </div>
  );
};

export default App;