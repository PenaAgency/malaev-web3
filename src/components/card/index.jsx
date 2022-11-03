import './index.css';

const Card = ({
  data: {
    adress,
    balance,
    currentChain
  }
}) => {
  return (
    <div className='card'>
      <div className='card__balance'>
        {balance} {currentChain?.chain}
      </div>
      <div className='card__network'>
        {currentChain?.name}
      </div>
      <div className='card__adress'>
        {adress}
      </div>
    </div>
  );
}

export default Card;
