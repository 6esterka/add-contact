import { useEffect, useState, memo } from "react";
import './UserList.css';

export default (props) => {
  const [users, setUsers] = useState([]);
  //Adding the user into the list
  window.submitForm = (user) => {
    alert("Submiting form for " + user[1]);
    users[users.length - 1].name += " (*)"; // mark the previous employee
    users.push({id: users.length+1 ,name: user[1],age: user[2]});
    setUsers(users);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((foo) => {
      foo.json().then((bar) => {
        setUsers(bar);
      });
    });
  }, []);

  if (users.length === 0) return <></>;

  return (
    <div className="userlist">
      <h4>
        List of users
      </h4>
      <div>
        {users.map((d, index) => (
          <Name key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
};

export const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});
