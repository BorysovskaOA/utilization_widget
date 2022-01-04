import React from "react";

function UtilizationWidgetContentTextView (props) {
    return (
        <div style={{textAlign: 'center'}}>
            <div>Available: {props.available}</div>
            <div>Regular rides: {props.regular}</div>
            <div>Carpool: {props.carpool}</div>
        </div>
    )
}

export default UtilizationWidgetContentTextView;