import React from 'react';
import classnames from "classnames";
import style from "./index.module.scss";

function Widget (props) {
    return (
        <div className={classnames(style.widget, props.className)}>
            <header className={style.header}>{props.title}</header>
            {props.children}
        </div>
    );
}

export default Widget;