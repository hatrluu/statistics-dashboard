package com.cbi.dashboard.services;

import org.springframework.stereotype.Component;

@Component
public class EntitlementService extends Service {
	public double getTotalEntitlements() {
		return singleQuery("SELECT COUNT(*) FROM ENT_LIST");
	}
}
