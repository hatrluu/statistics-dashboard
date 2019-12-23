package com.cbi.dashboard.controllers.oam;

import java.util.Date;
import java.util.List;

import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cbi.dashboard.database.entity.OAMSession;
import com.cbi.dashboard.services.oam.SessionService;

@RestController
@RequestMapping("/sessions")
public class SessionController {
	private static Logger log = Logger.getLogger(SessionController.class.getName());

	@Autowired
	SessionService service;

    @RequestMapping(value="/total", method = RequestMethod.GET)
    public double getTotalAccessPolicies() {    	
		return service.getTotalSessions();
    }
    
    @RequestMapping(value="/users-today", method = RequestMethod.GET)
    public double getUserSessionsToday() {    	
		return service.getUserSessionsToday();
    }
    
    @RequestMapping(value="/today", method = RequestMethod.GET)
    public Date getToday() {    	
		return new Date();
    }
    
    @ResponseBody
    @RequestMapping(value="/all-sessions", method = RequestMethod.GET)
    public List<OAMSession> getAllSessions() {
    	log.severe("Received request to get all sessions");
		return service.getAllSessions();
    }
    
    @ResponseBody
    @RequestMapping(value="/one-sessions", method = RequestMethod.GET)
    public OAMSession getOneSessions() {
    	log.severe("Received request to get one session");
		return new OAMSession("", "", "", "", "", "", "", "", "", "", "");
    }
    
    @RequestMapping(value="/delete", method = RequestMethod.DELETE)
    public void deleteSession(@RequestBody String sessionID) {    	
    	log.severe("Received request to delete session with id " + sessionID);
//    	service.deleteSession(sessionID);
    }
}
