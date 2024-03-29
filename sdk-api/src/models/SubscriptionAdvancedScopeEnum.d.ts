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
/**
 *
 * @export
 * @enum {string}
 */
export declare enum SubscriptionAdvancedScopeEnum {
    ConnectAndSign = "connect_and_sign",
    MultiWallet = "multi_wallet",
    ApiTokens = "api_tokens",
    InfoCapture = "info_capture",
    AccessList = "access_list",
    Chainalysis = "chainalysis",
    AnalyticsUsers = "analytics_users",
    AnalyticsVisits = "analytics_visits",
    Captcha = "captcha",
    SigninWithEmail = "signin_with_email",
    Gating = "gating",
    AccountAbstraction = "account_abstraction",
    Webhooks = "webhooks"
}
export declare function SubscriptionAdvancedScopeEnumFromJSON(json: any): SubscriptionAdvancedScopeEnum;
export declare function SubscriptionAdvancedScopeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAdvancedScopeEnum;
export declare function SubscriptionAdvancedScopeEnumToJSON(value?: SubscriptionAdvancedScopeEnum | null): any;
