export interface IState {
  events: Object[];
}

export type Object = IActivity | IComment;

export interface IComment {
  type: string;
  createdAt: string;
  author: string;
  message?: IMessage;
  activity?: Activity;
}

export interface IMessage {
  title: string;
  description: string;
  receiver: string;
}

export type IActivity = Omit<IComment, "message"> & {
  activity: Activity;
};

export interface Activity {
  type: string;
  status: string;
}
