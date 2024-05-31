import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectItems, selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const { isLoading, error } = useSelector(selectItems);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {isLoading && <span>Loading...</span>}
      {error && (
        <div>
          <b>Something went wrong:</b>
          <p>{error}</p>
        </div>
      )}
      {filteredContacts.length > 0 &&
        filteredContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          );
        })}
    </ul>
  );
}
