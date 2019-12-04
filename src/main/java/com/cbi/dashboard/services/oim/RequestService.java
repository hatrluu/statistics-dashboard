package com.cbi.dashboard.services.oim;

import org.springframework.stereotype.Component;

@Component
public class RequestService extends OIMService {
	public double getSelfServiceOperationsPerDay() {
		return 0; //TODO
	}
	
	public double getAdminOperationsPerDay() {
		return 0; //TODO
	}
	
	public double getAverageRequestsPerDay() {
		return singleQuery("SELECT COUNT(*)/(MAX(REQUEST_END_DATE) - "
				+ "MIN(REQUEST_END_DATE)) FROM REQUEST");
	}
	
	public double getAverageApprovalsPerDay() {
		return singleQuery("SELECT (SELECT COUNT(*) FROM REQUEST "
				+ "WHERE REQUEST_STATUS = 'Request Completed') / "
				+ "(SELECT MAX(REQUEST_END_DATE) - MIN(REQUEST_END_DATE) "
				+ "FROM REQUEST) FROM DUAL");
	}
}
