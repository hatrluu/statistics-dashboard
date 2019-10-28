package com.cbi.dashboard.dao;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cbi.dashboard.models.User;

@Component
public class UserDAOImpl implements UserDAO{
	final static Logger logger = LoggerFactory.getLogger(UserDAOImpl.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;  
	
	public int getTotalUsers() {
		return jdbcTemplate.query(
                "SELECT COUNT(*) FROM USR", new Object[] { },
                (rs, rowNum) -> new Integer(rs.getInt("COUNT(*)"))
        ).get(0);
	}
}
