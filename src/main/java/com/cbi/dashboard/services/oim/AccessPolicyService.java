package com.cbi.dashboard.services.oim;

import org.springframework.stereotype.Component;

@Component
public class AccessPolicyService extends OIMService {

	public double getTotalAccessPolicies() {
		return singleQuery("SELECT COUNT(*) FROM POL");
	}
	
	public double getAverageResourcePerAccessPolicy() {
		return singleQuery("SELECT COUNT(*) + COUNT(DISTINCT(OBJ_KEY)) FROM POC");
	}
}
