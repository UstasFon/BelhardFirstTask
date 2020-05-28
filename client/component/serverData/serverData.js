import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../../action/data";
import serverData from './rootReduser';
import Pagination from 'react-js-pagination';

class ServerData extends Component {
    constructor(props) {
        super(props) {
            this.state = {
                activePage: this.props.data.length/50
            }
    }
}

componentDidMount() {
    this.props.fetchServerData('http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/?format=api&page=2')
}

    render() {
        return (
          <div>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.activePage}
                totalItemsCount={this.props.data.length}
                pageRangeDisplayed={50}
                onChange={this.componentDidMount()}
              >
                  <ul>
                      {this.props.data.map((data, index)=>{
                          return <li key={data.id}>
                              <div>title: {data.title}</div>
                              <div>description: {data.description}</div>
                              <div>image: {data.image}</div>
                              <div>price: {data.price}</div>
                              <div>cost: {data.cost}</div>
                              <div>state: {data.state}</div>
                              <div>incubator: {data.incubator}</div>
                              <div>investor: {data.investor}</div>
                              <div>n_shots: {data.n_shots}</div>
                              <div>n_investor: {data.n_investor}</div>
                              <div>n_markets: {data.n_markets}</div>
                              <div>url_news: {data.url_news}</div>
                              <div>url: {data.url}</div>
                              <div>registration_time: {data.registration_time}</div>
                              <div>creation_time: {data.creation_time}</div>
                              <div>type: {data.type}</div>
                              <div>phone: {data.phone}</div>
                              <div>author: {data.author}</div>
                          </li>
                      })}
                  </ul>
              </Pagination>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchServerData: url => dispatch(fetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerData);