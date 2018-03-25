import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: [],
      terms: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({ loading: true, events: [] });
      fetch('/.netlify/functions/eventbrite', { method: 'post', body: this.state.terms })
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  update(e) {
    this.setState({terms: e.target.value});
  }

  render() {
    return(
      <div className='search-form'>
        <form onSubmit={e => this.handleClick(e)}>
          <h2>Search Events!</h2><br />
          <span className='search-bar' >
            <input
              className='search-input'
              placeholder='name yo thang'
              value={this.state.terms}
              onChange={e => this.update(e)}
              />
            <input className='search-button' type='submit' value='FIND EVENTS'></input>
          </span>
        </form>
      </div>
    );
  }

}
