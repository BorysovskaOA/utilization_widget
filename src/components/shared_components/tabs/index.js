import React from 'react';
import classnames from 'classnames';
import Tab from "./tab";
import style from './index.module.scss';

function Tabs (props) {
    return (
        <div className={classnames(style.tabs, props.className)}>
            {props.tabs.map((tab) => (
               <Tab
                   key={tab.id}
                   {...tab}
                   isActive={tab.id === props.activeTabId }
                   onSelect={props.onSelect}
               />
            ))}
        </div>
    )
}

export default Tabs;