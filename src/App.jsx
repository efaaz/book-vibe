import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
        const res = await fetch('/api.json')
        const data = res.json()
        setUser(data)
        console.log(user);
    }
},[])
  return (
    <>
    <h1 className="text-6xl text-violet-700">Hellow World!</h1>
    </>
  )
}

export default App
