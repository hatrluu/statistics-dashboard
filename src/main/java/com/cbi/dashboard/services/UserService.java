package com.cbi.dashboard.services;

public interface UserService {
    public double getTotalUsers();
    public double getTotalActiveUsers();
    public double getPeakConcurrentLogins();
    public double getAverageApplicationsPerActiveUser();
    public double getAverageRolesPerActiveUser();
    public double getAverageEntitlementsPerActiveUser();
}
