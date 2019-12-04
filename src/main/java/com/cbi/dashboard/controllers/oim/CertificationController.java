package com.cbi.dashboard.controllers.oim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.services.oim.CertificationService;

@RestController
@RequestMapping("/certifications")
public class CertificationController {

    @Autowired
    CertificationService service;

    @RequestMapping(value="/enabled", method = RequestMethod.GET)
    public boolean getCertificationEnabled() {    	
		return service.getCertificationEnabled();
    }
}
