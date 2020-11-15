package com.vsta.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.StandardEnvironment;
import org.springframework.stereotype.Component;


/**
 * Represents the externally configured accepted email domain names.
 * Inputs comes from reload.properties in the following prefix: domain.
 * Consists of getter method to retrieve the accepted domains.
 */

@Component
public class Domain {

    /**
     * The list of accepted domains
     * specified by admins and retrieved
     * from reload.properties file.
     */
    private String[] acceptedDomains;

    @Autowired
    private StandardEnvironment environment;


    private static final String PREFIX = "domain.";

    /**
     * Gets the list of accepted domains
     * retrieved from reload.properties.
     * @return List of accepted domains.
     */
    public String[] getAcceptedDomains(){
        return environment.getProperty(PREFIX+"acceptedDomains", String[].class);
    }

}
