package com.cbi.dashboard.config;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class StatisticsDashboardConfiguration {
	@Autowired
	private Environment env;

	@Primary
	@Bean(name = "oimDataSource", destroyMethod = "")
	public DataSource oimDataSource() throws NamingException{
	    return (DataSource) new InitialContext().lookup(
	    		env.getProperty("spring.oim.datasource.jndi-name"));
	}
	
	@Bean(name = "oamDataSource", destroyMethod = "")
	public DataSource oamDataSource() throws NamingException{
	    return (DataSource) new InitialContext().lookup(
	    		env.getProperty("spring.oam.datasource.jndi-name"));
	}
	
    @Autowired
	@Bean(name = "oimJdbcTemplate")
    public JdbcTemplate oimJdbcTemplate(@Qualifier("oimDataSource") DataSource oimDataSource) {
        return new JdbcTemplate(oimDataSource);
    }

    @Autowired
    @Bean(name = "oamJdbcTemplate")
    public JdbcTemplate oamJdbcTemplate(@Qualifier("oamDataSource") DataSource oamDataSource) {
        return new JdbcTemplate(oamDataSource);
    }
}
