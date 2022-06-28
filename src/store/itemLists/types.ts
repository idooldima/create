import { ErrorType } from '../types';

export type TaskType = {
  id?: string;
  task: string;
  complete: boolean;
};

export type ItemType = {
  _id?: string;
  listTitle: string;
  date: string;
  category: string;
  listItem: TaskType[];
  isFavorites: boolean;
};

export type ItemsTypes = ItemType[];

export type ItemStateType = {
  data: ItemsTypes;
  isLoading: boolean;
  error: ErrorType | null;
};
