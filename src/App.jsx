import { Profile } from './components/Profile';
import { Section } from './components/Section';
import { StatList } from './components/StatList';
import { FriendList } from './components/FriendList';
import { TransactionHistory } from './components/TransactionHistory';

import data from './jsons/data.json';
import user from './jsons/user.json';
import friends from './jsons/friends.json';
import transactions from './jsons/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        color: '#010101',
        backgroundColor: '#e8e8e8',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats" className="statistics">
        <StatList stats={data} />
      </Section>
      <Section title="Friends list" className="friends">
        <FriendList friends={friends} />,
      </Section>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
