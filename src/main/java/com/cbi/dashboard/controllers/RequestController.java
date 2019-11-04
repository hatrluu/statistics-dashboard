package com.cbi.dashboard.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.RequestService;

@RestController
@RequestMapping("/request")
public class RequestController {

    @Autowired
    RequestService service;

    @RequestMapping(value="/self-service-operations", method = RequestMethod.GET)
    public double getSelfServiceOperationsPerDay() {    	
		return service.getSelfServiceOperationsPerDay();
    }
    
    @RequestMapping(value="/admin-operations", method = RequestMethod.GET)
    public double getAdminOperationsPerDay() {    	
		return service.getAdminOperationsPerDay();
    }
    
    @RequestMapping(value="/average-requests", method = RequestMethod.GET)
    public double getAverageRequestsPerDay() {    	
		return service.getAverageRequestsPerDay();
    }
    
    @RequestMapping(value="/average-approvals", method = RequestMethod.GET)
    public double getAverageApprovalsPerDay() {    	
		return service.getAverageApprovalsPerDay();
    }
}
