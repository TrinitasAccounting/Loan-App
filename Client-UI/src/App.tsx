import axios from "axios"
import { useEffect, useState } from "react"



function App() {

  const [loans, setLoans] = useState([]);

  const fetchLoans = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/loans/`)
        .then(res => setLoans(res.data))

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLoans()
  }, [])



  return (
    <>
      {loans.map((loan: any) => {
        return (
          <li>
            <p>{loan.first_name}</p>
            <p>{loan.last_name}</p>
            <p>{loan.original_balance}</p>
          </li>
        )
      })}
    </>
  )
}

export default App
