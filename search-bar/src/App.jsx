import './index.css'
import './App.css'
import { useEffect,useState } from 'react'


function App() {
 let[input,setInput]=useState('')
 let[search,setSearch]=useState([])
 let[showresults,setShowreslts]=useState(false)
 let[cache,setCache]=useState({})

  let APidata= async()=>{
    if(cache[input]){
     console.log('cache',input)
      setSearch(cache[input])
      return;
    }
    console.log('api calling',input)
    let results= await fetch('https://dummyjson.com/recipes/search?q=' + input)
    let data=await results.json()
     setSearch(data?.recipes)
     setCache((prev)=>({...prev,[input]:data?.recipes}))
  }

  useEffect(()=>{
    //Debounching concenpt
   let timer= setTimeout(() => {
       APidata()
    }, 200);

    return()=> clearTimeout(timer)
  },[input])
  

  return (
  <>
  <h4 className='bg-gray-600 text-white text-center justify-center' >Hello Neudesic here is my code</h4>
  <div>
  <input
  type='text'
  className=' w-full max-w-96 mt-1 text-smoke border border-gray-600'
   value={input}
   onChange={(e)=>setInput(e.target.value)}
   onFocus={()=>setShowreslts(true)}
   onBlur={()=>setShowreslts(false)}
  />
 { showresults && (<div className='w-96 m-auto text-center border border-gray-600  text-left h-96  overflow-y-auto   '>
      {search.map(res=>
    <span className='block p-2 hover:bg-gray-300  cursor-pointer' key={res.id}>{res.name}
    </span>)}
  </div>)}
  </div>
  </>
  )
}

export default App
