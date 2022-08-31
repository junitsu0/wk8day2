import React, { useState, useEffect } from 'react'

export default function Students(props) {
    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
    const [students, setStudents] = useState([]);

    const [season, setSeason] = useState(2022);
    const [round, setRound] = useState(1)

    // Create an effect -> function to execute after every render
    useEffect(() => {
        console.log('useEffect effect callback executed.')
        fetch(`kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => {
                let studentStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setStudents(studentStandings);
            })
    }, [season, round])

    // Function to be exectuted when the name form is submitteed
    function handleStudentSubmit(e){
        // Prevent default of refreshing page
        e.preventDefault();
        let newSeason = e.target.season.value;
        let newRound = e.target.round.value;
        setSeason(newSeason);
        setRound(newRound);
    }

    return (
        <div className='row py-3'>
            <h4 className="text-center">Student Standings</h4>
            <form onSubmit={handleStudentSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <input type="text" className='form-control' name="season" placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" className='form-control' name="round" placeholder='Enter Round' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value="Submit" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <table className='table table-primary table-striped mt-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, idx) => {   
                        return (<tr key={idx}>
                            <th>{student.id}</th>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}