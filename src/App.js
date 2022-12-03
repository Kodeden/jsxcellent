import './App.css';
import Restaurant from './Restaurant';
import { RESTAURANTS } from './fakeDb';

function App() {
  const appTitle = 'Bill and Ted\'s Excellent Reviews';

  return (
    <div className="App">
      <div className='content-container'>
        <div className='title'>
          {/* App title goes here */}
          <hr/>
        </div>
        {/* Loop over RESTAURANTS array from fakeDb.js and return a restaurant component for each restaurant */}
      </div>
    </div>
  );
}

export default App;
