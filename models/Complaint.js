import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AmountSchema = new Schema({
  value: {
    type: Number,
    required: [true, "Item Price is required"]
  },
  currency: {
    type: String,
    required: [true, "Currency is required"]
  }
})

const TitleSchema = new Schema({
  sub: {
    type: String,
    required: [true, "item description is required"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "item category is required"],
    trim: true,
  }
})

const TransactionSchema = new Schema(
  {
   
    title: TitleSchema,
    registration_date: {
      type: Date,
      default: Date.now,
    },
    amount: AmountSchema
    ,
    role: {
      type: String,
      required: [true, "Role is required"]
    },
    status: {
      type: String,
      required: [true, "Transaction status is required"]
    }
  },
  { timestamps: true }
);

// The {timestamps: true} option creates a createdAt and updatedAt field on our models that contain timestamps which will get automatically updated when our model changes.


export default TransactionSchema;
// export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
