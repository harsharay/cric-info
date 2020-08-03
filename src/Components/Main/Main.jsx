import React, {useState, useEffect} from "react"
import axios from "axios"
const Main = () => {
    
    const [data, setData] = useState([])

    const [selected, setSelected] = useState("MS Dhoni")

    const [output, setOutput] = useState({})
    
    // const getDataFromFirebase = async () => {
    //     let response = await firestore.collection('playersData').get()
    //     response.forEach(item => {
    //         setData(prevValue => {
    //             return [...prevValue, item.data().name]
    //         })
    //     })
    // }
    
    useEffect(() => {
        // getDataFromFirebase()
        fetch("https://fierce-shelf-96133.herokuapp.com/api/loadData")
        .then(data => data.json())
        .then(json => setData(json))
        .catch(e => console.log(e.message))
    },[])

    const handleSelectDropdown = e => {
        let newValue = e.target.value
        setSelected(newValue)
    }


    const handleClick = () => {
        axios
        .post("https://fierce-shelf-96133.herokuapp.com/api/getData",{'value' : selected})
        .then(data => setOutput(data.data[0]))
        .catch(e => console.log(e.message))
    }
    
    return (
        <div>
            <select onChange={handleSelectDropdown} value={selected}>
                {data && data.map((item,index) => <option key={index}>{item}</option>)}
            </select>
            <button onClick={handleClick}>Get the data</button>
            <br />
           {Object.keys(output).length>0 ?  
           <div>
               <h1>{output.name}</h1>
               <p>Matches: {output.matches}</p>
               <p>Innings: {output.innings}</p>
               <p>Notouts: {output.notOuts}</p>
               <p>Career timeline: {output.span}</p>
               <p>Highest Score: {output.highScore}</p>
               <p>Total runs: {output.runs}</p>
               <p>Average: {output.average}</p>
           </div>
           :
           <h4>Select a player from the dropdown</h4>}
        </div>
    )
}

export default Main;