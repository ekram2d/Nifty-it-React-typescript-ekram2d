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

export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Distance;
  engines: RocketEngines;
  first_flight: String;
  first_stage: RocketFirstStage;
  id: string; // Changed to lowercase "string"
  mass: Mass;
  success_rate_pct: number;
}

interface Mass {
  kg: number;
  lb: number;
}

interface Distance {
  feet: number;
  meters: number;
}

interface RocketEngines {
  engine_loss_max: string; // Changed to lowercase "string"
  layout: string;
}

interface RocketFirstStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
}

export interface Link {
  article: string;
  reddit: string;
  wikipedia: string;
}

export interface History {
  details: string;
  event_date_unix: string;
  event_date_utc: string;
  id: string;
  links: Link;
  title: string;
}
