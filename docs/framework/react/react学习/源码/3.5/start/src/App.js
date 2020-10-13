import React, { Component } from "react";

import Nav from "./components/navbar";
import ListPage from "./components/listPage";

class App extends Component {

  constructor () {
    super()

    this.state = {
      listData: [
        {
          id: 1,
          name: "Sony 65寸高清液晶电视",
          price: 7000,
          stock: 1
        },
        {
          id: 2,
          name: "华为 Meta30",
          price: 6000,
          stock: 2
        },
        {
          id: 3,
          name: "华硕画家国度笔记本电脑",
          price: 10000,
          stock: 3
        }
      ]
    };
  }

  handleDelete = id => {
    const _list = this.state.listData.filter(item => item.id !== id);

    this.setState({
      listData: _list
    });
  };

  handleMinus = id => {
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item };
        _item.stock--;
        if (_item.stock < 0) _item.stock = 0;
        return _item;
      } else {
        return item;
      }
    });

    this.setState({
      listData: _data
    });
  };

  handlePlus = id => {
    const _data = this.state.listData.map(item => {
      if (item.id === id) {
        const _item = { ...item };
        _item.stock++;
        return _item;
      } else {
        return item;
      }
    });

    this.setState({
      listData: _data
    });
  };

  handleReset = () => {
    const _list = this.state.listData.map(item => {
      const _item = { ...item };
      _item.stock = 0;
      return _item;
    });

    this.setState({
      listData: _list
    });
  };


  render() {
    return (
      <>
        <Nav
          onReset={this.handleReset}
          itemNum={this.state.listData.length}
        ></Nav>
        <div className="container">
          <ListPage
            listData={this.state.listData}
            handleMinus={this.handleMinus}
            handlePlus={this.handlePlus}
            handleDelete={this.handleDelete}
          />
        </div>
      </>
    );
  }
}

export default App;
