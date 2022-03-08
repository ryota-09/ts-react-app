export type User = {
  name: string;
  //趣味がない場合がある。その場合は「?」で明示する。
  hobbirs?: Array<string>;
}
