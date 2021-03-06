package com.cbi.dashboard.controllers.oim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.oim.OrganizationService;

@RestController
@RequestMapping("/organization")
public class OrganizationController {

    @Autowired
    OrganizationService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalOrganizations() {    	
		return service.getTotalOrganizations();
    }
}
