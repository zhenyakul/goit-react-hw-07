import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactData } from "../../redux/contactsOps";

export default function Contact({ data: { name, phoneNumber, id } }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContactData(id));
  };
  return (
    <div className={css.listItem}>
      <div className={css.dataContainer}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{phoneNumber}</p>
      </div>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
