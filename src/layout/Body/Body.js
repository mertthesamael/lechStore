import styles from "./body.module.scss"


const Body = ({children}) => {

    return(
        <div className={styles.body}>
            {children}
        </div>
    )

}


export default Body;