import css from './Contact.module.css';
import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

const Contact = ({ name, number, deleteContacts, id }) => {
  return (
    <li className={css.card}>
      <div>
        <h3 className={css.name}>
          <MdPerson />
          {name}
        </h3>
        <p className={css.number}>
          <MdPhone />
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          deleteContacts(id);
        }}
        className={css.btn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
