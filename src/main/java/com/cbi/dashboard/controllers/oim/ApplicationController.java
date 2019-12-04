package com.cbi.dashboard.controllers.oim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.oim.ApplicationService;

@RestController
@RequestMapping("/application")
public class ApplicationController {

    @Autowired
    ApplicationService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalApplications() {    	
		return service.getTotalApplications();
    }
    
    @RequestMapping(value="/average-entitlements", method = RequestMethod.GET)
    public double getAverageEntitlementsPerApplication() {    	
		return service.getAverageEntitlementsPerApplication();
    }
    
    @RequestMapping(value="/max-active-users", method = RequestMethod.GET)
    public double getMaxActiveUsersInTargetApplication() {    	
		return service.getMaxActiveUsersInTargetApplication();
    }
    
    @RequestMapping(value="/average-active-users", method = RequestMethod.GET)
    public double getAverageActiveUsersInTargetApplication() {    	
		return service.getAverageActiveUsersInTargetApplication();
    }
    
    @RequestMapping(value="/percent-changes", method = RequestMethod.GET)
    public double getPercentChangesPerTargetApplicationPerDay() {    	
		return service.getPercentChangesPerTargetApplicationPerDay();
    }
}
