import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import s from './App.module.css'

const App = () => {
     return (
        <div className={s.contactsWrapper}>
            <ContactsForm />
            <SearchBox />
            <ContactList />
        </div>
  );
};

export default App;