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
 * @interface ProjectSettingsDesignButton
 */
export interface ProjectSettingsDesignButton {
    /**
     *
     * @type {string}
     * @memberof ProjectSettingsDesignButton
     */
    background?: string;
    /**
     *
     * @type {string}
     * @memberof ProjectSettingsDesignButton
     */
    fontColor?: string;
    /**
     *
     * @type {number}
     * @memberof ProjectSettingsDesignButton
     */
    paddingHeight?: number;
    /**
     *
     * @type {number}
     * @memberof ProjectSettingsDesignButton
     */
    paddingWidth?: number;
    /**
     *
     * @type {number}
     * @memberof ProjectSettingsDesignButton
     */
    radius?: number;
}
export declare function ProjectSettingsDesignButtonFromJSON(json: any): ProjectSettingsDesignButton;
export declare function ProjectSettingsDesignButtonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectSettingsDesignButton;
export declare function ProjectSettingsDesignButtonToJSON(value?: ProjectSettingsDesignButton | null): any;
