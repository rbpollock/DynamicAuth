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
export declare enum SocialSignInProviderEnum {
    Apple = "apple",
    Bitbucket = "bitbucket",
    Discord = "discord",
    Facebook = "facebook",
    Github = "github",
    Gitlab = "gitlab",
    Google = "google",
    Instagram = "instagram",
    Linkedin = "linkedin",
    Microsoft = "microsoft",
    Twitch = "twitch",
    Twitter = "twitter"
}
export declare function SocialSignInProviderEnumFromJSON(json: any): SocialSignInProviderEnum;
export declare function SocialSignInProviderEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialSignInProviderEnum;
export declare function SocialSignInProviderEnumToJSON(value?: SocialSignInProviderEnum | null): any;
