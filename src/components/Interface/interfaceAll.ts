export interface Data {
  name: string;
  id: number;
  date: string;
  idModalOpen: boolean;
  ModalTest: string;
}

export interface State {
  data: Data[];
}
interface AddTaskAction {
  type: "add";
  payload: Data;
}
export type OfficeTodoAction = AddTaskAction;
export interface Inputs {
  textList: string;
  submissionDate: string;
}

