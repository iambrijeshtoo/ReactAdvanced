import { data } from "../../data";
import { useState } from "react";

export const UseStateArrayExample = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(() => {
      return people.filter((person) => {
        person.id !== id;
      });
    });
  };

  return (
    <>
      <h1>useState array example</h1>
      <div>
        {people.map((person) => {
          const { id, name } = person;

          return (
            <div key={id}>
              <h4>{name}</h4>
              <button type="button" onClick={() => removeItem(id)}>
                Remove
              </button>
            </div>
          );
        })}
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Remove All
        </button>
      </div>
    </>
  );
};
