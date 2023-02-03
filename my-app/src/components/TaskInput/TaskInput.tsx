import styles from './taskInput.module.scss'
export default function TaskInput() {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>ToDo List typescript</h1>
      <form action='' className={styles.form}>
        <input type='text' placeholder='text here' />
        <button type='submit'>+</button>
      </form>
    </div>
  )
}
