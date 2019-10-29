package com.cbi.dashboard.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ApplicationService extends Service {
	
	@Autowired
	UserService userService;
	
	@Autowired
	EntitlementService entitlementService;
	
	public double getTotalApplications() {
		return singleQuery("SELECT COUNT(*) FROM APP_INSTANCE");
	}
	
	public double maxActiveUsersInTargetApplication() {
		return singleQuery("SELECT C AS \"COUNT(*)\" FROM "
				+ "(SELECT COUNT(*) AS C FROM OIU, APP_INSTANCE, USR "
				+ "WHERE OIU.APP_INSTANCE_KEY = APP_INSTANCE.APP_INSTANCE_KEY "
				+ "AND OIU.USR_KEY = USR.USR_KEY AND USR.USR_STATUS = 'Active' "
				+ "GROUP BY APP_INSTANCE.APP_INSTANCE_DISPLAY_NAME ORDER BY 1 DESC) "
				+ "WHERE ROWNUM = 1");
	}
	
	public double getAverageEntitlementsPerApplication() {
		return entitlementService.getTotalEntitlements() / getTotalApplications();
	}
	
	private double totalApplicationsAssignedToActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM OIU, APP_INSTANCE, USR "
				+ "WHERE OIU.APP_INSTANCE_KEY = APP_INSTANCE.APP_INSTANCE_KEY "
				+ "AND OIU.USR_KEY = USR.USR_KEY AND USR.USR_STATUS = 'Active'");
	}
	
	public double averageActiveUsersInTargetApplications() {
		return totalApplicationsAssignedToActiveUsers() / getTotalApplications();
	}
}
