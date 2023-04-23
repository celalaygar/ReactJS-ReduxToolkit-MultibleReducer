import Counter from './redux/counterSection/Counter';
import { selectedCount } from './redux/counterSection/counterSlice';
import { useSelector } from 'react-redux';
import Authentication from './redux/authentication/Authentication';
import { selectedAuthentication } from './redux/authentication/AuthenticationSlice';
const App = () => {

  const count = useSelector(selectedCount);

  const selectedAuth = useSelector(selectedAuthentication);
  return (
    <div>

      <span>isloggedIn : {selectedAuth.isloggedIn + ""} </span>

      <hr />
      <hr />

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