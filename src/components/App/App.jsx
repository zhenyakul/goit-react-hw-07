import { useEffect } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContactsData } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
