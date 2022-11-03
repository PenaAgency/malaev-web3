import { useWeb3 } from "./hooks";
import Card from './components/card';
import Error from './components/error';
import Button from './components/button';
import './App.css';

function App() {
  const { 
    error,
    account,
    isConnected,
    connect,
  } = useWeb3();

  const walletAdress = process.env.REACT_APP_WAllET_ADRESS;
  const welcomeText = walletAdress === account.adress ? 'Привет' : 'Вас нет в базе';

  const connectWalletHandler = () => connect();

  return (
    <div className='app'>
      <div className='title'>Web 3.0 Test</div> 
      <div className='container'>
        <Error error={error}/>
        <p>Авторизуйтесь в расширении MetaMask и нажмите кнопку "Подключить кошелек".</p>
        <Button callback={connectWalletHandler} isConnected={isConnected}/>
        { isConnected && 
            <>
              <h1>{ welcomeText }</h1>
              <Card data={account}/>
            </>
        }
      </div>
    </div>
  );
}

export default App;
