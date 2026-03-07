import style from './HomePage.module.css'
import SideBar from '../../components/SideBar/SideBar'
const HomePage = () => {
    return(
        <div className={style.HomePage}>
            <SideBar />
        </div>  
    )
}

export default HomePage