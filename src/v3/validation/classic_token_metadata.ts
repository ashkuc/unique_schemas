import {z} from 'zod'
import {zAttribute} from './common'

export const zClassicTokenMetadata = z.object({
  image: z.string().optional().describe(`This is the URL to the image of the item. Can be just about any type of image, and can be IPFS URLs or paths. We recommend using a 350 x 350 image.`),
  image_data: z.string().optional().describe(`Raw SVG image data, if you want to generate images on the fly (not recommended). Only use this if you're not including the image parameter.`),
  external_url: z.string().optional().describe(`Url to an external page that adds context to the item. This is a great place to include more about the item, such as its history or creation process.`),
  description: z.string().optional().describe(`A human readable description of the item. Markdown is supported.`),
  name: z.string().optional().describe(`Name of the item.`),
  attributes: z.array(zAttribute).describe(`These are the attributes for the item`).optional(),
  background_color: z.string().regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/).optional().describe(`Background color of the item. Must be a six-character hexadecimal without a pre-pended #.`),
  animation_url: z.string().optional().describe(`A URL to a video that can be used to show off or represent the item.`),
  youtube_url: z.string().optional().describe(`A URL to a YouTube video that can be used to show off or represent the item.`),
});

export type ClassicTokenSchema = z.infer<typeof zClassicTokenMetadata>

export const imageDataRefine = {
  fn: (data: ClassicTokenSchema): boolean => {
    if (data.image_data) return !!data.image

    return true
  },
  message: `Only use "image_data" you're not including the "image" parameter`,
}
