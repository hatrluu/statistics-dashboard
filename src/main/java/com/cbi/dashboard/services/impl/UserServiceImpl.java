package com.cbi.dashboard.services.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cbi.dashboard.dao.UserDAO;
import com.cbi.dashboard.models.User;
import com.cbi.dashboard.services.UserService;

@Component
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDAO userDAO;
	
	public int getTotalUsers() {
		return userDAO.getTotalUsers();
	}
}
