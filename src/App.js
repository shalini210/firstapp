import logo from './logo.svg';
import './App.css';
import First from './First'
import Copyright from './Copyright';
import Menu from './Menu';
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';
function App() {
  return (
   <>
   <Menu></Menu>
   <div className="appContainer">
    <Sidebar></Sidebar>
    <Maincontainer></Maincontainer>
   </div>
     <Copyright></Copyright>
   </>
  );
}

export default App;
