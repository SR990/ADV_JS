import React,{useState} from 'react'
function MyComponent(){

    const [name, setName] = useState('')

    const [quantity, setQuantity] = useState()

    const[comment, setComment] = useState("")

    const[payment, setPayment] = useState("")

    const[shipping, setShipping] = useState()

    const handleQuantity = (event) =>{
        setQuantity(event.target.value);
    }

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handlePayment = (event) =>{
        setPayment(event.target.value)
    }

    const handleShipping = (event)=>{
        setShipping(event.target.value)
    }

    const handleOn = (event)=> {
        setName(event.target.value);
    }



    return(
        <div className="con1">
              <input value={name} onChange={handleOn} />
            <p> Name:{name}</p>
           <input value={quantity} onChange={handleQuantity} type="number"/>
            <p>Quantity:{quantity}</p>

        <input type='textarea' value={comment} onChange={handleComment}
        placeholder='write a comment'/>
        <p>{comment}</p>

        <select value={payment} onChange={handlePayment}>
            <option>SELECT PAYMENT OPTION</option>
            <option>Visa</option>
            <option>Master</option>
            <option>American</option>
            <option>rupay</option>

        </select>
        <p>Payment ype: {payment}</p>

        <label >
            <input type='radio' value='pickup' checked={shipping === 'pickup'} onChange={handleShipping}/>
            PickUp</label>


        <label>
        <input type='radio' value='delivery' checked={shipping === 'delivery'} onChange={handleShipping}/>
          Delivery</label>
          <p>{shipping}</p>
       

            
            
    
        </div>
    )
      

}

export default MyComponent