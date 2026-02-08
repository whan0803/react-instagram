import styles from './RightComponent.module.css'

import RightComponentHeader from "./RightComponentHeader/RightComponentHeader"
import RightComponentNav from "./RightComponentNav/RightComponentNav"
import RightComponentMain from "./RightComponentMain/RightComponentMain"

const RightComponent = () => {
    return(
        <div className={styles.RightComponent}>
            <RightComponentHeader />
            <RightComponentNav />
            <RightComponentMain />
        </div>
    )
}

export default RightComponent