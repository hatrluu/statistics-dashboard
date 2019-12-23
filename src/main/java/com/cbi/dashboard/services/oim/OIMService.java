package com.cbi.dashboard.services.oim;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

public abstract class OIMService {
	final static Logger logger = Logger.getLogger(OIMService.class.getName());
	
	@Autowired
	@Qualifier("oimJdbcTemplate")
	protected JdbcTemplate oimJdbcTemplate;
	
	protected double singleQuery(String query) {
		return singleQuery(query, Double.class);
	}
	
	protected <T> T singleQuery(String query, Class<T> c) {
		try {
			return oimJdbcTemplate.queryForObject(query, c);
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}
}
