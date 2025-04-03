const express =require('express');
const router = express.Router();
const Order = require('../model/order'); 
const User = require('../model/user');   

router.post('/place-order', async (req, res) => {
    try {
        const { email, orderItems, shippingAddress } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required.' });
        }
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ message: 'Order items are required.' });
        }
        if (!shippingAddress) {
            return res.status(400).json({ message: 'Shipping address is required.' });
        }

        // Retrieve user _id from the user collection using the provided email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Create separate orders for each order item
        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new Order({
                user: user._id,
                orderItems: [item], // Each order contains a single item
                shippingAddress,
                totalAmount,
            });
            return order.save();
        });
        
        // If the user orders
        // {
        //     "email": "test@example.com",
        //     "orderItems": [
        //       { "product": "Laptop", "price": 50000, "quantity": 1 },
        //       { "product": "Phone", "price": 20000, "quantity": 2 }
        //     ],
        //     "shippingAddress": "123 Street, City"
        //   }


        // For each product, the order will look like:

        // {
        //     "user": "123abc", 
        //     "orderItems": [{ "product": "Laptop", "price": 50000, "quantity": 1 }],
        //     "shippingAddress": "123 Street, City",
        //     "totalAmount": 50000
        // }
        // Another separate order:


        // {
        //     "user": "123abc",
        //     "orderItems": [{ "product": "Phone", "price": 20000, "quantity": 2 }],
        //     "shippingAddress": "123 Street, City",
        //     "totalAmount": 40000
        // }
        

        const orders = await Promise.all(orderPromises);

        // Clear user's cart after placing orders (assuming a Cart model exists)
        await Cart.deleteMany({ user: user._id });

        res.status(201).json({ message: 'Orders placed and cart cleared successfully.', orders });

        //Responses:
        //{
        //     "message": "Orders placed and cart cleared successfully.",
        //     "orders": [
        //       { "user": "UserID", "product": "Laptop", "totalAmount": 50000 },
        //       { "user": "UserID", "product": "Phone", "totalAmount": 40000 }
        //     ]
        //}
          
    } catch (error) {
        console.error('Error placing orders:', error);
        res.status(500).json({ message: error.message });
    }

});
const handlePlaceOrder = async () => {
        try {
            
            const orderItems = cartItems.map(item => ({
                product: item._id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                image: item.images && item.images.length > 0 ? item.images[0] : '/default-avatar.png'
            }));

            // Construct payload with email, shippingAddress, and orderItems
            const payload = {
                email,
                shippingAddress: selectedAddress,
                orderItems,
            };

            // Send POST request to place orders
            const response = await axios.post('http://localhost:8000/api/v2/orders/place-order', payload);
            console.log('Orders placed successfully:', response.data);

            navigate('/order-success'); 
        } catch (err) {
            console.error('Error placing order:', err);
            setError(err.message || 'An unexpected error occurred while placing the order.');
        } finally {
            setLoading(false);
        }
    };

router.get('/my-orders', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: 'Email is required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const orders = await Order.find({ user: user._id });

        res.status(200).json({ orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: error.message });
    }
});
    router.patch('/cancel-order/:orderId', async (req, res) => {
        try {
            const { orderId } = req.params;
            const order = await Order.findById(orderId);
            console.log(order);
            if (!order) {
                return res.status(404).json({ message: 'Order not found.' });
            }
    
            order.orderStatus = 'Cancelled';
            await order.save();
    
            res.status(200).json({ message: 'Order cancelled successfully.', order });
        } catch (error) {
            console.error('Error cancelling order:', error);
            res.status(500).json({ message: error.message });
        }
});

module.exports = router;