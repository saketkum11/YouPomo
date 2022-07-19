import { ACTION_TYPE } from "./util";

const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SUMBIT_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case ACTION_TYPE.UPDATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task._id === payload._id) {
              return {
                ...task,
                title: payload.title,
                description: payload.description,
                tag: payload.tag,
                time: payload.time,
              };
            }
            return task;
          }),
        ],
      };
    case ACTION_TYPE.REMOVE_TASK:
      return {
        ...state,
        tasks: [...payload],
      };
    case ACTION_TYPE.EDIT_TASK:
      return {
        ...state,
        updateTask: payload,
      };
    default:
      return state;
  }
};
export { taskReducer };
