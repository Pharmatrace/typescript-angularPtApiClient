/**
 * PharmaTrace Supply Chain Information Network API
 * The PharmaTrace SCIN API provides network members a resource and process oriented access to the blockchain backed market and inventory information. It represents a layer of abstraction above the Hyperledger network to facilitate a business focused development of clients and integration systems without the need to directly connect to Hyperledger nodes.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: api@pharmatrace.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Profile { 
    /**
     * First name of the PT network user.
     */
    firstName?: string;
    /**
     * Last name of the PT network user.
     */
    lastName?: string;
    /**
     * Email address
     */
    email?: string;
    /**
     * Twitter name
     */
    twitterName?: string;
    /**
     * LinkedIn name
     */
    linkedinName?: string;
    /**
     * Facebook name
     */
    facebookName?: string;
    /**
     * Image URL
     */
    picture?: string;
    /**
     * the PT network member that the user/profile is assigned to.
     */
    stakeholderId?: string;
    /**
     * true if the user is currently active. Inactive users will be anonymized but not deleted to maintain integrity of transaction history
     */
    active?: boolean;
}

