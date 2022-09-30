import create from "zustand";

const useTodoStore = create((set, get) => ({
  tasks: [],
  name: "Shahid Dhariwala",
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task]
    }));
  },
  deleteTask: (index) => {
    const tempTasks = get().tasks;
    tempTasks.splice(index, 1);
    set(() => ({ tasks: tempTasks }));
  }
}));

export default useTodoStore;
