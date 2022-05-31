import { ACTION_TYPE } from "./util";

const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SUMBIT_TASK:
      return {
        ...state,
        task: [...state.task, payload],
      };
    default:
      return state;
  }
};
export { taskReducer };
