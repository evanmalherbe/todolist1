import './App.css';

// Import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import List from './Components/List';

// Display to do list
function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do List
      </header>
      {/* Call List component to display to do list */}
      <List />
    </div>
  );
}

// Export component so it can be used by index.js
export default App;
