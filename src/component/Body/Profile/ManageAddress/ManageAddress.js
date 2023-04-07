import React, { useState } from 'react'
import './manageAddress.css'

const ManageAddress = () => {
  const [show, setShow] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    phoneNumber: "",
    pincode: "",
    landmark: "",
    city: "",
    state: "",
    areaAddress: "",
  })
  const [addressInfo , setAddressInfo] = useState([])

  const inputEvent = (e) => {
    const { name, value } = e.target
    setAddress((elem) => {
          return {
            ...elem,
            [name]: value,
        }
   })
  }


  const submitAddress = (e) => {
    e.preventDefault()
    setAddressInfo((curElem) => {
      return  [...curElem, address]
    });
    setAddress({
      name: "",
      phoneNumber: "",
      pincode: "",
      landmark: "",
      city: "",
      state: "",
      areaAddress: "",
    }); 
  }
  const addressDelete = (id) => {
    setAddressInfo((curElem) => {
      return curElem.filter((val, idx) => {
        return id !== idx;
      })
    })
  }
  console.log(addressInfo);
  return (
    <>
      <div className="manageAddress">
        <h1>Manage Address</h1>
        <div className="addAddressDiv">
          {!show ? <button onClick={()=>{setShow(true)}}>Add A New Address</button> : ""}
        </div>
        {show && <form onSubmit={submitAddress}>
          <div className="addressInputDiv">
            <div className="addressInfoInput">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" onChange={inputEvent} name="name" value={ address.name} />
            </div>
            <div className="addressInfoInput">
              <label htmlFor="number">10-digit Number</label>
              <input type="number" placeholder="10-digit Number" onChange={inputEvent} name="phoneNumber" value={address.phoneNumber} />
            </div>
            <div className="addressInfoInput">
              <label htmlFor="number">Pin-Code</label>
              <input type="number" placeholder="Pin-Code" onChange={inputEvent} name="pincode" value={ address.pincode} />
            </div>
            <div className="addressInfoInput">
              <label htmlFor="name">Landmark</label>
              <input type="text" placeholder="Landmark" onChange={inputEvent} name="landmark" value={ address.landmark} />
            </div>
            <div className="addressInfoInput">
              <label htmlFor="name">City/Area/Town</label>
              <input type="text" placeholder="City/District/Town" onChange={inputEvent} name="city" value={ address.city} />
            </div>
            <div className="addressInfoInput">
              <label htmlFor="name">State</label>
              <input type="text" placeholder="State" onChange={inputEvent} name="state" value={address.state} />
            </div>
          </div>
          <div className="addressTextareaDiv">
            <p>Address (Area/Street)</p>
            <textarea placeholder='Address (Area/Street)' onChange={inputEvent} name="areaAddress" value={address.areaAddress} />
          </div>
          <div className="addressBtnDiv">
            <button type='submit' className='addressAddBtn'>SAVE</button>
            <button className="addressCancelBtn" onClick={()=>{setShow(false)}}>CANCEL</button>
          </div>  
        </form>}
        {
          addressInfo.map((curElem, index) => {
            const {name,phoneNumber,city,state,pincode,areaAddress,landmark} = curElem;
            return  <div className="addressDiv" key={index}>
          <div className="address">
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <span>{areaAddress},{landmark},{city},{state}</span>
                <p>{pincode}</p>
          </div>
          <button onClick={()=>addressDelete(index)}>Delete</button>
        </div>
          })
        }
       
      </div>

    </>
  )
}

export default ManageAddress