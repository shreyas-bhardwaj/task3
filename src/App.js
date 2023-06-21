import './App.css';
import { ColorPicker } from './components/colorPicker';

function App() {
  return (
    <ColorPicker colors={["red", "blue", "green", "black", "purple"]} />
  );
}

export default App;
