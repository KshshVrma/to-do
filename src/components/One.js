
import {useState} from "react";


const One=()=>{
  const [data,setData]=useState('');
  const [list,setList]=useState([]);
  const f=(event)=>{
    setData(event.target.value);
    }
    const f2=()=>{
      setList([...list,data]);
      setData('');

    }
    const f4=(t)=>{
      const p=list.filter((one)=>{
        return one!==t;
              })
              setList(p);
    }

   
    
  return (
    <div>
      <input value={data} onChange={f}></input>
      <br/>
      <button onClick={f2}>add</button>
      <ul>
        {list.map((e)=>{
          return <li>{e} <button onClick={()=>{f4(e)}}>❌</button></li>
        })}
      </ul>
    </div>
  )

}
export default One;