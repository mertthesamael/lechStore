import React, { useEffect, useReducer, useState } from "react";
import  { collection, addDoc, onSnapshot, query, orderBy, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, increment } from "firebase/firestore";
import { currentUser, db } from "../config/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import reducer from "../components/reducer";
import { getAuth } from "firebase/auth";
import { useGetData } from "../hooks/useGetData";
import axios from "axios";


const LechContext = React.createContext({
    emptyValue:''
})


export const LechContextWrapper = (props) => {
    

    const [menuState, setMenuState] = useState(false)
    const [userLoading, setUserLoading] = useState(true)
    const navigate = useNavigate()
    const menuStateHandler = (value) => {
        return setMenuState(value)
    }
    
    const [user, dispatch] = useReducer(reducer,{
        loggedIn:false
    })
  const {data:userData, refetch} = useGetData("/api/get/Users/"+user?.uid)

  const checkLogin = () => {
    const result = getAuth().onAuthStateChanged(function(user) {
        if (!user) {
            setUserLoading(false)
          dispatch({
           type:'UPDATE',
           loggedIn:false
        })
        
        }
        else{
            setUserLoading(false)
            console.log(userData)
            dispatch({
                type:'UPDATE',
                name:userData?.data.name,
                uid:user?.uid,
                basket:userData?.data.basket,
                loggedIn:true,
                total:userData?.data.total,
                address:userData?.data.address
            })
        }
        
        })

        return result()
  }
    useEffect(()=>{
        setUserLoading(true)
        checkLogin()
      
       if(userLoading === false && user.loggedIn == false){
        navigate("/login")
       }
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
        console.log(item)
        const docRef = await doc(db, 'Users', userId)
        
        updateDoc(docRef,{
            
            basket:arrayRemove(item),
            total:increment(Math.abs(item.price) * -1)
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
    const userNameUpdate = async (userId,name) => {
        const docRef = await doc(db, 'Users', userId)

        updateDoc(docRef,{
            name:name
        }).then(()=> {
            dispatch({
                type:'UPDATE',
                loggedIn:true,
                name:name,
                basket:user.basket,
                uid:user.uid,
                total:user.total,
                address:user.address


            })
        }).then(()=> refetch())
    }
    const userUpdate = async (userId,productId,size,color,price) => {
        const docRef = await doc(db, 'Users', userId)
        const date = Date.now()
        updateDoc(docRef,{
            basket:arrayUnion({id:productId,size:size,color:color,price:price ,date:date}),
            total:increment(price)
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
    }
    const userUpdateAddress = async (userId,address, apartment, city,  district, name, no, zipcode) => {
        const docRef = await doc(db, 'Users', userId)
    
        updateDoc(docRef,{
            
            address:arrayUnion({address:address, apartment:apartment, city:city, district:district, name:name, no:no, zipcode:zipcode}),
           
        }).then(() => {
            dispatch({
                type:'UPDATE',
                name:user?.name,
                uid:user?.uid,
                loggedIn:true,
                basket:userData?.data.basket,
                address:userData.data.address
                
            })
            
        }).then(()=> refetch())
      
    }
    return(
        <LechContext.Provider value={{
          
            menuState:menuState,
            onMenuState:menuStateHandler,
            onSetUser:userHandler,
            user:user,
            basketHandler:userUpdate,
            deleteItem:deleteItem,
            addressHandler:userUpdateAddress,
            userLoading: userLoading,
            userNameUpdate:userNameUpdate
           
            }}>

            {props.children}

        </LechContext.Provider>
    )

}

export {LechContext}