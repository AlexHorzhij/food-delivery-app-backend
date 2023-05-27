const { Schema, model } = require('mongoose');

const dishesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for dish'],
    },
    dishes: [
      {
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

const Dishes = model('shops', dishesSchema);

module.exports = Dishes;
