import { useContext } from "react"
import { AssetContext, AssetMoney } from "../Granpa/Grandpa"


const Spacial = () => {
  const asset = useContext(AssetContext);
  const [money] = useContext(AssetMoney);

  return (
    <div>
        <h2>Spacial</h2>
        <p>Also has: {asset}</p>
        <p>Grand pa's money:{money}</p>
    </div>
  )
}

export default Spacial