const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  function App() {
    const chemists = people.filter((person) => person.profession === "chemist");
  
    const listItem = chemists.map((chemist) => (
      <li key={chemist.id}>{chemist.name}</li>
    ));
    return (
      <>
        <ul>{listItem}</ul>
      </>
    );
  }
  
  export default App;
  