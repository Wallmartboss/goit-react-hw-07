import { Field, Form, Formik } from 'formik';
import s from './ContactsForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const initialValues = { contact: '', id: '' };

  const onSubmit = (values, options) => {
    const newItem = { contact: values.contact, id: nanoid() };
      dispatch(addContact(newItem));
      options.resetForm();
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='contact' placeholder='Enter new contact' />
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactsForm