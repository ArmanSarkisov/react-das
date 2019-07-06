import React from 'react';
import s from './Sidebar.module.css'

import SideNav from './sideNav/SideNav'

const Sidebar = (props) => {
    return (
        <aside className={s.sideBar}>
            <SideNav />
        </aside>
    )
}


export default Sidebar;