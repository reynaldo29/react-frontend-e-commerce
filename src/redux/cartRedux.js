import {createSlice} from "@reduxjs/toolkit";
import { products } from "../data";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            const {id} = action.payload;
            const existingProduct = state.products.find(product =>product.id===id)

            if(existingProduct){
                
                existingProduct.quantity +=action.payload.quantity
                state.total+=action.payload.price*action.payload.quantity;
            }else{
                state.quantity +=1;
                state.products.push(action.payload);
                state.total+= action.payload.price*action.payload.quantity;
            }
    
        },
        removeProduct:(state,action) =>{
            const productId= action.payload;
            const removedProduct = state.products.find(product=>product.id===productId);
            
            if(removedProduct){
                state.products=state.products.filter(product=>product.id!==productId);
                state.quantity -= 1;
                state.total-=removedProduct.price*removedProduct.quantity;
            }
        },
        decreaseQuantity:(state,action)=>{
            const productId= action.payload;
            const product = state.products.find(product=>product.id===productId);
            
            if(product && product.quantity>1){
                product.quantity-=1;
                state.total -= product.price;

            }
        },
        increaseQuantity:(state,action)=>{
            const productId= action.payload;
            const product = state.products.find(product=>product.id===productId);
            
            if(product){
                product.quantity+=1;
                state.total += product.price;

            }
        }
    }
})

export const {addProduct} =cartSlice.actions;
export const {removeProduct} =cartSlice.actions;
export const {decreaseQuantity} =cartSlice.actions;
export const {increaseQuantity} =cartSlice.actions;
export default cartSlice.reducer;