import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
  const currency = import.meta.env.VITE_CURRENCY;


    const navigate=useNavigate();
    const [user,setUser]=useState(true)
    const [isSeller,setIsSeller]=useState(false)
    const [showUserLogin,setShowUserLogin]=useState(false)
    const [products,setProducts]=useState([])
    const [cardItems,setCardItems]=useState({})
    

    const fetchProducts=async () => {
        setProducts(dummyProducts)
    }
    //Add to card
    const addToCard=(itemId)=>{
        let cardData=structuredClone(cardItems);

        if(cardData[itemId]){
            cardData[itemId]+=1;
        }else{
            cardData[itemId]=1;
        }
        setCardItems(cardData);
        toast.success("Added to Card")
    }

    //updated Card Item Quantity
    const updateCardItem=(itemId,quantity)=>{
        let cardData=structuredClone(cardItems);
        cardData[itemId]=quantity;
        setCardItems(cardData)
        toast.success("Card Updated")
    }

    //remove the items from card
    const  removeFromCard=(itemId)=>{
        let cardData=structuredClone(cardItems);
        if(cardData[itemId]){
           cardData[itemId] -=1;
           if(cardData[itemId]== 0){
               delete cardData[itemId];
           }
        }
       toast.success("Removed from card")
       setCardItems(cardData)
    }


    useEffect(()=>{
       fetchProducts()
    },[])
    const value={navigate,user,setUser,isSeller,setIsSeller,setShowUserLogin,showUserLogin,products,
        currency,addToCard,updateCardItem,removeFromCard,cardItems}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}