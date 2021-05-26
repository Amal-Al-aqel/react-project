import img1 from './img/food1.jpg';
import img2 from './img/food2.jpg';
import img3 from './img/food3.jpg';
import './App.css';
import Img from './Img.js';
const img = [img1, img2, img3];

function App() {
  return (
    <div>
      {img.map((element, index) => (
        <Img key={index} imgSrc={element}></Img>
      ))}
    </div>
  );
}

export default App;
