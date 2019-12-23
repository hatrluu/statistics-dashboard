package com.cbi.dashboard.services.oam;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

public abstract class OAMService {
	final static Logger logger = Logger.getLogger(OAMService.class.getName());
	
	@Autowired
	@Qualifier("oamJdbcTemplate")
	protected JdbcTemplate oamJdbcTemplate;

	protected double singleQuery(String query) {
		return singleQuery(query, Double.class);
	}
	
	protected <T> T singleQuery(String query, Class<T> c) {
		try {
			return oamJdbcTemplate.queryForObject(query, c);
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}
}
