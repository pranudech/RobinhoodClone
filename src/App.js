import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';
import './App.css';

// https://www.youtube.com/watch?v=TxggrQ0nHjY
// https://github.com/CleverProgrammers/robinhood-clone
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
          <Newsfeed/>

          {/* stats */}
          <Stats/>
        </div>
      </div>
    </div>
  );
}

export default App;
