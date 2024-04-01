import { useEffect, useState } from "react";
import { db } from "./firebase/Reactfire";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const userCollectionRef = collection(db, "crud");

  // crud operation with firebase.
  const createUser = async () => {
    await addDoc(userCollectionRef, { name: name, age: age });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      const docsRef = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(docsRef);
      setUsers(docsRef);
    };
    getUsers();
    // eslint-disable-next-line
  }, []);

  const updateAge = async (id, age) => {
    const usersDoc = doc(db, "crud", id);
    const newAge = { age: age + 5 };
    await updateDoc(usersDoc, newAge);
  };

  const deleteUser = async (id) => {
    const usersDoc = doc(db, "crud", id);
    await deleteDoc(usersDoc);
  };

  return (
    <>
      {users.map((user) => {
        return (
          <>
            <input
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <button onClick={createUser}>create</button>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <h1>Country:{user.country}</h1>
            <button onClick={() => updateAge(user.id, user.age)}>
              Update Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </>
        );
      })}
    </>
  );
}

export default App;
