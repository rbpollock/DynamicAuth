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
import { ExportCreateRequestFilter } from './ExportCreateRequestFilter';
import { ExportFormatEnum } from './ExportFormatEnum';
import { ExportModelEnum } from './ExportModelEnum';
import { ExportStatusEnum } from './ExportStatusEnum';
/**
 *
 * @export
 * @interface Export
 */
export interface Export {
    /**
     *
     * @type {string}
     * @memberof Export
     */
    id: string;
    /**
     *
     * @type {ExportFormatEnum}
     * @memberof Export
     */
    format: ExportFormatEnum;
    /**
     *
     * @type {ExportModelEnum}
     * @memberof Export
     */
    model: ExportModelEnum;
    /**
     *
     * @type {ExportStatusEnum}
     * @memberof Export
     */
    status: ExportStatusEnum;
    /**
     *
     * @type {ExportCreateRequestFilter}
     * @memberof Export
     */
    filter: ExportCreateRequestFilter;
    /**
     *
     * @type {Date}
     * @memberof Export
     */
    createdAt: Date;
    /**
     *
     * @type {Date}
     * @memberof Export
     */
    startedAt?: Date | null;
    /**
     *
     * @type {Date}
     * @memberof Export
     */
    completedAt?: Date | null;
    /**
     *
     * @type {string}
     * @memberof Export
     */
    downloadUrl?: string;
    /**
     * When defined, this is the error message and stack trace received when attempting to process the export.
     * @type {string}
     * @memberof Export
     */
    error?: string;
}
export declare function ExportFromJSON(json: any): Export;
export declare function ExportFromJSONTyped(json: any, ignoreDiscriminator: boolean): Export;
export declare function ExportToJSON(value?: Export | null): any;
