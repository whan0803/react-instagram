import style from './Home.module.css'

import HomeHeader from "./HomeComponent/HomeHeader/HomeHeader"
import HomeMain from "./HomeComponent/HomeMain/HomeMain"

const Home = () => {
    return(
        <div className={style.Home}>
            <HomeHeader />
            <HomeMain />
        </div>
    )
}

export default Home