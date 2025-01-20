import { createContext, useState } from "react"
import Aunt from "../Aunt/Aunt"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"
import './grandpa.css'

export const AssetContext = createContext();
export const AssetMoney = createContext();


const Grandpa = () => {
  const [money, setMoney] = useState(1000)
  return (
    <div className="grandpa">
        <h2>Grandpa</h2>
        <p>{money}</p>

      <section className="flex">
      <AssetMoney.Provider value={[money,setMoney]}>
      <AssetContext.Provider value={'silver'} >
            <Dad></Dad>
            <Aunt></Aunt>
            <Uncle></Uncle>
        </AssetContext.Provider>
      </AssetMoney.Provider>

        </section>

    </div>
  )
}

export default Grandpa