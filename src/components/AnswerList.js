import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
function AnswerList() {
    const [info, setInfo] = useState([]);
    const [refresh, setRefresh] = useState(false);

 useEffect(()=> {
    axios.get('https://mcq-helper.herokuapp.com/answers/')
    .then((res) => setInfo(res.data) );
    console.log(info.length);
 }, [])

 
    return (
        <div>
         {/* <button className='btn btn-primary p-2 ' onClick={handleRefresh}>Refresh</button> */}
         <table className="table-custom" >
            
             {info.map( title => (
                     <td key={title.username}>
                         <td>
                             <th scope="col">{title.username}</th>
                             {title.answers.map( ans => (
                                 <tr> <td className="ans">{ans} </td></tr>
                             ))}
                         </td>
                     </td>        
    ))}
        {/* <tr>
            {
                info.map(data => (
                    data.answers.map( ans => (
                        <td>{ans}</td>
                    ))
                ))
            }
        </tr> */}
         </table>
        </div>
    )
}

export default AnswerList
