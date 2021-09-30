import { useState } from 'react';
import Input from './components/Input'
import './App.css';
import { Button, CommentActions, Container, Grid, Header, List } from 'semantic-ui-react';
import contacts from "./data.json"

// import mydata from '../public/data.json';



// function Task({mytask, index}){
//   return(
//     <div className='mytasks'>{mytask.text}</div>
//   )
// }

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

  
//   const welcome = () => {
//     return (
//        <span>Welcome{headerText}!</span> 
//     )
// }
// const displayData = () => {
//   const headerAttr = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   };
// }
  return (
    <div className="App">
      <h1> Hello world!</h1>
      {/* <div className="some-task">
        { mytask.map((mytask, index) => (
          console.log(mytask),
          <Task key={index} index={index} mytask={mytask} />
        ))}
      </div> */}
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
      <Input />
    </div>
  );
}

export default App;
