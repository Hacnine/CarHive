import { createContext } from "react";
import BookingPage from "./RentalPage";
import { useReducer } from "react";
import { useEffect } from "react";
import { AppContext, useGlobalContext } from "../../Context";
import { carNames } from "../../data/products";
// import {reducer} from './reducer';

const initialState = {
  data: carNames,
  totalAmount: 0,
  totalItem: 0,
  currentQuantity:1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        data: state.data.filter((curElem) => {
          return curElem.id !== action.payload;
        }),
      };
    case "CLEAR_CART":
      return {
        ...state,
        data: [],
      };
    case "INCREMENT":
      return {
        ...state,
        data: state.data.map((curElem) =>
          curElem.id === action.payload
            ? { ...curElem, quantity: curElem.quantity + 1 }
            : curElem
        ),
      };
      
      case "DECREMENT":
        return{
          ...state,
          data:state.data.map((curElem)=>(
            curElem.id === action.payload?
            {...curElem, quantity:curElem.quantity -1}: curElem
          )),

        };

        case "GET_TOTAL":
          const { totalItem,totalAmount } = state.data.reduce((accumulator, currentValue) => {
            const { price, quantity } = currentValue;
            const updatedTotalAmount = price * quantity;
            accumulator.totalItem += quantity;
            accumulator.totalAmount += updatedTotalAmount;
            action.payload( accumulator.totalItem);
            
            return accumulator;
          }, {
            totalItem: 0,
            totalAmount: 0.
          });
          // debugger;
        
          return { ...state, totalItem, totalAmount };
          
    default:
      return state;
  }
};

export const CartContext = createContext();
const Booking = () => {
const {setTotalItem} = useGlobalContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    });
  };

  const clearCart = (id) => {
    return dispatch({
      type:"CLEAR_CART",
    });
  };

  const incrementQuantity = (id) => {
    return dispatch({
      type:"INCREMENT",
      payload:id,
    });
  };


  const decrementQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch({
        type: "DECREMENT",
        payload: id,
      });
    } else {
      // If quantity is 1 or zero, remove the item
      removeItem(id);
    }
  };

  useEffect(()=>{
    dispatch({
      type: "GET_TOTAL",
      payload:setTotalItem});
    
    console.log('Allah help me!')
  },[state.data])

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, incrementQuantity,decrementQuantity }}>
      <BookingPage />
    </CartContext.Provider>
  );
};

export default Booking;
