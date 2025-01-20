import Aunt from "../Aunt/Aunt"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"
import './grandpa.css'
const Grandpa = () => {
  return (
    <div className="grandpa">
        <h2>Grandpa</h2>
        <section className="flex">
            <Dad></Dad>
            <Aunt></Aunt>
            <Uncle></Uncle>
        </section>
    </div>
  )
}

export default Grandpa