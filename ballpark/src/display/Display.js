import React from 'react';

function Display(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Strikes</th>
                    <th>Balls</th>
                </tr>
            </thead>

            <tbody>
                <tr >
                    <td>{props.strikes}</td>
                    <td>{props.balls}</td>
                </tr>
            </tbody>

        </table>
    )

}

export default Display