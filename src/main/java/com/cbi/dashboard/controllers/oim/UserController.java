package com.cbi.dashboard.controllers.oim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.oim.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalUsers() {
        return service.getTotalUsers();
    }
    
    @RequestMapping(value="/total-active", method = RequestMethod.GET)
    public double getTotalActiveUsers() {
        return service.getTotalActiveUsers();
    }
    
    @RequestMapping(value="/average-applications", method = RequestMethod.GET)
    public double getAverageApplicationsPerActiveUser() {
        return service.getAverageApplicationsPerActiveUser();
    }
    
    @RequestMapping(value="/average-roles", method = RequestMethod.GET)
    public double getAverageRolesPerActiveUser() {
        return service.getAverageRolesPerActiveUser();
    }
    
    @RequestMapping(value="/average-entitlements", method = RequestMethod.GET)
    public double getAverageEntitlementsPerActiveUser() {
        return service.getAverageEntitlementsPerActiveUser();
    }
}
