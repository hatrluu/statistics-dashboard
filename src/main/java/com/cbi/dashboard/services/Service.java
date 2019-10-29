package com.cbi.dashboard.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public abstract class Service {
	final static Logger logger = LoggerFactory.getLogger(ApplicationService.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;  
	
	protected double singleQuery(String query) {
		return singleQuery(query, "COUNT(*)");
	}
	
	protected double singleQuery(String query, String columnName) {
		return jdbcTemplate.query(
                query, new Object[] { },
                (rs, rowNum) -> rs.getDouble(columnName)
        ).get(0);
	}
}
