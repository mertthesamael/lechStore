import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../config/firestore";
import { useNavigate } from "react-router-dom";

const LechContext = React.createContext({
    emptyValue:''
})


export const LechContextWrapper = (props) => {

    const navigate = useNavigate()
    const [menuState, setMenuState] = useState(false)
    const [connected, setConnected] = useState(false)
    const [userAddr, setUserAddr] = useState("")
    const [users, setUsers] = useState()
    const newUser = (e, name, mail, phone) => {
        e.preventDefault()
        const dt = new Date()
        addDoc(collection(db,'Users'),{
            addr:userAddr,
            balance:null,
            cart:[],
            signDate: dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(),
            tsx:[],
            contact:[{mail:mail},{phone:phone}],
            name:name

        })
    }
    //Main web3 connection function
    const web3Connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        await provider.send("eth_requestAccounts", []);
        let accounts = await provider.send("eth_requestAccounts", []);
        let account = accounts[0];
        const connectedAddress = await signer.getAddress()
        setUserAddr(account)
        setConnected(true)
        
    }

 

    const menuStateHandler = (value) => {
        return setMenuState(value)
    }
  
    return(
        <LechContext.Provider value={{
            menuState:menuState,
            onMenuState:menuStateHandler,
            web3Connect:web3Connect,
            userAddr:userAddr,
            connected:connected,
            newUser:newUser
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}