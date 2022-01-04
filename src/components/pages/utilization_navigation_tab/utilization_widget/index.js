import React from 'react';
import Widget from "../../../shared_components/widget";
import { utilizationModeTypes} from "../utilization_modes";
import UtilizationWidgetContentGraphView from "./graph_view";
import UtilizationWidgetContentTextView from "./text_view";

function UtilizationWidget(props) {
    const totalCars = props.available + props.regular + props.carpool;

    const getContentView = () => {
        switch(props.mode) {
            case utilizationModeTypes.bars:
                return <UtilizationWidgetContentGraphView {...props} total={totalCars}  />;
            default:
                return <UtilizationWidgetContentTextView {...props} />
        }
    }

    return (
        <Widget title={`Utilization (${totalCars})`}>
            {getContentView()}
        </Widget>
    );
}

export default UtilizationWidget;