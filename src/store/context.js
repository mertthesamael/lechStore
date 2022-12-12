import { ethers } from "ethers";
import React, { useEffect, useReducer, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { currentUser, db } from "../config/firestore";
import { useNavigate } from "react-router-dom";
import reducer from "../components/reducer";
import { getAuth } from "firebase/auth";
import { useGetData } from "../hooks/useGetData";


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

    const [producst, setProducts] = useState()
    const menuStateHandler = (value) => {
        return setMenuState(value)
    }
    
    const [user, dispatch] = useReducer(reducer,{
        loggedIn:false
    })
  const {data:userData} = useGetData("/api/get/Users/"+user?.uid)
    useEffect(()=>{

        getAuth().onAuthStateChanged(function(user) {
            if (!user) {
              dispatch({
               type:'UPDATE',
                loggedIn:false
            })
            }
            else{
                dispatch({
                    type:'UPDATE',
                    name:user?.displayName,
                    uid:user?.uid,
                    basket:userData?.data.basket,
                    loggedIn:true
                })
            }
            });
        console.log(userData?.data)
    
    },[userData])

    const userHandler = (user,state) => {
        console.log(user?.displayName)
        dispatch({
            type:'UPDATE',
            name:user?.displayName,
            uid:user?.uid,
            loggedIn:state
        })
    }
    const userUpdate = async (userId,productId) => {
        const docRef = await doc(db, 'Users', userId)
        await updateDoc(docRef,{
            
            basket:arrayUnion(productId)
        })
        dispatch({
            type:'UPDATE',
            name:user?.displayName,
            uid:user?.uid,
            loggedIn:true,
            basket:0,
        })
        console.log(user)
    }
    return(
        <LechContext.Provider value={{
          
            menuState:menuState,
            onMenuState:menuStateHandler,
            onSetUser:userHandler,
            user:user,
            producst:producst,
            basketHandler:userUpdate
           
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}