import {z} from 'zod'
import {
  zCarbonOffset,
  zLocalization,
  zRoyalty,
  zVersion,
  zImageDetails,
  zMediaDetails,
  zTokenImageStackingOptions,
  zAdditionalMedia,
  zBundledImageStackingOptions,
} from './common'
import {zClassicTokenMetadata} from './classic_token'


const zUniqueTokenSchema = z.object({
  version: zVersion,
  onchain_fields: z.array(z.string()).optional(),

  created_by: z.string().optional(),
  image_url: z.string().optional(),
  image_details: zImageDetails.optional(),

  animation_details: zMediaDetails.optional(),

  additional_media: z.array(zAdditionalMedia).optional(),

  royalties: z.array(zRoyalty).optional(),
  image_stacking: zTokenImageStackingOptions.optional(),
  bundled_image_stacking: z.array(zBundledImageStackingOptions).optional(),

  carbon_offsets: z.array(zCarbonOffset).optional(),

  locale: z.string().optional(),
  localization: zLocalization.optional(),
})

const refineImageUrl = (data: { image_url?: string, image?: string }) => {
  if (data.image_url && data.image) {
    return data.image === data.image_url
  }

  return true
}

export const zTokenSchema = zClassicTokenMetadata.merge(zUniqueTokenSchema)
  .refine(refineImageUrl, '"image" and "image_url" must be the same if both are present' )

export type ITokenSchema = z.infer<typeof zTokenSchema>
