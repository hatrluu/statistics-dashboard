package com.cbi.dashboard;

import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cbi.dashboard.dao.UserDAO;
import com.cbi.dashboard.models.User;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StatisticsDashboardTests {
	Integer newUserId = 0;
	
	@Autowired
	UserDAO userDAO;
}
