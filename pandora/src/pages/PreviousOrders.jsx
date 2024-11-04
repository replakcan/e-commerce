import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPreviousOrders } from '@/redux/actions/shoppingCartActions';
import CollapsiblePanel from '@/components/CollapsablePanel';

const PreviousOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((store) => store.shoppingCart.prevOrders);
    const userToken = useSelector((store) => store.client.user.token);

    useEffect(() => {
        dispatch(fetchPreviousOrders(userToken));
    }, [dispatch, userToken]);

    return (
        <div className="previous-orders p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Previous Orders</h2>
            {orders.length ? (
                <div className="orders-table space-y-4">
                    {orders.map(order => (
                        <CollapsiblePanel 
                            key={order.id} 
                            title={`Order #${order.id} - ${new Date(order.order_date).toLocaleDateString()}`}
                            className="border border-gray-200 rounded-lg"
                        >
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="mb-2 text-gray-600"><strong>Total Price:</strong> ${order.price}</p>
                                <p className="mb-4 text-gray-600"><strong>Card Used:</strong> **** **** **** {String(order.card_no).slice(-4)}</p>
                                <div className="order-details">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="border-b bg-gray-100">
                                                <th className="py-2 px-4 text-left text-gray-700">Product Image</th>
                                                <th className="py-2 px-4 text-left text-gray-700">Product Name</th>
                                                <th className="py-2 px-4 text-left text-gray-700">Description</th>
                                                <th className="py-2 px-4 text-left text-gray-700">Quantity</th>
                                                <th className="py-2 px-4 text-left text-gray-700">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.products.map(product => (
                                                <tr key={product.id} className="border-b hover:bg-gray-50">
                                                    <td className="py-2 px-4">
                                                        <img 
                                                            src={product.images[0]?.url} 
                                                            alt={product.name} 
                                                            className="w-12 h-12 rounded-md"
                                                        />
                                                    </td>
                                                    <td className="py-2 px-4 text-gray-800">{product.name}</td>
                                                    <td className="py-2 px-4 text-gray-600">{product.description}</td>
                                                    <td className="py-2 px-4 text-center text-gray-800">{product.count}</td>
                                                    <td className="py-2 px-4 text-gray-800">${product.price.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CollapsiblePanel>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">You have no previous orders.</p>
            )}
        </div>
    );
};

export default PreviousOrders;
