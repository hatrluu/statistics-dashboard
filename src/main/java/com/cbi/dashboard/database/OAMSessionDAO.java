package com.cbi.dashboard.database;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cbi.dashboard.database.config.OAMSessionRowMapper;
import com.cbi.dashboard.database.entity.OAMSession;

@Component
public class OAMSessionDAO {
	@Autowired
	@Qualifier("oamJdbcTemplate")
	protected JdbcTemplate oamJdbcTemplate;
	
	public List<OAMSession> getAllSessions() {
        return oamJdbcTemplate.query("SELECT * FROM OAM_SESSION WHERE TIMEOUT_INTERVAL != 0",
                new OAMSessionRowMapper());
    }
	
	public void delete(String sessionID) {
        oamJdbcTemplate.update("DELETE FROM OAM_SESSION WHERE SESSIONID = ? AND TIMEOUT_INTERVAL != 0",
                new Object[] { sessionID });
    }
}
