import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Grid,
} from 'uikit-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Grid>
          <Card hover>
            <CardHeader>
              <CardTitle><img src="./favicon.ico" /></CardTitle>
              <CardBody>
                Content body of the Card
              </CardBody>
              <CardFooter>
                MONEY
              </CardFooter>
            </CardHeader>
          </Card>
        </Grid>
      </header>
    </div>
  );
}

export default App;
