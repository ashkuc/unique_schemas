import {z} from 'zod'
import {zAttributeDisplayType} from './attribute_display_type'

export const zAttribute = z.object({
  trait_type: z.string(),
  value: z.union([z.string(), z.number()]),
  display_type: zAttributeDisplayType.optional(),
}).describe('An attribute of an NFT.')

export type IAttribute = z.infer<typeof zAttribute>
