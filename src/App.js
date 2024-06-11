
import './App.css';
import Accordion from './components/Accordian';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QrGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color'
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TailwindPractice from './components/tailwind';
import Treeview from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStar = {7}/>
      <ImageSlider url={"https://picsum.photos/v2/list"}  page={"1"} limit={"10"}/>
       <LoadMoreData/>
       <Treeview menus={menus}/>
      {<QrGenerator/>}        
      <ScrollIndicator/>
      {/* <TailwindPractice/> */}
    </div>
  );
}

export default App;
