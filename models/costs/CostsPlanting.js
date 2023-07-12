import { Schema, model } from "mongoose";

const CostsPlantingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    farm: {
      type: Schema.Types.ObjectId,
      ref: "Farm",
      required: true,
    },
    lot: {
      type: Schema.Types.ObjectId,
      ref: "Lot",
      required: true,
    },
    worth: {
      type: Number,
      default: 0,
    },
    spent: {
      type: Schema.Types.ObjectId,
      ref: "Spent",
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  {
    //propiedad para crear la fecha de creacion y de actualizacion automaticamente
    timestamps: true,
  }
);
export default model("CostsPlanting", CostsPlantingSchema);
