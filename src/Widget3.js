import {useState} from 'react'
const Widget3 = () => {
  const [showIcon, setShowIcon] = useState(false)
  return <div className="border p-8 m-4 rounded-lg flex flex-col items-center bg-rose-200">
    {showIcon ? <i className="fa-thin fa-hippo text-3xl text-rose-500 mb-4"></i> : null}
    
    <button className="border rounded-full p-2 bg-rose-500 text-white" onClick= { () => {setShowIcon(!showIcon)}}>Click me</button>
  </div> 
}

export default Widget3 