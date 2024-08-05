import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);


    const filteredData = contacts.filter(item => item.contact.toLowerCase().includes(filter.toLowerCase()));

  return (
      <ul>
       {filteredData.map(item => (
           <li key={item.id} className={s.list}>
               <Contact item={item} />
        </li>
      ))}
    </ul>
  )
};

export default ContactList;