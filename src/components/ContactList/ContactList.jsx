import css from './ContactLIst.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ filteredUsers, deleteContacts }) => {
  return (
    <ul className={css.list}>
      {filteredUsers.map(item => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          id={item.id}
          deleteContacts={deleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;
