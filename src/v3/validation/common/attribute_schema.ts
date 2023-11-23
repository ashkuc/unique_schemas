import {z} from 'zod'
import {zAttributeDisplayType} from './attribute_display_type'

export const zAttributeSchema = z.object({
  trait_type: z.string(),
  is_array: z.boolean().optional(),
  is_required: z.boolean().optional(),
  display_type: zAttributeDisplayType.optional(),
  values: z.union([z.array(z.string()), z.array(z.number())]).optional(),
}).describe('Schema for an attribute of an NFT.')
