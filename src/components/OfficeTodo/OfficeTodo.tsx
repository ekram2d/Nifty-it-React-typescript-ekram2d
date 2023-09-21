import { useReducer } from "react";
// import { Data, Inputs } from "../Interface/interfacedata";
import { useForm, SubmitHandler } from "react-hook-form";
import { Data, Inputs, OfficeTodoAction, State } from "../Interface/interfaceAll";

const initialState: State = {
  data: [
    {
      name: "project1",
      id: 1,
      date: "1-01-2023",
      idModalOpen: false,
      ModalTest: "",
    },
  ],
};

const reducer = (state: State, action: OfficeTodoAction) => {
  if (action.type === "add") {
    const allTasks = [...state.data, action.payload];

    return {
      ...state,
      data: allTasks,
    };
  }
  if (action.type === 'delete') {
   const filterTask = state?.data?.filter(task=> task.id != action.payload)
   console.log(filterTask)
   return {
    ...state,
    data: filterTask
   }

  }

  // Your reducer logic here
  return state; // Make sure to return the state if no action type matches
};


const OfficeTodo = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newTask: Data = {
      id: new Date().getTime(),
      name: data.textList,
      date: data.submissionDate,
      idModalOpen: false,
      ModalTest: "",
    };

    dispatch({ type: "add", payload: newTask });
    reset();
  };

  const HandleDelete = (id: number) => {
    dispatch({type:'delete',payload: id});

  }


  return (
    <>
      <div className="w-[60%] mx-auto mt-10 text-center text-2xl">
        <h1 className="text-3xl uppercase font-serif">Task List</h1>
        <table className="w-full mt-5">
          <thead>
            <tr>
              <th className="text-2xl text-green-800 font-bold uppercase p-3">
                Task Name
              </th>
              <th className="text-2xl text-green-800 font-bold uppercase p-3">
                Submission Date
              </th>
              <th className="text-2xl text-green-800 font-bold uppercase p-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks?.data?.map((task) => (
              <tr key={task.id}>
                <td className="p-3">{task.name}</td>
                <td className="p-3">{task.date}</td>
                <td> <button
                  onClick={() => HandleDelete(task.id)} // Pass a function to onClick
                  className="btn btn-sm  bg-red-400 text-white  "
                >
                  X
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[60%] mt-4 mx-auto shadow-2xl ">
        <h1 className="text-center font-bold text-2xl ">
          Please Enter The Office Task
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[90%] flex justify-center items-center pt-2 ">
            <input
              className="bg-black text-white p-4 font-bold  rounded-xl shadow-2xl  pt-4 w-[40%] mx-auto "
              placeholder="please enter your task"
              defaultValue=""
              {...register("textList", { required: true })}
            />
            {errors.textList && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <br />

          <div className="w-[90%] flex justify-center items-center">
            <input
              type="date"
              className="bg-black text-white p-4 fk font-bold  rounded-xl shadow-2xl  pt-2 w-[40%] mx-auto "
              placeholder="Enter Submission Date"
              {...register("submissionDate", { required: true })}
            />
            {errors.submissionDate && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-[90%] flex justify-center items-center">
            <button
              className="bg-red-300 hover:bg-red-400 text-white rounded-md p-2 mt-5"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OfficeTodo;