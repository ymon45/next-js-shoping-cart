import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styles from '../styles/CartPage.module.css';
import {incrementQuantity, decrementQuantity, removeFromCart} from '../redux/cart.slice'


const CartPage = () => {
    

  // Extracting cart state from redux store 
    const cart = useSelector((state) => state.cart)


      // Reference to the dispatch function from redux store

        const dispatch = useDispatch();

        const getTotalPrice = () =>{
            return cart.reduce(
                (accumulator, item) => accumulator + item.quantity * item.price,0
            )
        }



        return (

            <div className={styles.container}>
                {cart.length === 0 ? (
                    <h1>Your Cart is Empty</h1>

                ): (
                    <>
                        <div className={styles.header}>
                            <div>Image</div>
                            <div>Product</div>
                            <div>price</div>
                            <div>Quantity</div>
                            <div>Actions</div>
                            <div>Total Price</div>

                        </div>
                        {cart.map((item)=>(
                            <div className={styles.body}>
                            <div className={styles.image}>
                            <Image src={item.image} height="90" width="65" />

                            </div>
                            <p>{item.product}</p>
                            <p>${item.price}</p>
                            <p>{item.quantity}</p>
                            <div className={styles.buttons}>
                            <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>


                            </div>
                            <p>${item.price * item.quantity}</p>
                            </div>

                        ))}
                        <h2>Grand Total: $ {getTotalPrice()}</h2>


                     </>
                )}

            </div>

        )


}

export default CartPage;