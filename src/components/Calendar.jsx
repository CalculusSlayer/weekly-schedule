import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Rows and cells for calendar dates go here */}
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Breakfast 🎩' color='green' location='Segundo'/>
                        <td></td>
                        <Event event='Morning Meeting ☕' color='blue' location='Zoom'/>
                        <td></td>
                        <Event event='Yoga Session 🧘' color='yellow' location='ARC'/>
                        <Event event='Project Deadline 🚀' color='red'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event='Doctor Appointment 🩺' color='blue' location='Palo Alto'/>
                        <Event event='Cooking Class 🍳' color='yellow' location='Tercero'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Interview Prep' color='blue' location='Home' />
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Book Club 📚' color='green' location='McHenry'/>
                        <td></td>
                        <Event event='Lunch with Friends 🍔' color='purple' location='Blaze Pizza'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Networking Event 🤝' color='purple' location='Engineering Building'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Family Game Night 🎲' color='green' location='Home'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Gym Time 💪' color='red' location='ARC'/>
                        <Event event='Gym Time 💪' color='red' location='ARC'/>
                        <Event event='Gym Time 💪' color='red' location='ARC'/>
                        <td></td>
                        <Event event='Gym Time 💪' color='red' location='ARC'/>
                        <Event event='Gym Time 💪' color='red' location='ARC'/>
                        <td></td>


                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Calendar;