import './App.css'
import "./Carousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar"
import {Banner} from "./components/Banner"
import { Slider } from './components/Slider';
import { Table } from './components/Table';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Slider/>
      <Table/>
    </div>
  )
}

export default App
