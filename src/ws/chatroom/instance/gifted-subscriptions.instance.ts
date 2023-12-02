import { cast } from '@deepkit/type'
import type { GiftedSubscriptionsEvent } from '../dto/gifted-subscriptions.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class GiftedSubscriptionsInstance extends BaseInstance<GiftedSubscriptionsEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<GiftedSubscriptionsEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise GiftedSubscriptionsInstance',
        cause: err,
      })
    }
  }
}
