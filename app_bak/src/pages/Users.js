import React, { Component } from 'react';
import RefBarChart from '../components/RefBarChart';
import '../styles/BootStrapTable.css'
import { axiosInst } from '../App';
import axios from 'axios';

class Users extends Component {
    state = {
        totalUsers: 0,
        totalActive: 0,
        averageApplicationsPerActiveUser: 0,
        averageRolesPerActiveUser: 0,
        averageEntitlementsPerActiveUser: 0
    }
    componentDidMount(){
        axios.all([
            axiosInst.get('/user/total'),
            axiosInst.get('/user/totalActive'),
            axiosInst.get('/user/averageApplicationsPerActiveUser'),
            axiosInst.get('/user/averageRolesPerActiveUser'),
            axiosInst.get('/user/averageEntitlementsPerActiveUser')
        ]).then(axios.spread((total,totalActive,averageApplicationsPerActiveUser,averageRolesPerActiveUser,averageEntitlementsPerActiveUser)=>{
            this.setState(()=>({
                totalUsers: total.data,
                totalActive: totalActive.data,
                averageApplicationsPerActiveUser: averageApplicationsPerActiveUser.data,
                averageRolesPerActiveUser: averageRolesPerActiveUser.data,
                averageEntitlementsPerActiveUser: averageEntitlementsPerActiveUser.data
            }))
        }))
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
                            <td><RefBarChart min={25} mid={100} max={250} valueProp={this.state.totalActive}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average number of Applications per active user</th>
                            <td><RefBarChart min={2} mid={5} max={10} valueProp={this.state.averageApplicationsPerActiveUser}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average number of Roles per active user</th>
                            <td><RefBarChart min={2} mid={5} max={10} valueProp={this.state.averageRolesPerActiveUser}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average number of Entitlements per active user</th>
                            <td><RefBarChart min={5} mid={10} max={20} valueProp={this.state.averageEntitlementsPerActiveUser}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default Users;