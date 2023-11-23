import {z} from 'zod'
import {zImageDetails} from './image_details'
import {zCollectionAddress, zCollectionId, zTokenId} from './ids'

export const zImageStackingOptionsBase = z.object({
  tag: z.string().optional(),

  layer: z.number().optional(),
  order_in_layer: z.number().optional(),

  offset_x: z.number().optional(),
  offset_y: z.number().optional(),
  scale_x: z.number().optional(),
  scale_y: z.number().optional(),
  rotation: z.number().optional().describe('In degrees'),
  opacity: z.number().optional(),
})

export const zTokenImageStackingOptions = zImageStackingOptionsBase.extend({
  image_url: z.string().optional(),
  image_details: zImageDetails.optional(),
})

export const zBundledImageStackingOptions = zImageStackingOptionsBase.extend({
  collectionId: zCollectionId.optional(),
  collectionAddress: zCollectionAddress.optional(),
  tokenId: zTokenId.optional(),
});
