import { FC } from "react";
import { User } from "./types/user"

type Props = {
  user: User;
}

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* joinは配列の要素を()内の文字で区切り、一つのstringにしてくれる。?をつけると要素がない場合はundefindを返してくれる。 */}
      <dd>{user.hobbirs?.join(" / ")}</dd>
    </dl>
  )
}
