package com.cbi.dashboard.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.AccessPolicyService;

@RestController
@RequestMapping("/accessPolicy")
public class AccessPolicyContoller {

	@Autowired
	AccessPolicyService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalAccessPolicies() {    	
		return service.getTotalAccessPolicies();
    }

    @RequestMapping(value="/average-resources", method = RequestMethod.GET)
    public double getAverageResourcePerAccessPolicy() {    	
		return service.getAverageResourcePerAccessPolicy();
    }
}
