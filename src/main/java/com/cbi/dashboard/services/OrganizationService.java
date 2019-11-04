package com.cbi.dashboard.services;

import org.springframework.stereotype.Component;

@Component
public class OrganizationService extends Service {
	public double getTotalOrganizations() {
		return singleQuery("SELECT COUNT(*) FROM ACT");
	}
}
