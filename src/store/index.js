import create from "zustand";

const useTodoStore = create((set) => ({
  tasks: [],
  name: "Shahid Dhariwala",
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task]
    }));
  },
  deleteTask: (index) => {
    set((state) => ({ tasks: state.tasks.filter((_, idx) => idx !== index) }));
  }
}));

export default useTodoStore;
