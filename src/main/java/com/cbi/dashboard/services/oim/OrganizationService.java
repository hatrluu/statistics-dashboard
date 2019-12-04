package com.cbi.dashboard.services.oim;

import org.springframework.stereotype.Component;

@Component
public class OrganizationService extends OIMService {
	public double getTotalOrganizations() {
		return singleQuery("SELECT COUNT(*) FROM ACT");
	}
}
