import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';


function App() {
  return (
    <div>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
    </div>
  );
}

export default App;