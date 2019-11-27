const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  adhaarNo: {
    type: Number,
    required: true,
    min: [12, "Add valid 12 digit number"]
  },
  phone: {
    type: Number,
    required: true,
    min: [10, "Add valid 10 digits number"]
  },
  address: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
