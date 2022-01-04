import React, { useState } from 'react';
import classnames from 'classnames'
import style from './index.module.scss';
import down_caret from '../../../assets/down_caret.svg';

function Sidebar(props) {
    const [isOpen, setIsOpen] = useState(true);

    const asideCN = classnames(
        style.aside,
        isOpen && style.open
    );

    const toggleSidebar = () => {
        setIsOpen((currentIsOpenState) => !currentIsOpenState);
    }

    return (
        <aside className={asideCN}>
            <button className={style.toggle_button} onClick={toggleSidebar}>
                <img className={style.toggle_caret} src={down_caret} alt="toggle" />
            </button>
            <div className={style.sidebar_container}>
                {isOpen && (
                    <div className={style.content}>
                        {props.children}
                    </div>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;