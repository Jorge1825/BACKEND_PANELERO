import { Schema, model } from "mongoose";

const PayrollSchema = new Schema(
  {
    people: {
      type: Schema.Types.ObjectId,
      ref: "People",
      required: true,
    },
    typepay: {
      type: Schema.Types.ObjectId,
      ref: "Pay",
      required: true,
    },
    activity: {
      type: Schema.Types.ObjectId,
      ref: "ActivityExpenses",
      required: true,
    },
    farm: {
      type: Schema.Types.ObjectId,
      ref: "Farm",
      required: true,
    },
    worth: {
      type: Number,
      default: 0,
    },
    statuspay: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    //propiedad para crear la fecha de creacion y de actualizacion automaticamente
    timestamps: true,
  }
);
export default model("Payroll", PayrollSchema);
