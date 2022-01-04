import React from "react";
import classnames from "classnames";
import style from './index.module.scss';

function Tab (props) {
    const tabCN = classnames(
        style.tab,
        props.isActive && style.active
    )
    return (
        <button className={tabCN} onClick={() => props.onSelect(props.id)}>
            {props.name}
        </button>
    )
}

export default Tab;