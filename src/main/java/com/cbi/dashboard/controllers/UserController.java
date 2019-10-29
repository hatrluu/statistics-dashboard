package com.cbi.dashboard.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.UserService;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    UserService service;

    @RequestMapping(value="/users/total", method = RequestMethod.GET)
    public double getTotalUsers() {
        return service.getTotalUsers();
    }
    
    @RequestMapping(value="/users/totalActive", method = RequestMethod.GET)
    public double getTotalActiveUsers() {
        return service.getTotalActiveUsers();
    }
    
    @RequestMapping(value="/users/averageApplicationsPerActiveUser", method = RequestMethod.GET)
    public double getAverageApplicationsPerActiveUser() {
        return service.getAverageApplicationsPerActiveUser();
    }
    
    @RequestMapping(value="/users/averageRolesPerActiveUser", method = RequestMethod.GET)
    public double getAverageRolesPerActiveUser() {
        return service.getAverageRolesPerActiveUser();
    }
    
    @RequestMapping(value="/users/averageEntitlementsPerActiveUser", method = RequestMethod.GET)
    public double getAverageEntitlementsPerActiveUser() {
        return service.getAverageApplicationsPerActiveUser();
    }

//    @RequestMapping(value="/application/total", method = RequestMethod.GET)
//    public double getTotalApplications() {    	
//		return service.getTotalApplications();
//    }
}
