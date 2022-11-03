import './index.css';

const Error = ({error}) => {
  return (
    error &&
      <div className='error'>Расширение MetaMask не установлено</div>
  );
}

export default Error;
