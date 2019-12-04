import React, { Component } from 'react';
import RefBarChart from '../components/RefBarChart';
import '../styles/BootStrapTable.css';
import { axiosInst } from '../App';
import axios from 'axios';

class Applications extends Component {
    state = {
        totalUsers: 0,
        totalActive: 0,
        averageApplicationsPerActiveUser: 0,
        averageRolesPerActiveUser: 0,
        averageEntitlementsPerActiveUser: 0
    }
    componentDidMount(){
        axios.all([
            axiosInst.get('/application/total'),
            axiosInst.get('/application/averageEntitlementsPerApplication'),
            axiosInst.get('/application/maxActiveUsersInTargetApplication'),
            axiosInst.get('/application/averageActiveUsersInTargetApplications'),
            axiosInst.get('/application/percentChangesPerTargetApplicationPerDay')
        ]).then(axios.spread((total,averageEntitlementsPerApplication,maxActiveUsersInTargetApplication,averageActiveUsersInTargetApplications,percentChangesPerTargetApplicationPerDay)=>{
            this.setState(()=>({
                total: total.data,
                averageEntitlementsPerApplication: averageEntitlementsPerApplication.data,
                maxActiveUsersInTargetApplication: maxActiveUsersInTargetApplication.data,
                averageActiveUsersInTargetApplications: averageActiveUsersInTargetApplications.data,
                percentChangesPerTargetApplicationPerDay: percentChangesPerTargetApplicationPerDay.data
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
                            <th scope="row">Total Number of target applications</th>
                            <td><RefBarChart min={5} mid={15} max={30} valueProp={this.state.total}/></td>
                        </tr>
                        <tr>
                            <th scope="row"> Average no of Entitlements per application</th>
                            <td><RefBarChart min={10000} mid={20000} max={30000} valueProp={this.state.averageEntitlementsPerApplication}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Maximum active users in a Single Target App</th>
                            <td><RefBarChart min={10000} mid={100000} max={300000} valueProp={this.state.maxActiveUsersInTargetApplication}/></td>
                        </tr>
                        <tr>
                            <th scope="row">Average active user population per target app</th>
                            <td><RefBarChart min={5000} mid={50000} max={100000} valueProp={this.state.averageActiveUsersInTargetApplications}/></td>
                        </tr>
                        <tr>
                            <th scope="row">% Changes per day on each target application</th>
                            <td><RefBarChart min={1} mid={1} max={1} valueProp={this.state.percentChangesPerTargetApplicationPerDay}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Applications;