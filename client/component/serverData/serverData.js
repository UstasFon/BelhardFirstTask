import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../../action/data";
import serverData from '../../reducers/rootReduser.js';
import { Pagination } from "antd";

class ServerData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 50
        };
    }

    componentDidMount() {
        this.props.fetchServerData('http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/?format=json');
    }

    onChange = page => {
        this.setState({
            current: page,
        });
    };

    getItems() {
        let indexFrom = (this.state.current - 1)*this.state.pageSize;
        let indexTo = this.state.pageSize*this.state.current-1;
        let currentPage = this.props.serverObj.results.slice(indexFrom, indexTo);
        return currentPage.map((data, i)=> {
            return <div key={i}>
                <p>id: {data.id}</p>
                <p>title: {data.title}</p>
                <p>description: {data.description}</p>
                <p>image: {data.image}</p>
                <p>price: {data.price}</p>
                <p>state: {data.state}</p>
                <p>url: {data.url}</p>
                <p>registration_time: {data.registration_time}</p>
                <p>creation_time: {data.creation_time}</p>
                <p>phone: {data.phone}</p>
                <p>author: {data.author}</p>
            </div>
        });
    }

    render() {
        return (
            <Fragment>
                {this.props.serverObj.results && this.props.serverObj.results.length && (
                    <Fragment>
                        <Pagination
                            current={this.state.current}
                            onChange={this.onChange}
                            total={this.props.serverObj.results.length}
                            defaultCurrent={1}
                            defaultPageSize = {this.state.pageSize}
                        />
                        {this.getItems()}
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        serverObj: state.serverObj,
    }
};


const mapDispatchToProps = dispatch => {
    let serverUrl = 'http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/?format=json&pagesize=50';
    return {
        fetchServerData: serverUrl => dispatch(fetchData(serverUrl))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerData);