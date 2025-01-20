import { useContext } from "react"
import Cousin from "../Cousin/Cousin"
import { AssetMoney } from "../Granpa/Grandpa"


const Aunt = () => {
  const [money, setMoney] = useContext(AssetMoney);
  return (
    <div>
        <h2>Aunt</h2>
            <p>{money}</p>
            <button onClick={() =>setMoney(money +1000)}>give 1000</button>
        <section className="flex">
            <Cousin name={"sowradeep"}></Cousin>
            <Cousin name={"baishali"}></Cousin>
        </section>
    </div>
  )
}

export default Aunt