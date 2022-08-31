import React, { Component } from 'react'

export default class StudentsClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            racers: [],
            season: 2022,
            round: 1
        }
    }

    componentDidMount(){
        fetch(`https://kekambas-bs.herokuapp.com/kekambas.json`)
            .then(res => res.json())
            .then(data => {
                    let studentStandings = data.MRData.StandingsTable.StandingsLists[0].StudentStandings;
                    this.setState({students:studentStandings})
                }
            )
    }

    handleStudentSubmit = (e) => {
        // Prevent default of refreshing page
        e.preventDefault();
        let newSeason = e.target.season.value;
        let newRound = e.target.round.value;
        this.setState({
            season: newSeason,
            round: newRound
        })
    }

    render() {
        let tableHeaders = ['ID', 'First', 'Last']
        return (
            <div className='row py-3'>
                <h4 className="text-center">Student Standings</h4>
                <form onSubmit={this.handleStudentSubmit}>
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
                { this.state.students.length ? (
                    <table className='table table-primary table-striped mt-3'>
                    <thead>
                        <tr>
                            {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student, idx) => {   
                                return (<tr key={idx}>
                                    <th>{student.id}</th>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                ) : (null)}
                
            </div>
        )
    }
}