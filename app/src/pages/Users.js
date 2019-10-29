import React, { Component } from 'react';
import RefBarChart from '../components/RefBarChart';
import '../styles/BootStrapTable.css'
import axios from 'axios';

const axiosInst = axios.create({
    baseURL:'http://localhost:8080',
    timeout: 1000
})
class Users extends Component {
    state = {
        totalUsers: 0
    }
    componentDidMount(){
        axiosInst.get('/users/total').then((res)=>{
            this.setState({totalUsers:res.data})
        })
        .catch(console.log);
    }
    render(){
        return(
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Metric</th>
                            <th scope="col">Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Total Number of Active users in the system</th>
                            <td><RefBarChart min={50000} mid={150000} max={500000} valueProp={this.state.totalUsers}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Concurrent logins at peak usage time</th>
                            <td><RefBarChart min={25} mid={100} max={250} valueProp={0}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average number of Applications per active user</th>
                            <td><RefBarChart min={2} mid={5} max={10} valueProp={0.35}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average number of Roles per active user</th>
                            <td><RefBarChart min={2} mid={5} max={10} valueProp={1.24}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average number of Entitlements per active user</th>
                            <td><RefBarChart min={5} mid={10} max={20} valueProp={15.37}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default Users;