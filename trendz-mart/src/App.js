
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavbarMiddle from './Components/NavbarMiddle/NavbarMiddle';
import DownNavbar from './Components/DownNavbar/DownNavbar';
import ImageCard from './Components/ImageCard/ImageCard';
import Designer from './Components/Designers/Designers';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import HomeCarts from './Components/HomeCarts/HomeCarts';
import OneOfAKind from './Components/OneOfAKind/OneOfAKind';
import EightByYoox from './Components/EightByYoox/EightByYoox';


function App() {
  return (
    <div className="App">
   <Navbar />
   <NavbarMiddle />
   <DownNavbar />
   <ImageCard />
   <Designer />
   <NewArrivals />
   <HomeCarts />
   <OneOfAKind />
   <EightByYoox />

  

    </div>
  );
}

export default App;
