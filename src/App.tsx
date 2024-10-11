import './App.css';

import DisplayRoot from './components/display/DisplayRoot';
import FunctionRoot from './components/function/FunctionRoot';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <DisplayRoot />
      <FunctionRoot />
    </div>
  );
}

export default App;