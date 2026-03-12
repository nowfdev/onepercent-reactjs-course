import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "../../data.js";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("Nowf");
  function handleSelect(btnSelected) {
    setContent(btnSelected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>CORE CONCEPTS</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("component")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {content}
        </section>
      </main>
    </div>
  );
}

export default App;
