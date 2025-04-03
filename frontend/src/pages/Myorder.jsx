import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Navbar';

const Myorder = () => {
    const [orders, setOrders] = useState([]);
    const email = 'dwefwe@GVV.COM';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchOrders = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await axios.get('http://localhost:8000/api/v2/order/my-orders', {
                params: { email: email },
            });
            setOrders(response.data.orders);
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching orders');
        } finally {
            setLoading(false);
        }
    };

    const cancelOrder = async (orderId) => {
        try {
            const response = await axios.patch(`http://localhost:8000/api/v2/order/cancel-order/${orderId}`);
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === orderId ? { ...order, status: response.data.order.status } : order
                )
            );
            fetchOrders();
        } catch (err) {
            console.error(err);
            alert(err.message || 'Error cancelling order');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Nav />
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-extrabold text-center mb-10">My Orders</h1>

                    {loading && (
                        <p className="text-center text-blue-500 text-lg">Loading orders...</p>
                    )}
                    {error && (
                        <p className="text-center text-red-500 text-lg">{error}</p>
                    )}
           
                    {/* {
                        "_id": "6601f2b6e9b7a2c3d4e5f124",
                        "user": "65a1d2e3f4g5h6i7j8k9l012",
                        "orderItems": [
                            {
                            "product": "65a3f1d5e9b7a2c3d4e5f679",
                            "name": "Phone",
                            "quantity": 2,
                            "price": 20000,
                            "image": "https://example.com/phone.jpg"
                            }
                        ],
                        "shippingAddress": "123 Street, City",
                        "totalAmount": 40000,
                        "orderStatus":"Processing",
                        "createdAt": "2024-03-20T10:30:10Z"
                    } */}

                    {orders.length > 0 ? (
                        <div className="grid gap-8">
                            {orders.map((order) => (
                                <div
                                    key={order._id}
                                    className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105"
                                >
                                    <div className="flex justify-between items-center border-b pb-3 mb-4">
                                        <p className="text-lg font-semibold">
                                            Order ID: <span className="font-light text-sm">{order._id}</span>
                                        </p>
                                        <p className="text-2xl font-bold text-green-600">
                                            ${order.totalAmount}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
                                        <div className="text-gray-700 ml-4 space-y-1">
                                            <p>
                                                {order.shippingAddress.address1}
                                                {order.shippingAddress.address2 &&
                                                     `,${order.shippingAddress.address2}`}
                                            </p>
                                            <p>
                                                {order.shippingAddress.city}, {order.shippingAddress.zipCode}
                                            </p>
                                            <p>{order.shippingAddress.country}</p>
                                            <p className="italic">
                                                {order.shippingAddress.addressType}
                                            </p>
                                        </div>
                                    </div> 

                                    <div className="mb-4">
                                        <h2 className="text-xl font-semibold mb-2">Items</h2>
                                        <ul className="list-disc ml-8 space-y-1 text-gray-700">
                                            {order.orderItems.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} - Qty: {item.quantity} - ${item.price}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {order.orderStatus !== 'Cancelled' && (
                                        <button
                                            onClick={() => cancelOrder(order._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                                        >
                                            Cancel Order
                                        </button>
                                    )}
                                    {order.orderStatus === 'Cancelled' && (
                                        <p className="text-red-600 font-semibold">Order Cancelled</p>
                                    )}

                                   
                                </div>
                            ))}
                        </div>
                    ) : (
                        !loading && (
                            <p className="text-center text-gray-500 mt-10 text-lg">
                                No orders found.
                            </p>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Myorder;