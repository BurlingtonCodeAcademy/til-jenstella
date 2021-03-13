import React from 'react'
import {useState, useEffect} from 'react'



export default function Facts() {
    //set state for button clicked.. starts false
    const [results, setResults] = useState([]);
    //when something happens to clicked state
    useEffect(() => {
    if(results.length === 0) {
        //get by calling api endpoint
        fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
            setResults(restList)
        });
    }
    })

    return (
        <div>
            <h1 id="page-headers">All Entries</h1>
            <div id="entry-container" >
                {results.map((entry, index) => {
                    return (
                        <div id="entry-container-2">
                            <hr />
                            <h1 key={index + "-title"}>{entry.title}</h1>
                            <h3 key={index + "-author"}>{entry.author}</h3>
                            <h4 key={index + "-date"}>{entry.date}</h4>
                            <p key={index + "-entry"}>{entry.entry}</p>
                            <h4 key={index + "-tags"}>{entry.tags}</h4>
                            <button id={index + "-edit"}>
                                {/* onClick="editEntry()" */}
                                Edit Entry Data
                            </button>
                            <button id={index + "-delete"}>
                                {/* onClick="removeEntry()" */}
                                Remove Entry
                            </button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}