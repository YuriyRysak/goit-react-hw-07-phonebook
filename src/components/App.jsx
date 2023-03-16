import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  const { items, isLoading, error } = useSelector(getContacts);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Рендерим разметку в зависимости от значений в состоянии
  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};


// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import './App.module.css';



// export const App = () => {

   

//   return (
//     <section>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter/>
//       <ContactList/>
//     </section>
//   );
// };

 
  
  
