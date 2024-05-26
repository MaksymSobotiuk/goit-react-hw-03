import css from "./Contact.module.css"

import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <p >
           <FaUser />
          {name}
        </p>
        <p >
           <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.button}
        
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;