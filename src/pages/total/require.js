import React, { Component } from 'react';
// import styles from './require.css';


export default class TotalRequire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      lists: [
        { id: 1, category_id: 2, title: "111", description: "最新款的苹果手机" },
        { id: 2, category_id: 2, title: "222", description: "最新款的苹果手机" },
        { id: 3, category_id: 2, title: "333", description: "最新款的苹果手机" }
      ]
    }
  }

  changeFlag = () => {
    this.setState({
      flag: !this.state.flag
    }, () => {
      console.log(111)
      console.log(this.state.flag)
      const { flag } = this.state
      this.setState({
        lists: this.state.lists.sort((a, b) => (flag ? a.id - b.id : b.id - a.id))
      })
    })
  }

  render() {
    const { lists } = this.state

    return (
      <div>

        <button onClick={this.changeFlag}> this is a button </button>
        <br />
        <ul>
          {
            lists.map((list, index) => (
              <li key={index}>{list.title}----{list.id}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
