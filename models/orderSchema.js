const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    id: {
      type: String,
    },
    shopData: {
      shopName: {
        type: String,
      },
      shopId: {
        type: String,
      },
    },
    userData: {
      name: {
        type: String,
        required: [true, 'Set name for name'],
      },
      email: {
        type: String,
        required: [true, 'Set name for email'],
      },
      phone: {
        type: String,
        required: [true, 'Set name for phone'],
      },
      address: {
        type: String,
        required: [true, 'Set name for address'],
      },
    },
    orders: [
      {
        id: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          required: [true, 'Set count for dish'],
        },
        name: {
          type: String,
          required: [true, 'Set name for dish'],
        },
        price: {
          type: Number,
          required: [true, 'Set price for dish'],
        },
        url: { type: String },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Orders = model('orders', orderSchema);

module.exports = Orders;
