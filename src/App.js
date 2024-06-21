import logo from './logo.svg';
import './App.css';
import First from './First'
import Copyright from './Copyright';
import Menu from './Menu';
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';
import Teamcontainer from './Teamcontainer';
import Banner from './Banner';
import Des from './Des';
function App() {
  return (
   <>
   <Menu></Menu>
   <Banner></Banner>
   <br></br>
   <Des></Des>
   <div className="appContainer">
    {/* <Sidebar></Sidebar>
    <Maincontainer></Maincontainer> */}
    <Teamcontainer></Teamcontainer>
   </div>
     <Copyright></Copyright>
   </>
  );
}

export default App;
