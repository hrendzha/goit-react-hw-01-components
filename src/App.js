import user from './data/user.json';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';
import Container from './components/Container/Container';

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
        </>
    );
}

export default App;
