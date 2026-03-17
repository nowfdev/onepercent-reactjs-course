import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="Nowf" symbol="X" />
          <Player initName="Mon" symbol="O" />
        </ol>
      </div>
      <GameBoard />
    </main>
  );
}

export default App;
