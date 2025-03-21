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
module.exports = router;