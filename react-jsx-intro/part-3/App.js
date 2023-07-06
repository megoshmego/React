function Person(props) {
    // Deconstruct props
    const { name, age, hobbies } = props;
  
    // Check if the person is over 18
    const isOver18 = age > 18;
  
    // Check if the name is longer than 8 characters and truncate if necessary
    const displayedName = name.length > 8 ? name.substring(0, 6) : name;
  
    return (
      <div className="Person">
        <p>Learn some information about this person</p>
        <p>Name: {displayedName}</p>
        <p>Age: {age}</p>
        <h3>{isOver18 ? 'Please go vote!' : 'You must be 18'}</h3>
        <h4>Hobbies:</h4>
        <ul>
          {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
      </div>
    );
  }
  
  function App() {
    return (
      <div className="App">
        <Person 
          name="Alexander" 
          age={22} 
          hobbies={["Reading", "Coding", "Gaming"]} 
        />
        <Person 
          name="Billy" 
          age={17} 
          hobbies={["Drawing", "Watching TV"]} 
        />
        <Person 
          name="Charlie" 
          age={35} 
          hobbies={["Hiking", "Photography", "Cooking"]} 
        />
      </div>
    );
  }
  