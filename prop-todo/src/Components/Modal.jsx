export const Modal = ({
  setShowModal,
  setTask,
  task,
  tasks,
  setTasks,
  editIndex,
  setEditIndex,
}) => {
  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleApply = () => {
    const newTask = task.trim();
    if (!newTask) {
      return;
    }

    if (editIndex !== null) {
      setTasks((currentTasks) =>
        currentTasks.map((item) =>
          item.id === editIndex ? { ...item, text: newTask } : item,
        ),
      );
      setEditIndex(null);
    } else {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
    }

    setTask("");
    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-box-first">
          <h2>NEW NOTE</h2>
          <input
            value={task}
            onChange={handleInput}
            type="text"
            placeholder="Input your note..."
          />
        </div>
        <div className="modal-btn">
          <button
            onClick={() => {
              setTask("");
              setEditIndex(null);
              setShowModal(false);
            }}
          >
            CANCEL
          </button>
          <button onClick={handleApply}>APPLY</button>
        </div>
      </div>
    </div>
  );
};
