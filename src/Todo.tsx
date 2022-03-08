import { TodoType } from "./types/todo";

//Omitも使える。除くものを指定する。Omit<TodoType, "id">
export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "【完】" : "【未】";
  return <p>{`${completeMark} ${title}( ユーザー: ${userId} )`}</p>
}
