import { useState } from "react";
import { AddNewUser } from "./components/addnewuser";
import Header from "./components/Header";
import USERLIST from "./components/UserList";
import "./styles.css";

export default function App() {
  const [addedUser,setAddedUser]=useState(null);
  //Setting addedUser with newUser that we have getted from addnewuser controller
  const addUserHandler=(newUser)=>{
    setAddedUser(newUser);
  }

  return (
    <div>
      <div>
        <Header newUserItem={addedUser} />
      </div>
      <div>
        <AddNewUser onAddUser={addUserHandler}/>
      </div>
      <div>
        <USERLIST/>
      </div>
    </div>
  );
}
