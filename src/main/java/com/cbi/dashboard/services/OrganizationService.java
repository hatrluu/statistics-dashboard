package com.cbi.dashboard.services;

public class OrganizationService extends Service {
	public double getTotalOrganizations() {
		return singleQuery("SELECT COUNT(*) FROM ACT");
	}
}
