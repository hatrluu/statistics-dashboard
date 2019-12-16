package com.cbi.dashboard.services.oam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cbi.dashboard.database.OAMSessionDAO;
import com.cbi.dashboard.database.entity.OAMSession;

@Component
public class SessionService extends OAMService {
	@Autowired
	OAMSessionDAO oamSessionDAO;
	
	public double getTotalSessions() {
		return singleQuery("SELECT COUNT(*) FROM OAM_SESSION");
	}
	
	public double getUserSessionsToday() {
		return singleQuery("SELECT * FROM OAM_SESSION "
				+ "WHERE LAST_ACCESS_TIME > SYSDATE - 1 "
				+ "AND TIMEOUT_INTERVAL > 0");
	}
	
	public List<OAMSession> getAllSessions() {
		return oamSessionDAO.getAllSessions();
	}
	
	public void deleteSession(String sessionID) {
//		oamSessionDAO.delete(sessionID);
	}
}
