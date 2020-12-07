import Header from './Header';
import './App.css';

// https://www.youtube.com/watch?v=TxggrQ0nHjY
function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="app_header">
        <Header/>
      </div>
      {/* body */}
      <div className="app_body">
        <div className="app__container">

        </div>
      </div>
    </div>
  );
}

export default App;
