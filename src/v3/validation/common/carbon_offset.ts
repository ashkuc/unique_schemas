import {z} from 'zod'
import {collectionIdRefine, zCollectionAddress, zCollectionId, zTokenId} from './ids'

export const zCarbonOffset = z.object({
  collection_id: zCollectionId.optional(),
  collection_address: zCollectionAddress.optional().describe('The address of the collection in hex format'),
  token_id: zTokenId,
  co2_g: z.number().optional(),
}).refine(
  collectionIdRefine.fn,
  collectionIdRefine.message
)

export type ICarbonOffset = z.infer<typeof zCarbonOffset>

