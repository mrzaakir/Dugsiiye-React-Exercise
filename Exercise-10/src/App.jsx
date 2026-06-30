import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'MO Salah', email: 'mosalah@gmail.com' ,work: 'FootBaller',num: 10},
    { id: 2, name: 'Haryy Kene', email: 'harrykene@gmail.com' ,work: 'FootBaller',num: 9},
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;