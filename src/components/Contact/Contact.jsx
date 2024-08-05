import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import s from './Contact.module.css'

const Contact = ({ item }) => {
  const dispatch = useDispatch();
   
  return (
    <div className={s.item}>
           <p className={s.name}>{item.name}</p>
           <button className={s.btn} onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
    </div>
  )
};

export default Contact;