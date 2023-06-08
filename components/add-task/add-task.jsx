import { Fragment } from 'react';

const AddTask = (props) => {
  return (
    <Fragment>
      <div className="addTask">
        <input onChange={props.onChange} />
        <button onClick={props.onAdd}>Add Task</button>
      </div>
    </Fragment>
  );
};

export default AddTask;
