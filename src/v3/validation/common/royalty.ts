import {z} from 'zod'
import {zEthAddress, zSubstrateAddress} from './ids'

export const zRoyalty = z.object({
  address: z.union([zEthAddress, zSubstrateAddress]),
  percent: z.number().min(0).max(100),
  isPrimaryOnly: z.boolean().optional().describe('If true, this royalty only applies to primary sales'),
})

export type IRoyalty = z.infer<typeof zRoyalty>
