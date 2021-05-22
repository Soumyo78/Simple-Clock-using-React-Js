import './App.css';
import NavbarComponent from './components/NavbarComponent/index';
import RoutesComponent from './routes';

const App = (props) => {
  return (
    <div>
      <NavbarComponent/>
      <RoutesComponent/>
    </div>
  );
}

export default App;
