import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../../action/data";
import serverData from '../../reducers/rootReduser.js';
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
                <ul>
                    {this.bla()}
                    {/*{this.props.serverArr.result.map((data, i)=>{*/}
                    {/*    return <li key={i}>*/}
                    {/*        <div>id: {data.id}</div>*/}
                    {/*        <div>title: {data.title}</div>*/}
                    {/*        <div>description: {data.description}</div>*/}
                    {/*        <div>image: {data.image}</div>*/}
                    {/*        <div>price: {data.price}</div>*/}
                    {/*    </li>*/}
                    {/*})}*/}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        serverArr: state.serverArr
    }
};


const mapDispatchToProps = dispatch => {
    const serverUrl = 'http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/?format=json';
    return {
        fetchServerData: serverUrl => dispatch(fetchData(serverUrl))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerData);