import { useState } from "react";
import { Data, Inputs } from "../Interface/interfacedata";
import { useForm, SubmitHandler } from "react-hook-form";


const OfficeTodo = () => {
  const [data, setData] = useState<Data[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    console.log(data);
  };

  return (
    <>
      <div className="text-center font-bold text-2xl ">Please Enter The Office Task</div>


      <div className="w-[60%] mt-4 mx-auto shadow-2xl ">
      <ul>
            <li>projcet1 : <span>Id : 1</span></li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[90%] flex justify-center items-center pt-2 ">
          <input
            className="bg-black text-white p-4 font-bold text-center rounded-xl shadow-2xl  pt-4 w-[40%] mx-auto "
            placeholder="please enter your task"
            defaultValue=""
            {...register("textList")}
          />
          {errors.textList && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <br />

    <div className="w-[90%] flex justify-center items-center ">
    <input
          className="bg-black text-white p-4 fk font-bold text-center rounded-xl shadow-2xl  pt-2 w-[40%] mx-auto "
         
          placeholder="Enter ID"
          {...register("id", { required: true })}
        />
        {errors.id && <span className="text-red-500">This field is required</span>}
        <br />
    </div>
<div className="w-[90%] flex justify-center items-center">
      
<button
          className="bg-red-300 hover:bg-red-400 text-white rounded-md p-2 mt-5 "
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
