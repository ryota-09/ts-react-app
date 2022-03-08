type Props = {
  userId: number;
  // id: number,
  title: string;
  // computed: boolean
}

export const Todo = (props: Props) => {
  const { title, userId } = props;
  return <p>{`${title}( ユーザー: ${userId} )`}</p>
}
