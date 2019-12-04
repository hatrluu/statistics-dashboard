package com.cbi.dashboard.database.config;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.cbi.dashboard.database.entity.OAMSession;

public class OAMSessionRowMapper implements RowMapper<OAMSession> {

	@Override
	public OAMSession mapRow(ResultSet rs, int rowNum) throws SQLException {
		return new OAMSessionResultSetExtractor().extractData(rs);
	}
}
