import { useEffect, useState } from "react";

const useTitle = (initialValue) => {
    const [title, setTitle] = useState(initialValue);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

/*
function App() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("home"), 500);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
    
}
export default App;
*/