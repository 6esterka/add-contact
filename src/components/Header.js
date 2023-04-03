import { useEffect, useState } from "react";
import "./Header.css";

export default (props) => {

  const [users, setUsers] = useState([]);
  //Set the newUser into the users array
  if(props.newUserItem!==null){
    users.push(props.newUserItem);
  }
  useEffect(() => {
    (async () => {
      return new Promise((res) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((foo) => {
          foo.json().then((bar) => {
            setUsers(bar);
            res();
          });
        });
      });
    })();
  }, []);

  if (users.length === 0) return <></>;

  return (
    <div className="header">
      Last employee is {" "}
      <span
        dangerouslySetInnerHTML={{
          __html: `<strong>${users[users.length - 1].name}</strong>`
        }}
      ></span>
    </div>
  );
};
