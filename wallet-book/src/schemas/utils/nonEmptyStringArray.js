import { z } from 'zod';

/**
 * A zod type to ensure an array is not empty
 */
const nonEmptyStringArray = z.preprocess((val) => (Array.isArray(val) && val.length > 0 ? val : undefined), z.array(z.string()).optional());

export { nonEmptyStringArray };
