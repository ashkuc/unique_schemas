import {z} from 'zod'

export const zCollectionId = z.number().min(1).max((2 ** 32) - 1)

export const zTokenId = z.number().min(1).max((2 ** 32) - 1)

export const zEthAddress = z.string().regex(/^0x[a-fA-F0-9]{40}$/)

// todo - use utils validation
export const zSubstrateAddress = z.string()

export const zCollectionAddress = zEthAddress

export const collectionIdRefine = {
  fn: (value: {collection_id?: number, collection_address?: string}) => {
    return !!value.collection_id || !!value.collection_address
  },
  message: '"collection_id" or "collection_address" must be provided',
}


