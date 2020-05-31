import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../../action/data";
import serverData from '../../reducers/rootReduser.js';
import { Pagination } from "antd";

class ServerData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 50
        };
    }

    serverReq() {
        this.props.fetchServerData('http://itstrana.vh118.hosterby.com/start_up/api/startap/startap/',
            this.state.pageSize,
            this.state.page);
    }

    componentDidMount() {
        this.serverReq();
    }

    onChange = page => {
        this.setState({
            current: page,
        });
        this.serverReq();
    };

    // getItems() {
    //     let indexFrom = (this.state.page - 1)*this.state.pageSize;
    //     let indexTo = this.state.pageSize*this.state.page-1;
    //     let currentPage = this.props.serverObj.results.slice(indexFrom, indexTo);
    //     return currentPage.map((data, i)=> {
    //         return <div key={i}>
    //             <p>id: {data.id}</p>
    //             <p>title: {data.title}</p>
    //             <p>description: {data.description}</p>
    //             <p>image: {data.image}</p>
    //             <p>price: {data.price}</p>
    //             <p>state: {data.state}</p>
    //             <p>url: {data.url}</p>
    //             <p>registration_time: {data.registration_time}</p>
    //             <p>creation_time: {data.creation_time}</p>
    //             <p>phone: {data.phone}</p>
    //             <p>author: {data.author}</p>
    //         </div>
    //     });
    // }

    render() {
        return (
            <Fragment>
                {this.props.serverObj.results && this.props.serverObj.results.length && (
                    <Fragment>
                        <Pagination
                            current={this.state.page}
                            onChange={this.onChange}
                            total={this.props.serverObj.results.length}
                            defaultCurrent={1}
                            defaultPageSize = {this.state.pageSize}
                        />
                        {this.props.serverObj.results.map((data, i)=> {
                                return <div key={data.id}>
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
                            })};
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        serverObj: state.serverObj
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchServerData: (serverUrl, pageSize, page) => dispatch(fetchData(serverUrl, pageSize, page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerData);