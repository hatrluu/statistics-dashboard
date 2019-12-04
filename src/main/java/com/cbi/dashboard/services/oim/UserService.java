package com.cbi.dashboard.services.oim;

import org.springframework.stereotype.Component;

@Component
public class UserService extends OIMService {
	
	public double getTotalUsers() {
		return singleQuery("SELECT COUNT(*) FROM USR");
	}

	public double getTotalActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM USR WHERE USR_STATUS = 'Active'");
	}

	public double getPeakConcurrentLogins() {
		return 0;
	}
	
	private double getTotalApplicationsAssignedToActiveUser() {
		return singleQuery("SELECT COUNT(*) FROM OIU, APP_INSTANCE, USR "
				+ "WHERE OIU.APP_INSTANCE_KEY = APP_INSTANCE.APP_INSTANCE_KEY "
				+ "AND OIU.USR_KEY = USR.USR_KEY AND USR.USR_STATUS = 'Active'");
	}

	public double getAverageApplicationsPerActiveUser() {
		return getTotalApplicationsAssignedToActiveUser() / getTotalActiveUsers();
	}
	
	private double getTotalRolesAssignedToActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM USR, USG, UGP "
				+ "WHERE USR.USR_KEY = USG.USR_KEY AND USG.UGP_KEY = UGP.UGP_KEY "
				+ "AND USR.USR_STATUS = 'Active'");
	}

	public double getAverageRolesPerActiveUser() {
		return getTotalRolesAssignedToActiveUsers() / getTotalActiveUsers();
	}
	
	private double getTotalEntitlementsAssignedToActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM ENT_ASSIGN, USR "
				+ "WHERE ENT_ASSIGN.USR_KEY = USR.USR_KEY "
				+ "AND USR.USR_STATUS = 'Active'");
	}

	public double getAverageEntitlementsPerActiveUser() {
		return getTotalEntitlementsAssignedToActiveUsers() / getTotalActiveUsers();
	}
}
