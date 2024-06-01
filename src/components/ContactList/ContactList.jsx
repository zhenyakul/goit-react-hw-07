import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { selectItems, selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const { isLoading, error } = useSelector(selectItems);
  const filteredContacts = useSelector(selectFilteredContacts);

  toast.error((t) =>
    error != null ? (
      <div>Something went wrong: {error}</div>
    ) : (
      toast.remove(t.id)
    )
  );

  return (
    <div className={css.container}>
      {isLoading && <span className={css.loadingMessage}>Loading...</span>}
      {error && (
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      )}
      <ul className={css.list}>
        {filteredContacts.length > 0 &&
          filteredContacts.map((contact) => {
            return (
              <li key={contact.id}>
                <Contact data={contact} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
