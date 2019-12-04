package com.cbi.dashboard.services.oim;

import org.springframework.stereotype.Component;

@Component
public class EntitlementService extends OIMService {
	public double getTotalEntitlements() {
		return singleQuery("SELECT COUNT(*) FROM ENT_LIST");
	}
}
