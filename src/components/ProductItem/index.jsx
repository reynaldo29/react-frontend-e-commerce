import "./item.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
const ProductItem = ({ item }) => {
    const products =useSelector(state=>state.cart.products)
    const [quantity,setQuantity] = useState(1);
    const dispatch =useDispatch()

    const handleClick =(item)=>{
        dispatch(addProduct({...item,quantity}));
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (item,value) => {
        setOpen(false);
      if(value==="yes"){
        dispatch(addProduct({...item,quantity}));
      }
      
    };

    return (
        <div className="bg-[#F7F0EB] font-['Tangerine',normal]">
            <div className="box-padre relative flex h-96 w-80 place-content-center overflow-hidden">
                <img
                    src={item.img}
                    alt="product-jpg"
                    className="h-96 w-80 transform object-cover transition-transform duration-300 hover:scale-125"
                />
                <div className="box-hijo absolute bottom-0 flex h-1/5 w-full overflow-hidden bg-[#C28566] text-white opacity-0">
                    <div className="flex w-1/2 place-content-center place-items-center gap-2 border-r border-white">
                        <Link to={`/product/show/${item.id}`}>
                            <p className="cursor-pointer">Ver más</p>
                        </Link>
                        <VisibilityIcon fontSize="small" />
                    </div>
                    <div className="flex w-1/2 place-content-center place-items-center gap-2 text-white">
                        {products.find((product) => product.id === Number(item.id))?(
                            <>
                            <p className="cursor-pointer" 
                           onClick={()=>handleClickOpen()}>Añadir</p>
                           <ShoppingCartIcon fontSize="small" />
                           <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {item.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Este producto ya existe dentro del carrito de compras. Desea agregarlo nuevamente?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(item,"yes")}>Si</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
                           </>
                        ):(
                            <>
                            <p className="cursor-pointer" 
                           onClick={()=>handleClick(item)}>Añadir</p>
                           <ShoppingCartIcon fontSize="small" />
                           </>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-3 flex w-full flex-col p-3 text-center">
                <h3 className="block text-lg font-semibold text-[#C28566]">
                    {item.name}
                </h3>
                <h3 className="mt-2 block text-2xl font-semibold">
                    S/. {item.price.toFixed(2)}
                </h3>
            </div>
        </div>
    );
};
export default ProductItem;
