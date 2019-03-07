import React from 'react';

function Dashboard(props) {

    return (
        <>
            <h4>Swing Outcome</h4>
            <button onClick={props.handleSwingOutcome}>Strike</button>
            <button onClick={props.handleSwingOutcome}>Ball</button>
            <button onClick={props.handleSwingOutcome}>Foul</button>
            <button onClick={props.handleSwingOutcome}>Hit</button>
        </>
    )

}

export default Dashboard