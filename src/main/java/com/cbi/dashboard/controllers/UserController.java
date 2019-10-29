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
    public int getTotalUsers() {
        return service.getTotalUsers();
    }

    @RequestMapping(value="/application/total", method = RequestMethod.GET)
    public int getTotalApplications() {    	
		return service.getTotalApplications();
    }
}
