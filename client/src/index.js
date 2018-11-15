import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import axios from 'axios';
import index from './index.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      title: ''
    };
    this.asyncGet = this.asyncGet.bind(this);
  }

  asyncGet(callback) {
    axios.get('/data/stocks')
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        callback(error);
      });
  }

  render() {
    return (
      <div className={index.form}>
        <header >
          <span>
          </span>
        </header>
        <Form asyncGet={this.asyncGet}></Form>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));
