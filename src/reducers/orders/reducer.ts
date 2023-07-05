import { produce } from 'immer'
import { ActionTypes } from './actions'

interface Coffee {
  id: string
  quantity: number
}

export interface Order {
  coffees: Coffee[]
  totalQuantity: number
}

export interface OrderPayload extends Order {
  totalPrice: number
  deliveryCost: number
  totalPriceWithDelivery: number
  address: {
    cep: string
    street: string
    number: string
    complement: undefined | string
    neighborhood: string
    city: string
    state: string
  }
  paymentMethod: string
}

type OrderState = Order

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const { coffeeId, quantity } = action.payload

      const foundCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      return produce(state, (draft) => {
        if (foundCoffeeIndex >= 0) {
          draft.coffees[foundCoffeeIndex].quantity += quantity
        } else {
          const newCoffee: Coffee = {
            id: coffeeId,
            quantity,
          }

          draft.coffees.push(newCoffee)
        }

        draft.totalQuantity += quantity
      })
    }

    case ActionTypes.MODIFY_COFFEE_QUANTITY: {
      const { modifyAction, coffeeId } = action.payload

      const foundCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      return produce(state, (draft) => {
        if (modifyAction === 'increase') {
          draft.coffees[foundCoffeeIndex].quantity += 1
          draft.totalQuantity += 1
        } else {
          draft.coffees[foundCoffeeIndex].quantity -= 1
          draft.totalQuantity -= 1
        }
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const { coffeeId } = action.payload

      const foundCoffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      const { quantity } = state.coffees[foundCoffeeIndex]

      return produce(state, (draft) => {
        draft.totalQuantity -= quantity

        draft.coffees.splice(foundCoffeeIndex, 1)
      })
    }

    case ActionTypes.FINISH_ORDER: {
      const { orderPayload } = action.payload

      console.log(orderPayload)

      return produce(state, (draft) => {
        draft.totalQuantity = 0

        draft.coffees = []
      })
    }

    default:
      return state
  }
}