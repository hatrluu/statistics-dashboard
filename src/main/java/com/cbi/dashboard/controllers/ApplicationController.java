package com.cbi.dashboard.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.ApplicationService;

@RestController
@RequestMapping("/application")
public class ApplicationController {

    @Autowired
    ApplicationService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalApplications() {    	
		return service.getTotalApplications();
    }
    
    @RequestMapping(value="/maxActiveUsersInTargetApplication", method = RequestMethod.GET)
    public double maxActiveUsersInTargetApplication() {    	
		return service.maxActiveUsersInTargetApplication();
    }
    
    @RequestMapping(value="/averageActiveUsersInTargetApplications", method = RequestMethod.GET)
    public double averageActiveUsersInTargetApplications() {    	
		return service.averageActiveUsersInTargetApplications();
    }
}
