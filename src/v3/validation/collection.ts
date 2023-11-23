import {z} from 'zod'
import {
  zAttributeSchema,
  zCarbonOffset,
  zCollectionAddress,
  zCollectionId,
  zImageDetails,
  zLocalization,
  zRoyalty,
  zVersion,
} from './common'

export const zCollectionSchema = z.object({
  name: z.string(),
  description: z.string(),
  token_prefix: z.string(),

  version: zVersion.optional(),

  cover_image_url: z.string().optional(),
  cover_image_details: zImageDetails.optional(),

  attributes_schema: z.array(zAttributeSchema).optional(),

  onchain_fields: z.array(z.string()).optional(),

  related_collections: z.array(z.union([zCollectionId, zCollectionAddress])).optional(),

  royalties: z.array(zRoyalty).optional(),

  carbon_offsets: z.array(zCarbonOffset).optional(),

  locale: z.string().optional(),
  localization: zLocalization.optional(),
})
