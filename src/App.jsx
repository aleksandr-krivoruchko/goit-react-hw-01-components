import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import data from './data.json';
import user from './user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#010101',
        backgroundColor: '#e3e3e3',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      {/* <Statistics stats={data} />; */}
    </div>
  );
};
