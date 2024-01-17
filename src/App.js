import logo from './logo.svg';
import './App.css';
import { useElementSize } from '@mantine/hooks';
import { rem } from '@mantine/core';

function App() {
  const { ref, width, height } = useElementSize();
  return (
    <div className="font-bold">
     <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <div>Width: {width}, height: {height}</div>
    </div>
  );
}

export default App;
