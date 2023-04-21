import Counter from './redux/counterSection/Counter';
import { selectCount } from './redux/counterSection/counterSlice';
import { useSelector } from 'react-redux';
const App = () => {

  const count = useSelector(selectCount);
  return (
    <div>
      <Counter />
      <br />
      <span>type : {count.type} </span>
      <br />
      <span>coin : {count.coin} </span>
    </div>
  );
}

export default App;