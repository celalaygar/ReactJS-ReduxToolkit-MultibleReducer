import Counter from './redux/counterSection/Counter';
import { selectedCount } from './redux/counterSection/counterSlice';
import { useSelector } from 'react-redux';
import Authentication from './redux/authentication/Authentication';
const App = () => {

  const count = useSelector(selectedCount);
  return (
    <div>
      <Authentication />
      <hr />
      <Counter />
      <br />
      <span>type : {count.type} </span>
      <br />
      <span>coin : {count.coin} </span>
    </div>
  );
}

export default App;