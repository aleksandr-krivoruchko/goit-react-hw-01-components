import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Section/Section';
import { StatList } from 'components/StatList/StatList';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Section title="Upload stats">
        <StatList stats={data} />
      </Section>
      <Section title="Friends list">
        <FriendList friends={friends} />,
      </Section>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
