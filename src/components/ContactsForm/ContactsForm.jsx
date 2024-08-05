import { Field, Form, Formik } from 'formik';
import s from './ContactsForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactsForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='name' placeholder='Enter new contact' />
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactsForm


