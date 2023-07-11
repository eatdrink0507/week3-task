export default function List({ data }: Props) {
  return (
    <div>
      <h3>issue title</h3>
      <h3>{data.title}</h3>
      <span>작성자 name, 작성일 2022년 3월</span>
      <span>
        작성자: {data.user.login}, 작성일: {data.created_at}
      </span>
    </div>
  );
}

type Props = {
  data: {
    number: number;
    title: string;
    user: {
      login: string;
    };
    created_at: string;
    comments: number;
  };
};
