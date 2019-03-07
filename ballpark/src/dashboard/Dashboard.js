import React from 'react';

function Dashboard(props) {

    return (
        <>
            <button onClick={props.handleSwingOutcome}>Strike</button>
            <button onClick={props.handleSwingOutcome}>Ball</button>
            <button onClick={props.handleSwingOutcome}>Foul</button>
            <button onClick={props.handleSwingOutcome}>Hit</button>
        </>
    )

}

export default Dashboard