package com.cbi.dashboard.database.entity;

public class OAMSession {
	private String sessionID;
	private String userID;
	private String identityDomain;
	private String sessionIndex;
	private String createTime;
	private String lastAccessTime;
	private String lastUpdateTime;
	private String expiryTime;
	private String lastCredValidTime;
	private String timeoutInterval;
	private String credTimeoutInterval;
	
	public OAMSession(String sessionID, String userID, String identityDomain, String sessionIndex, String createTime,
			String lastAccessTime, String lastUpdateTime, String expiryTime, String lastCredValidTime,
			String timeoutInterval, String credTimeoutInterval) {
		super();
		this.sessionID = sessionID;
		this.userID = userID;
		this.identityDomain = identityDomain;
		this.sessionIndex = sessionIndex;
		this.createTime = createTime;
		this.lastAccessTime = lastAccessTime;
		this.lastUpdateTime = lastUpdateTime;
		this.expiryTime = expiryTime;
		this.lastCredValidTime = lastCredValidTime;
		this.timeoutInterval = timeoutInterval;
		this.credTimeoutInterval = credTimeoutInterval;
	}

	public String getSessionID() {
		return sessionID;
	}

	public void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getIdentityDomain() {
		return identityDomain;
	}

	public void setIdentityDomain(String identityDomain) {
		this.identityDomain = identityDomain;
	}

	public String getSessionIndex() {
		return sessionIndex;
	}

	public void setSessionIndex(String sessionIndex) {
		this.sessionIndex = sessionIndex;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public String getLastAccessTime() {
		return lastAccessTime;
	}

	public void setLastAccessTime(String lastAccessTime) {
		this.lastAccessTime = lastAccessTime;
	}

	public String getLastUpdateTime() {
		return lastUpdateTime;
	}

	public void setLastUpdateTime(String lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}

	public String getExpiryTime() {
		return expiryTime;
	}

	public void setExpiryTime(String expiryTime) {
		this.expiryTime = expiryTime;
	}

	public String getLastCredValidTime() {
		return lastCredValidTime;
	}

	public void setLastCredValidTime(String lastCredValidTime) {
		this.lastCredValidTime = lastCredValidTime;
	}

	public String getTimeoutInterval() {
		return timeoutInterval;
	}

	public void setTimeoutInterval(String timeoutInterval) {
		this.timeoutInterval = timeoutInterval;
	}

	public String getCredTimeoutInterval() {
		return credTimeoutInterval;
	}

	public void setCredTimeoutInterval(String credTimeoutInterval) {
		this.credTimeoutInterval = credTimeoutInterval;
	}
	
	
}
