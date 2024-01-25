export const UserData = ({
  id,
  username
}: {
  id: number;
  username: string;
}) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{id}</h2>
    </div>
  );
};
