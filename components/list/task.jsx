import styles from '../list/task.module.css';

const Task = (props) => {
  return (
    <div
      className={`${styles.list_container} ${props.completed && styles.completed}`}
    >
      <div key={props.key} className={styles.task}>
        <p>{props.taskName}</p>
      </div>
      <button onClick={() => props.onComplete(props.id)}>Complete</button>
      <button
        onClick={() => props.deleteTaskHandler(props.id)}
        className={styles.delete}
      >
        x
      </button>
    </div>
  );
};

export default Task;
