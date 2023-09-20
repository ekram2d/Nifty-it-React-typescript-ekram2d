interface loading { status : "loading" }
interface error {status:"error"}
interface successfully {status:"sucessfully"}
type DataFetchProps = loading | error | successfully

function DataFetch({ status }:DataFetchProps ) {
console.log(status)

      if (status === 'loading') {
            return <h3>Data is Loading...</h3>

      }
      else if (status === "error") {
          return   <h3>Error. could not fetched</h3>
      }

      return (
            <>



                  <h3>Data Fetched successfully</h3>
            </>
      )
}

export default DataFetch