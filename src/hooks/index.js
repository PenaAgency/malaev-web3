import { ethers } from "ethers";
import { useEffect, useState  } from 'react';
import axios from 'axios';

export const useWeb3 = () => {
  const [ error, setError ] = useState();
  const [ isConnected, setIsConnected ] = useState(false);
  const [ account, setAccount ] = useState({});

  useEffect(() => {
    if (!window.ethereum) {
      setError('Пожалуйста установите расширение MetaMask')
    }
  }, [])

  const getChainList = async () => {
    try {
      const response = await axios("https://chainid.network/chains.json");
      const { data } = response;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const connect = async () => {
    if (window.ethereum) {
      setError('');
      const chainList = await getChainList();
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const getAccountInfo = async (adress) => {
        const hexBalance = await provider.getBalance(adress);
        const balance = ethers.utils.formatEther(hexBalance)
        
        const { chainId } = await provider.getNetwork();
        const currentChain = chainList.find((item) => item.chainId === chainId);
        
        return { balance, currentChain, adress }
      };

      const currentAccount = await getAccountInfo(accounts[0])
      setAccount(currentAccount);
      setIsConnected(true);
    }
  }

  return {
    error,
    account,
    connect,
    isConnected,
  }
}