import './index.css';
import cx from 'classnames/bind';

const Button = ({ callback, isConnected }) => {
  return (
    <button
      className={cx(
        {
          'btn': true,
          'btn--green': isConnected,
        }
      )}
      onClick={callback}
    >
      { isConnected ? 'Обновить' : 'Подключить кошелек' }
    </button>
  );
}

export default Button;
