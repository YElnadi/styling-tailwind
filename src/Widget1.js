import {useState} from 'react'
const Widget1 = () => {
  const [showIcon, setShowIcon] = useState(false)
  return (
    <div className="border m-4 p-8 bg-green-200 rounded-lg flex flex-col items-center">
      {showIcon ? <i className="fa-solid fa-cloud text-3xl text-green-700 mb-4"></i> : null}
      
      <button className="border rounded-full p-2 bg-blue-300" onClick= {()=>setShowIcon(!showIcon)}>Click me</button>
    </div>
  );
};
export default Widget1;