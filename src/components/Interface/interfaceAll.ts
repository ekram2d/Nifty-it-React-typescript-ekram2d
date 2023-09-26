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
interface DeleteAction {
  type :"delete";
  payload:number;
}
export type OfficeTodoAction = AddTaskAction | DeleteAction;
export interface Inputs {
  textList: string;
  submissionDate: string;
}

