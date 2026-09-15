import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

export const Header = () => {
  return <h1 className="heading">TODO LIST</h1>;
};

export const Todo = ({
  tasks,
  setTasks,
  setTask,
  setEditIndex,
  setShowModal,
  filteredTasks,
}) => {
  const handleDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);

    if (!taskToEdit) return;

    setTask(taskToEdit.text);
    setEditIndex(id);
    setShowModal(true);
  };

  const handleToggle = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="tasks">
      <ul className="lists">
        {filteredTasks.map((task) => (
          <li className="list" key={task.id}>
            <div className="listdata">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />

              <span>{task.text}</span>
            </div>

            <div className="editdeletebtn">
              <img
                onClick={() => handleEdit(task.id)}
                src={editIcon}
                alt="edit-icon"
              />

              <img
                onClick={() => handleDelete(task.id)}
                src={deleteIcon}
                alt="delete-icon"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
