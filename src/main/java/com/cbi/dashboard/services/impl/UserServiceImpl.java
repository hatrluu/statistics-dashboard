package com.cbi.dashboard.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cbi.dashboard.dao.UserDAO;
import com.cbi.dashboard.services.UserService;

@Component
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDAO userDAO;
	
	public int getTotalUsers() {
		return userDAO.getTotalUsers();
	}
	
	public int getTotalApplications() {
		return userDAO.getTotalApplications();
	}
}
