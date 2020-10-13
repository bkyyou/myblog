import React, { PureComponent } from 'react';
import ListItem from "./listItem";

class ListPage extends PureComponent {
  
  renderList() {
    if (this.props.listData.length === 0)
      return <div className="text-center">购物车是空的</div>;

    return this.props.listData.map(item => {
      return (
        <ListItem
          onMinus={this.props.handleMinus}
          onPlus={this.props.handlePlus}
          onDelete={this.props.handleDelete}
          key={item.id} 
          data={item} 
        />
      );
    });
  }

  render() { 
    return ( 
      <>
        {this.renderList()}
      </>
     );
  }
}
 
export default ListPage;