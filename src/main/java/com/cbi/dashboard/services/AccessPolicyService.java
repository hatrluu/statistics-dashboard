package com.cbi.dashboard.services;

public class AccessPolicyService extends Service {

	public double getTotalAccessPolicies() {
		return singleQuery("SELECT COUNT(*) FROM POL");
	}
	
	public double getAverageResourcePerAccessPolicy() {
		return singleQuery("SELECT COUNT(*) + COUNT(DISTINCT(OBJ_KEY)) FROM POC");
	}
}
