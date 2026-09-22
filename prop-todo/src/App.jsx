import { useMemo, useState } from "react";
import { Addbtn, SearchBar } from "./Components/Buttons";
import { Modal } from "./Components/Modal";
import { Header, Todo } from "./Components/Todo";
import "./Components/Todo.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return tasks.filter((item) => {
      const matchesSearch =
        !searchValue || item.text.toLowerCase().includes(searchValue);
      const matchesFilter =
        filter === "all" ||
        (filter === "complete" && item.completed) ||
        (filter === "incomplete" && !item.completed);

      return matchesSearch && matchesFilter;
    });
  }, [tasks, search, filter]);

  return (
    <>
      <div>
        <Header />
        <SearchBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <Todo
          setTasks={setTasks}
          setTask={setTask}
          setEditIndex={setEditIndex}
          setShowModal={setShowModal}
          tasks={tasks}
          filteredTasks={filteredTasks}
        />
        <Addbtn setShowModal={setShowModal} />
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          task={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      )}
    </>
  );
};

export default App;
