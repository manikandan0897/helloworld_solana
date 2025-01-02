import { Program, AnchorProvider, setProvider } from '@coral-xyz/anchor';

import { useWallet,useConnection,useAnchorWallet  } from '@solana/wallet-adapter-react';
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";

import { Helloworld } from './helloworld';
import  idl  from './helloworld.json';
import * as anchor from "@coral-xyz/anchor";


export default function Counting() {
    
    const { connected, select, publicKey } = useWallet()
    const { connection } = useConnection();
    
    const wallet = useAnchorWallet();


    const onConnect = () => {
        select(PhantomWalletName)
    }


    const counterincre = async() => {
      const provider = new AnchorProvider(connection, wallet, {commitment: 'confirmed'});
      setProvider(provider);
      const program = new Program(idl as Helloworld, provider);
          
      const tx = await program.methods.initialize().accounts({
          user: wallet.publicKey
      }).rpc()
      alert(tx);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">{
                        connected ? <>
                        <button className="btn btn-primary">{publicKey?.toBase58()}</button>
                        </> : <>
                            <button className="btn btn-primary" onClick={onConnect}>Connect Wallet</button>
                        </>
                        }
                        
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div className='container text-center'>
                <div className=''>
                    <h4>Counter app</h4>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={counterincre}>Counter</button>
                    <p></p>
                </div>
            </div>
        </>
    )
}