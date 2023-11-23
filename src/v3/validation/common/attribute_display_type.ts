import {z} from 'zod'

export const zAttributeDisplayType = z.enum([
  'string',
  'number',
  'date',
  'date_time',
  'url',
  'boost_number',
  'boost_percentage',
]).describe('The type of the attribute value. This field may be used to determine how to display the attribute.')

export type IAttributeDisplayType = z.infer<typeof zAttributeDisplayType>
