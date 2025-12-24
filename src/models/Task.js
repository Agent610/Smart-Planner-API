const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectID, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
