import styles from '../RightComponent.module.css'

import instagramLogo from '../../../../assets/Instagram-03.png'

const RightComponentHeader = () => {
    return(
        <div className={styles.Header}>
            <img className={styles.img} src={instagramLogo} alt="인스타그램 로고" />
        </div>
    )
}

export default RightComponentHeader;