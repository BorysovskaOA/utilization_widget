import React, {useEffect, useState} from 'react'
import Map from "../../shared_components/map";
import Sidebar from "../../shared_components/sidebar";
import Tabs  from "../../shared_components/tabs";
import {utilizationModes, utilizationModeTypes} from "./utilization_modes";
import style from './index.module.scss';
import UtilizationWidget from "./utilization_widget";
const initialCarsData = {
    available: 0,
    regular: 0,
    carpool: 0
}
function UtilizationNavigationTab() {
    const [mode, setMode] = useState(utilizationModeTypes.bars);
    const [cars, setCars] = useState(initialCarsData);

    const changeMode = (mode) => {
        setMode(mode);
    }

    useEffect(() => {
        fetch('/vehicles', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response=>response.json())
            .then((data) => {
                setCars(data)
            })
    }, []);

    return (
        <>
            <Map />
            <Sidebar>
                <Tabs className={style.tabs} tabs={utilizationModes} activeTabId={mode} onSelect={changeMode} />
                <UtilizationWidget {...cars} mode={mode}/>
            </Sidebar>
        </>
    );
}

export default UtilizationNavigationTab;