package com.cbi.dashboard.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {
	
final static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;  
	
	@Override
	public double getTotalUsers() {
		return singleQuery("SELECT COUNT(*) FROM USR", "COUNT(*)");
	}

	@Override
	public double getTotalActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM USR WHERE USR_STATUS = 'Active'", "COUNT(*)");
	}

	@Override
	public double getPeakConcurrentLogins() {
		return 0;
	}
	
	public double getTotalApplicationsAssignedToActiveUser() {
		return singleQuery("SELECT COUNT(*) FROM OIU, APP_INSTANCE, USR "
				+ "WHERE OIU.APP_INSTANCE_KEY = APP_INSTANCE.APP_INSTANCE_KEY "
				+ "AND OIU.USR_KEY = USR.USR_KEY AND USR.USR_STATUS = 'Active'", "COUNT(*)");
	}

	@Override
	public double getAverageApplicationsPerActiveUser() {
		return getTotalApplicationsAssignedToActiveUser() / getTotalActiveUsers();
	}
	
	public double getTotalRolesAssignedToActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM USR, USG, UGP "
				+ "WHERE USR.USR_KEY = USG.USR_KEY AND USG.UGP_KEY = UGP.UGP_KEY "
				+ "AND USR.USR_STATUS = 'Active'", "COUNT(*)");
	}

	@Override
	public double getAverageRolesPerActiveUser() {
		return getTotalRolesAssignedToActiveUsers() / getTotalActiveUsers();
	}
	
	public double getTotalEntitlementsAssignedToActiveUsers() {
		return singleQuery("SELECT COUNT(*) FROM ENT_ASSIGN, USR "
				+ "WHERE ENT_ASSIGN.USR_KEY = USR.USR_KEY "
				+ "AND USR.USR_STATUS = 'Active'", "COUNT(*)");
	}

	@Override
	public double getAverageEntitlementsPerActiveUser() {
		return getTotalEntitlementsAssignedToActiveUsers() / getTotalActiveUsers();
	}
	
	private double singleQuery(String query, String columnName) {
		return jdbcTemplate.query(
                query, new Object[] { },
                (rs, rowNum) -> rs.getDouble(columnName)
        ).get(0);
	}
}
