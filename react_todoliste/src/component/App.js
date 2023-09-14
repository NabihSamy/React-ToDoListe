import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import ListTask from './ListTask';
import AddTask from './AddTask';

function App() {
  return ( <div className="App">
    <Header />
    <AddTask />
    <ListTask />
    <Footer />
  </div>
  );
}

export default App;
