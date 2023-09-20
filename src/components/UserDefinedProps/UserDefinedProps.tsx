import DataFetch from "./DataFetch/DataFetch"


function UserDefinedProps() {
      return (
           <>

           <div className="w-[80%] mx-auto text-center font-normal mt-10 uppercase text-3xl ">
           <DataFetch status="loading"/>
           </div>
           </>
      )
}

export default UserDefinedProps