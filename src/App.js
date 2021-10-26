import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
    return (
        <>
            <Section>
                <Container>
                    <Profile
                        name={user.name}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
                        stats={user.stats}
                    />
                </Container>
            </Section>

            <Section>
                <Container>
                    <Statistics title="UPLOAD STATS" stats={statisticalData} />
                </Container>
            </Section>

            <Section>
                <Container>
                    <FriendList friends={friends} />
                </Container>
            </Section>

            <Section>
                <Container>
                    <TransactionHistory items={transactions} />
                </Container>
            </Section>
        </>
    );
}

export default App;
