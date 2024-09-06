import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={`${styles.container}`}>
        <img src="/images/logo (1).png" alt="logo"/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navigation;