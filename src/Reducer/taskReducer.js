import { ACTION_TYPE } from "./util";

const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.ADD_TITLE:
      return {
        ...state,
        taskData: { ...state.taskData, title: payload },
      };
    case ACTION_TYPE.ADD_DESCRIPTION:
      return {
        ...state,
        taskData: { ...state.taskData, description: payload },
      };
    case ACTION_TYPE.ADD_TAG:
      return {
        ...state,
        taskData: { ...state.taskData, tag: payload },
      };
    case ACTION_TYPE.ADD_TIME:
      return {
        ...state,
        taskData: { ...state.taskData, time: payload },
      };
    default:
      return state;
  }
};
export { taskReducer };
