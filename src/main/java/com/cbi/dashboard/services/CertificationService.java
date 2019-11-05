package com.cbi.dashboard.services;

import org.springframework.stereotype.Component;

@Component
public class CertificationService extends Service {
	public boolean getCertificationEnabled() {
		String certificationOrAttestation = singleQuery("SELECT PTY_VALUE FROM PTY "
				+ "WHERE PTY_KEYWORD = 'OIM.ShowCertificationOrAttestation'", 
				String.class);
		String isIdentityAuditorEnabled = singleQuery("SELECT PTY_VALUE FROM PTY "
				+ "WHERE PTY_KEYWORD = 'OIG.IsIdentityAuditorEnabled'", 
				String.class);
		return (certificationOrAttestation != null && 
				certificationOrAttestation.equalsIgnoreCase("Certification") &&
				isIdentityAuditorEnabled != null &&
				isIdentityAuditorEnabled.equalsIgnoreCase("True"));
	}
}
