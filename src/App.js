import './App.css';
import { useInput } from './useInput.js';
import { useTab } from './useTab.js';
import { useTitle } from './useTitle.js';

function App() {
  /*
  useInput.js
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>useInput.js</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
    
  useTab.js
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );

  useTitle.js
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 500);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
  */
  return (
    <div className="App">
      <h1>hello</h1>      
    </div>
  );
}

export default App;
