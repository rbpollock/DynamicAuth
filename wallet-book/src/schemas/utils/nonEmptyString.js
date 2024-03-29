import { z } from 'zod';

/**
 * A zod type to ensure a string is not empty
 */
const nonEmptyString = z.preprocess((val) => (val ? val : undefined), z.string().optional());

export { nonEmptyString };
