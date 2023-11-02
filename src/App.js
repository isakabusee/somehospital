import { useState } from 'react';
// import Input from './components/Input'
import './App.css';
import { Button, CommentActions, Container, Grid, Header, List } from 'semantic-ui-react';
import contacts from "./data.json"



function App() {
  const [ publicData, setPublicData ] = useState({});
  const [mytask, SetMytask] = useState([
    {
      title: 'Something funny',
      isComplete: false
    },
    {
      title: 'Do some coding',
      isComplete: false
    },
    {
      title: 'Watch the clock',
      isComplete: false
    }
  ])
  const [phrase, setPhrase] = useState("");

  const onSubmit=(e)=>{
    e.preventDefault()
  }

 
  return (
    <div className="App">
      <h1> Hello world!</h1>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>List</Header>
              <List>
                {contacts.map(el => {
                  return (
                    <List.Item key={el.id}>
                      <List.Content>
                        {el.firstname} {el.lastname}
                      </List.Content>
                      <List.Content>{el.phone}</List.Content>
                      <List.Content>{el.email}</List.Content>
                      </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div>
      <input placeholder="anything you want" value={phrase} onChange={((e)=> setPhrase(e.target.value))}/>
      <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
