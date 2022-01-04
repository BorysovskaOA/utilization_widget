import React from 'react';
import style from './index.module.scss';
import { ReactComponent as Car } from '../../../../../assets/car.svg';
import CarGroup from "./car_group";

function UtilizationWidgetContentGraphView(props) {
    console.log(props);
    return (
        <div className={style.content}>
            <CarGroup
                name="Available"
                color="#5eebc8"
                count={props.available}
                total={props.total}
            />
            <CarGroup
                name="Regular rides"
                color="#0cadfe"
                count={props.regular}
                total={props.total}
            />
            <CarGroup
                name="Carpool"
                color="#b27cf9"
                count={props.carpool}
                total={props.total}
            />
        </div>
    )
}

export default UtilizationWidgetContentGraphView;