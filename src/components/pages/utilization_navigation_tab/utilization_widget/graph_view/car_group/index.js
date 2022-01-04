import React from "react";
import style from "../index.module.scss";
import { ReactComponent as Car } from "../../../../../../assets/car.svg";

function CarGroup (props) {
    return (
        <>
            <header className={style.header}>
                {props.title}
            </header>
            <div className={style.car_group}>
                <Car fill={props.color}/>
                <div className={style.scale}>{props.count}/{props.total}</div>
                <div className={style.count}>{props.count}</div>
            </div>
        </>
    )
}

export default CarGroup;