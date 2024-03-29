/**
 * Dashboard API
 * Dashboard API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
/**
 *
 */
export declare class ExchangeRatesApi extends runtime.BaseAPI {
    /**
     * Health check endpoint to check for uptime of API.
     */
    getExchangeRatesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>>;
    /**
     * Health check endpoint to check for uptime of API.
     */
    getExchangeRates(initOverrides?: RequestInit): Promise<object>;
    /**
     * Options call for this endpoint
     */
    getExchangeRatesOptionsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Options call for this endpoint
     */
    getExchangeRatesOptions(initOverrides?: RequestInit): Promise<void>;
}
