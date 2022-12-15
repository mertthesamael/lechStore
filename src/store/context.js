import { ethers } from "ethers";
import React, { useEffect, useReducer, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { currentUser, db } from "../config/firestore";
import { useNavigate } from "react-router-dom";
import reducer from "../components/reducer";
import { getAuth } from "firebase/auth";
import { useGetData } from "../hooks/useGetData";
import { id } from "ethers/lib/utils";


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
  const {data:userData, refetch} = useGetData("/api/get/Users/"+user?.uid)
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
                    loggedIn:true,
                    total:userData?.data.total,
                    address:userData?.data.address
                })
            }
            });
       console.log(user.address)
    
    },[userData])

    const userHandler = (user,state) => {
 
        dispatch({
            type:'UPDATE',
            name:user?.displayName,
            uid:user?.uid,
            loggedIn:state
        })
    }
    const deleteItem = async(userId,item) => {

        const docRef = await doc(db, 'Users', userId)
        
        updateDoc(docRef,{
            
            basket:arrayRemove(item),
            total:user.total-=item.price
        }).then(() => {

            dispatch({
                type:'UPDATE',
                name:user?.name,
                uid:user?.uid,
                loggedIn:true,
                basket:userData?.data.basket,
                total:user.total-=item.price
            })
            
        }).then(()=> refetch())
    }
    const userUpdate = async (userId,productId,size,color,price) => {
        const docRef = await doc(db, 'Users', userId)
    
        updateDoc(docRef,{
            
            basket:arrayUnion({id:productId,size:size,color:color,price:price}),
            total:user.total+=price
        }).then(() => {
            dispatch({
                type:'UPDATE',
                name:user?.name,
                uid:user?.uid,
                loggedIn:true,
                basket:userData?.data.basket,
                total:user.total+=price
            })
            
        }).then(()=> refetch())
      
        console.log(userData, user)
    }
    return(
        <LechContext.Provider value={{
          
            menuState:menuState,
            onMenuState:menuStateHandler,
            onSetUser:userHandler,
            user:user,
            producst:producst,
            basketHandler:userUpdate,
            deleteItem:deleteItem
           
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}