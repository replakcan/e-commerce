import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPreviousOrders } from '@/redux/actions/shoppingCartActions'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

const PreviousOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((store) => store.shoppingCart.prevOrders)
  const userToken = useSelector((store) => store.client.user.token)

  useEffect(() => {
    dispatch(fetchPreviousOrders(userToken))
  }, [dispatch, userToken])

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto h-min-lvh">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Your Previous Orders</h2>
      {orders.length ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Collapsible key={order.id} className="w-full">
              <Card>
                <CardHeader className="p-0">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between p-4 sm:p-6">
                      <CardTitle className="text-left text-base sm:text-lg">
                        Order #{order.id} - {new Date(order.order_date).toLocaleDateString()}
                      </CardTitle>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </Button>
                  </CollapsibleTrigger>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="mb-4 space-y-1">
                      <p className="text-sm font-medium">Total Price: ${order.price}</p>
                      <p className="text-sm text-muted-foreground">
                        Card Used: **** **** **** {String(order.card_no).slice(-4)}
                      </p>
                    </div>
                    <ScrollArea className="w-full">
                      <div className="space-y-4">
                        {order.products.map((product) => (
                          <div key={product.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b">
                            <img
                              src={product.images[0]?.url}
                              alt={product.name}
                              className="w-16 h-16 rounded-md object-cover"
                            />
                            <div className="flex-grow">
                              <h3 className="font-medium">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.description}</p>
                            </div>
                            <div className="flex justify-between w-full sm:w-auto gap-4">
                              <div className="text-sm">
                                <p>Quantity: {product.count}</p>
                                <p>Price: ${product.price.toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">You have no previous orders.</p>
      )}
    </div>
  )
}

export default PreviousOrders

