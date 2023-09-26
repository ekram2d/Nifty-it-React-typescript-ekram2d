
// import type { RootState } from '../../app/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from './counterSlice'

// export function Counter() {
//   const count = useSelector((state: RootState) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button className='btn btn-sm'
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span className='text-2xl p-2'>{count}</span>
//         <button className='btn btn-sm'
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//         <button className='btn btn-sm'
//           aria-label="Decrement value"
//           onClick={() => dispatch( incrementByAmount(10))}
//         >
//            incrementByAmount
//         </button>
//       </div>
//     </div>
//   )
// }