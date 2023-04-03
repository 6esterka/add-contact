import { useMemo, useState } from "react";
import UserInformation from "./UserInformation";
import "./addnewuser.css"

export const AddNewUser = (props) => {
  const [age, setAge] = useState('');
  const [name, setName] = useState("");
  const [id,setId] = useState(null);
  const doSomething = (d) => {
    setName(d.target.value);
  };

  const foo = () => {
    if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      //Creating newUser as an object to collect the data from input
      const newUser={
        id:0,
        name:name,
        age:age
      }
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response=>response.json())
      .then(data=>{
        //Setting here ID if in the future we will connect it with API that can give unique ID but for JSONplaceholder it is useless line of code
        setId(data.id);
      })
      .catch(error=>console.error(error));
      //Sending the created user for handling it in the App.js
      props.onAddUser(newUser);
      //Sending into the submitting form     
      window.submitForm([id,name,age]);
      //Clean input
      setAge('');
      setName("");
      setId('');
    }
  };

  const userData = { age };

  return (
    <div className="newuser__controls">
      <input
        value={name} 
        type="text" 
        onChange={doSomething} 
        placeholder="Type your name" />
      <input
        value={age}
        type="number"
        onChange={(d) => setAge(d.target.value)}
        placeholder="Type your age"
      />
      <button onClick={foo}>Submit form</button>
      <UserInformation data={userData} />
    </div>
  );
};
