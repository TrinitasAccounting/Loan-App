import axios from "axios"
import { useEffect, useState } from "react"



function App() {

  const [loans, setLoans] = useState([]);

  const isDevelopment = import.meta.env.MODE === 'development'
  const baseUrl = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD

  const fetchLoans = async () => {
    try {
      await axios.get(baseUrl)
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
            {import.meta.env.MODE}
          </li>
        )
      })}
    </>
  )
}

export default App
