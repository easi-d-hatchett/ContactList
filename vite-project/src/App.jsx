import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";


 function App() {
  const [contactList, setContactList] = useState();
  const [selectedContactId, setSelectedContactId] = useState(null);
 
 


  

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}




