package com.cbi.dashboard.database.config;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import com.cbi.dashboard.database.entity.OAMSession;

public class OAMSessionResultSetExtractor implements ResultSetExtractor<OAMSession> {

	@Override
	public OAMSession extractData(ResultSet rs) throws SQLException, DataAccessException {
		return new OAMSession(rs.getString("SESSIONID"), rs.getString("USERID"), 
				rs.getString("IDENTITY_DOMAIN"), rs.getString("SESSION_INDEX"), 
				rs.getString("CREATE_TIME"), rs.getString("LAST_ACCESS_TIME"), 
				rs.getString("LAST_UPDATE_TIME"), rs.getString("EXPIRY_TIME"), 
				rs.getString("LAST_CRED_VALID_TIME"), rs.getString("TIMEOUT_INTERVAL"), 
				rs.getString("CRED_TIMEOUT_INTERVAL"));
	}

}
