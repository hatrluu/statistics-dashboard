package com.cbi.dashboard.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.AccessPolicyService;

@RestController
@RequestMapping("/accessPolicy")
public class AccessPolicyContoller {

	AccessPolicyService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalApplications() {    	
		return service.getTotalAccessPolicies();
    }

    @RequestMapping(value="/average-resources", method = RequestMethod.GET)
    public double getAverageResourcePerAccessPolicy() {    	
		return service.getAverageResourcePerAccessPolicy();
    }
}
