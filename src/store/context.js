import { ethers } from "ethers";
import React, { useEffect, useState } from "react";


const LechContext = React.createContext({
    emptyValue:''
})


export const LechContextWrapper = (props) => {


    const [menuState, setMenuState] = useState(false)
    const [connected, setConnected] = useState(false)
    const [userAddr, setUserAddr] = useState("")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
   
   //Main web3 connection function
    const web3Connect = async () => {
        await provider.send("eth_requestAccounts", []);
        let accounts = await provider.send("eth_requestAccounts", []);
        let account = accounts[0];
        
        const connectedAddress = await signer.getAddress()
        setUserAddr(accounts[0])
        setConnected(true)
    }

    //Setting current addr on change
    useEffect(() => {
        web3Connect()
    },[provider.on('accountsChanged')])


    const menuStateHandler = (value) => {
        return setMenuState(value)
    }
  
    return(
        <LechContext.Provider value={{
            menuState:menuState,
            onMenuState:menuStateHandler,
            web3Connect:web3Connect,
            userAddr:userAddr,
            connected:connected
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}