const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  childName: {
    type: String
  },
  age: {
    type: Number
  },
  img: {
    type: String
  },
  details: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  city: {
    type: String
  },
  status: [
    {
      missing: {
        type: String
      },
      found: {
        type: String
      },
      sighted: {
        type: String
      }
    }
  ],
  gaurdian: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = ChildProfile = mongoose.model(
  "childprofile",
  ChildProfileSchema
);
