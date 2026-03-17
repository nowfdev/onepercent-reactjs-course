import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Nowf" symbol="X" />
          <Player name="Mon" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
