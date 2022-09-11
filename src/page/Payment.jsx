import React , {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Payment = () => {
    const {state} =  useLocation()
    useEffect(()=>{
        console.log(state)
    },[])
  return (
    <div>

    </div>
  )
}

export default Payment