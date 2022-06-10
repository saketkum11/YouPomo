import { ACTION_TYPE } from "./util";

const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SUMBIT_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    default:
      return state;
  }
};
export { taskReducer };
