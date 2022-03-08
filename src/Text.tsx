import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
}
//FC..functional component
//props: PropsよりもFC<Props>の書き方の方が一般的
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです。</p>
}
