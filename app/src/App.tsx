import { useMemo } from 'react'
import './App.css'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import Counting from './components/Counting'

function App() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new PhantomWalletAdapter()],[network])

  return (
    <>
     <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <Counting/>
        </WalletProvider>  
    </ConnectionProvider>
    </>
  )
}

export default App