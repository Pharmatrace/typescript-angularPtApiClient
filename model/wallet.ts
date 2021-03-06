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


export interface Wallet { 
    /**
     * current balance
     */
    balance?: number;
    /**
     * wallet uuid
     */
    walletId?: string;
    /**
     * descriptive name of the wallet so user can identify it if s/he has multiple wallets
     */
    displayName?: string;
    /**
     * id of the wallet owner (normally an organization
     */
    ownerStakeholderId?: string;
}
