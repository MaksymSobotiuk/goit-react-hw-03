import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <div >
      <div >
        <p >
           <FaUser />
          {name}
        </p>
        <p >
           <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;