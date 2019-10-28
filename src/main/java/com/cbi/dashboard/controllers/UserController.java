package com.cbi.dashboard.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.models.User;
import com.cbi.dashboard.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService service;

    @RequestMapping(method = RequestMethod.GET)
    public int getTotalUsers() {
        return service.getTotalUsers();
    }
}
