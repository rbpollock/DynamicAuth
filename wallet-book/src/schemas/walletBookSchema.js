import { z } from 'zod';
import { walletSchema } from './walletSchema.js';
import { walletGroupSchema } from './walletGroup.js';

z.record(z.string(), walletSchema);
const walletBookSchema = z.preprocess((val) => val, z.object({
    groups: z.record(z.string(), walletGroupSchema),
    wallets: z.record(z.string(), walletSchema),
}));
z.record(z.string(), walletGroupSchema);

export { walletBookSchema };
