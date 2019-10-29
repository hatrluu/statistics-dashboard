package com.cbi.dashboard.dao;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

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
	
	public int getTotalApplications() {
		return jdbcTemplate.query(
                "SELECT COUNT(*) FROM APP_INSTANCE", new Object[] { },
                (rs, rowNum) -> new Integer(rs.getInt("COUNT(*)"))
        ).get(0);
	}
}
