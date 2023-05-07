export interface Issue {
  assignee: string;
  comments: string[];
  completedDate: null | string;
  createdBy: string;
  createdDate: string;
  dueDate: string;
  id: string;
  labels: string[];
  number: number;
  status: string;
  title: string;
}
