import React, { Component } from 'react';

export default class IndexTest extends Component {

  handleFile(){
    console.log('hit handle')
  }

  render() {
    return (
      <div>
        <h2>Upload ebook</h2>
        <form>
          <input type="file" onChange={this.handleFile}></input>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}
