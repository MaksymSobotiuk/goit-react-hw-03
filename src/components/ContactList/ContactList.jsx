
import Contact from "../Contact/Contact";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          data={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;