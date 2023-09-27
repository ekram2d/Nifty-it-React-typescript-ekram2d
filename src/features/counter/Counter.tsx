import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../redux/store";
import { decrement, increaseByValue, increment, reset } from "./counterSlice";
function Counter() {
      const count = useSelector((state: RootState) => state.counterMode.value)
      const dispatch = useDispatch()

      return (
            <div className="border shadow-2xl  w-[70%] mx-auto mt-10 p-3">
                  
                  <h1 className="text-2xl text-center mt-3 font-bold">Count: {count}</h1>
                   <button onClick={()=>dispatch(increment())} className="btn btn-sm bg-purple-300 text-black p-2 m-2">IncreaseCount</button>
                   <button onClick={()=>dispatch(decrement())} className="btn btn-sm bg-purple-300 text-black p-2 m-2">DecreaseCount</button>
                   <button onClick={()=>dispatch(increaseByValue(10))}  className="btn btn-sm bg-purple-300 text-black p-2 m-2">increaseByValue 10</button>
                   <button  onClick={()=>dispatch(reset())} className="btn btn-sm bg-purple-300 text-black p-2 m-2">Reset</button>
                  </div>
      )
}

export default Counter