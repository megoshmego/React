Certainly! Here are some code snippets to illustrate the concepts discussed in the video regarding state vs props:

1. GameBoard component with props for rows and columns:
```jsx
// Example: GameBoard component with props for rows and columns
function GameBoard(props) {
  // State for the score
  const [score, setScore] = useState(0);

  // Logic for the game board component

  return (
    <div>
      {/* Render the game board */}
      <p>Number of Rows: {props.rows}</p>
      <p>Number of Columns: {props.columns}</p>
      {/* Render the score */}
      <p>Score: {score}</p>
    </div>
  );
}

// Usage:
<GameBoard rows={3} columns={3} />
```

In this example, the GameBoard component receives the number of rows and columns as props. These props represent the static configuration of the game board, and they are passed down when initializing the component.

2. Using state for the score:
```jsx
// Example: GameBoard component with state for the score
function GameBoard(props) {
  const [score, setScore] = useState(0);

  // Logic for the game board component

  // Function to update the score
  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      {/* Render the game board */}
      <p>Number of Rows: {props.rows}</p>
      <p>Number of Columns: {props.columns}</p>
      {/* Render the score */}
      <p>Score: {score}</p>
      {/* Button to update the score */}
      <button onClick={updateScore}>Increase Score</button>
    </div>
  );
}

// Usage:
<GameBoard rows={3} columns={3} />
```

In this example, the GameBoard component uses state to manage the score. The score can change during the game, and it is stored and updated using the `useState` hook. The `updateScore` function demonstrates how the score can be modified using the `setScore` function.

These examples show how props are used for static configuration or data that doesn't change within the component, while state is used for data that can change and needs to be managed within the component.