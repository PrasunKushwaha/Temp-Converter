import React, { useState } from 'react'

function App() {

  const [temp, setTemp] = useState("nothing")
  const [sort, setSort] = useState('c')
  const [result, setResult] = useState("")

  function sortChange(event){
    setSort(event.target.value)
  }


  function tempChange(event){
     setTemp(event.target.value)
 
  }

   function handleClick() {
    
    if (temp == "nothing"){
    setResult("Please enter Temperature")
    }

   else if( sort == 'c'){
console.log((temp*9/5)+32)
   setResult((temp*9/5)+32)
    }
    else {
      console.log((temp-32)*5/9)
    setResult((temp-32)*5/9)
    }
   
  }
  
  return (
    <>
    
    <div className='py-16 border-8 border-indigo-500 rounded-lg mx-80 mt-52 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
    <h1 className='mb-8 text-6xl font-bold text-center text-slate-700'>Temperature Converter</h1>
    <div className='text-center'>
  <input value={temp} onChange={tempChange} type='number' placeholder='Enter the Temp.' className='mr-2 border-2 border-indigo-500 rounded-md shadow-sm'></input>
  <select value={sort} onChange={sortChange} className='ml-2 border-2 border-indigo-500 rounded-md shadow-sm text-slate-700'>
    <option id='c' className='text-slate-700'>Celsius To Fahrenhiet</option>
    <option id='f'  className='text-slate-700'>Fahrenhiet To Celsius</option>
  </select>
  </div>
  <div className='mt-4 mb-4 text-xl font-semibold text-center text-slate-700'>{result}</div>
  <div className='text-center'><button onClick={handleClick} className='px-4 py-2 text-white bg-indigo-500 rounded-lg shadow-lg hover:text-indigo-500 hover:bg-white'>Convert</button></div>
   </div>
  
    </>
  )
}

export default App
