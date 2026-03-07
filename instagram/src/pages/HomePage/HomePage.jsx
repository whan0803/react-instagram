import style from './HomePage.module.css'
import SideBar from '../../components/SideBar/SideBar'
import SideTabMenu from './SideTabMenu/SideTabMenu'
import Home from '../../components/SideMenu/Home/Home'

import { useState } from 'react'
const HomePage = () => {

    const [tabMenu, setTabMenu] = useState("home");

    return (
      <div className={style.HomePage}>
        <SideBar setTabMenu={setTabMenu} />
        <SideTabMenu />
      </div>
    );
}

export default HomePage