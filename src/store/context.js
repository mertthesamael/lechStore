import { ethers } from "ethers";
import React, { useEffect, useReducer, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { currentUser, db } from "../config/firestore";
import { useNavigate } from "react-router-dom";
import reducer from "../components/reducer";
import { getAuth } from "firebase/auth";


const LechContext = React.createContext({
    emptyValue:''
})


export const LechContextWrapper = (props) => {
    
// WEB3 Codes
    // const navigate = useNavigate()
    const [menuState, setMenuState] = useState(false)
    // const [connected, setConnected] = useState(false)
    // const [userAddr, setUserAddr] = useState("")
    // const [users, setUsers] = useState()
    // const newUser = (e, name, mail, phone) => {
    //     e.preventDefault()
    //     const dt = new Date()
    //     addDoc(collection(db,'Users'),{
    //         addr:userAddr,
    //         balance:null,
    //         cart:[],
    //         signDate: dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(),
    //         tsx:[],
    //         contact:[{mail:mail},{phone:phone}],
    //         name:name

    //     })
    // }
    // //Main web3 connection function
    // const web3Connect = async () => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum)
    //     const signer = provider.getSigner()
    //     await provider.send("eth_requestAccounts", []);
    //     let accounts = await provider.send("eth_requestAccounts", []);
    //     let account = accounts[0];
    //     const connectedAddress = await signer.getAddress()
    //     setUserAddr(account)
    //     setConnected(true)
        
    // }

    
    const menuStateHandler = (value) => {
        return setMenuState(value)
    }
    
    const [user, dispatch] = useReducer(reducer,{
        loggedIn:false
    })
  
    useEffect(()=>{
        
        getAuth().onAuthStateChanged(function(user) {
            if (!user) {
                console.log(user)
              dispatch({
               type:'UPDATE',
                loggedIn:false
            })
            }
            else{
                dispatch({
                    type:'UPDATE',
                    name:user?.displayName,
                    loggedIn:true
                })
            }
            });
    },[])
    const userHandler = (user,state) => {
        dispatch({
            type:'UPDATE',
            name:user?.displayName,
            loggedIn:state
        })
    }

    return(
        <LechContext.Provider value={{
          
            menuState:menuState,
            onMenuState:menuStateHandler,
            onSetUser:userHandler,
            user:user
           
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}