import React, { PureComponent } from "react";
import style from './listitem.module.css'
import classnames from 'classnames/bind'

const cls = classnames.bind(style)

class ListItem extends PureComponent {

  render() {
    return (
      <div className="row mb-3">
        <div className="col-4 themed-grid-col"><span className={cls('title')}>{this.props.data.name}</span></div>
        <div className="col-1 themed-grid-col"><span className={cls('price-tag')}>¥{this.props.data.price}</span></div>
        <div className="col-2 themed-grid-col"> ¥ {this.props.data.price * this.props.data.stock} </div>
        <div className={"col-2 themed-grid-col" + (this.props.data.stock ? '' : '-s')}>
          <button onClick={() => this.props.onMinus(this.props.data.id)} type="button" className="btn btn-primary"> - </button>
          <span className={cls('digital')}>{this.props.data.stock}</span>
          <button onClick={() => this.props.onPlus(this.props.data.id)} type="button" className="btn btn-primary"> + </button>
        </div>
        <div className="col-1 themed-grid-col">
          <button onClick={ () => this.props.onDelete(this.props.data.id)} type="button" className="btn btn-danger btn-sm">delete</button>
        </div>
      </div>
    );
  }
}

export default ListItem;
