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
                    <td data-testid='strikes'>{props.strikes}</td>
                    <td data-testid='balls'>{props.balls}</td>
                </tr>
            </tbody>

        </table>
    )

}

export default Display