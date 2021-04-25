import React, {Component} from 'react';
import Advertisements from './components/advertisements';
import { AdvertisementForm } from './components/advertisementForm';
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
      return (
        <div>
          <Container style = {{ marginTop: 40 }}>
            <AdvertisementForm />
            <Advertisements advertisements={this.state.advertisements} />
          </Container>
        </div>
      )
  }

  state = {
    advertisements: []
  };

  componentDidMount() {
      fetch('http://localhost:5000/advertisements')
          .then(res => res.json())
          .then((data) => {
              this.setState({ advertisements: data })
          })
          .catch(console.log)
  }
}

export default App;
