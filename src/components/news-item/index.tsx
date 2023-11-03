import styles from './new-item.module.css'

const NewItem = ({...props}) => {
  return (
    <div className={styles.new}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>{props.content}</p>
    </div>
  )
}

export default NewItem;
