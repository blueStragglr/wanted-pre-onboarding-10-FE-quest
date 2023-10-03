import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/login';

export default function List() {
  const { data: userListDatas, isLoading } = useQuery(
    ['userListDatas'],
    getUser,
  );

  if (isLoading) {
    return '';
  }
  // console.log(userListDatas);
  return (
    <div>
      <ul>
        {userListDatas.map((userListData) => (
          <li key={userListData.id}>{userListData.name}</li>
        ))}
      </ul>
    </div>
  );
}
