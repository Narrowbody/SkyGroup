import { Button } from "react-bulma-components"


const TrainingSchedule = () => {
    return ( 
        <div>
            <div className="section">
                <div>
                    <h1 className="has-text-centered">Training Schedule</h1>
                </div>
            
            <div className="container">
                <table className="table is-hoverable is-narrow">
                    <thead>
                        <tr>
                            <th>Course No.</th>
                            <th>Course Title</th>
                            <th>Delivery Method</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>A101</td>
                            <td>Basic Accident & Incident Investigations</td>
                            <td>Classroom</td>
                            <td><Button color="info" inverted size="small" >Details</Button></td>
                        </tr>
                        <tr>
                            <td>A201</td>
                            <td>Safety Management System for Safety Professionals</td>
                            <td>In-company</td>
                            <td><Button color="info" inverted size="small" >Details</Button></td>
                        </tr>
                        <tr>
                            <td>A205</td>
                            <td>Emergency Response Program Implementation</td>
                            <td>On-line</td>
                            <td><Button color="info" inverted size="small" >Details</Button></td>
                        </tr>
                    </tbody>
                </table>    
            </div>
            </div>
        </div>
     );
}
 
export default TrainingSchedule;