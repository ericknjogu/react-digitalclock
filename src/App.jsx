import { useState, useEffect } from "react";

export default function App() {
  const [sync, setSync] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "React Tutorial " + counter;
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
    return () => {
      controller.abort();
    };
  });

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click me</button>
      <button onClick={() => setSync((current) => !current)}>sync</button>
    </div>
  );
}
