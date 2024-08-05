import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectFilteredContacts);

// console.log(contacts);

    // const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
      <ul>
       {contacts.map(item => (
           <li key={item.id} className={s.list}>
               <Contact item={item} />
        </li>
      ))}
    </ul>
  )
};

export default ContactList;