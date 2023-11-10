import React,{useRef,useState} from 'react'

const App = () => {
  const [cardNumber,setCardNumber]=useState('')
  const cvcRef=useRef(null)

  const [data,setCvcData]=useState('')
  const cvcData=useRef(null)


  const handleInputData=(e)=>{
    const value=e.target.value
    setCvcData(value)
    if (value.length===4) {
      cvcData.current.focus()
      
    }
  }

  const handleInput=(e)=>{
    const value =e.target.value
    setCardNumber(value)
    console.log(value.length );
    if (value.length===1) {
      cvcRef.current.focus()
      
    }

  }
  return (
    <div>
<form action="">

  <input type="text" placeholder='code '  onChange={handleInput}/>
  <input ref={cvcRef} type="text" placeholder='code2' onChange={handleInputData} />
  <input ref={cvcData} type="text" placeholder='code2' />
</form>

    </div>
  )
}

export default App