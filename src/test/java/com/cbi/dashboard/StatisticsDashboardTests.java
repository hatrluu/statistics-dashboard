package com.cbi.dashboard;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cbi.dashboard.services.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StatisticsDashboardTests {
	Integer newUserId = 0;
	
	@Autowired
	UserService userService;
}
