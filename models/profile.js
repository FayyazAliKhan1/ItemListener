const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: toString
  },
  website: {
    type: toString
  },
  location: {
    type: toString
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubUsername: {
    type: String
  },
  experience: [
    {
      title: {},
      company: {},
      location: {},
      from: {},
      to: {},
      current: {},
      description: {}
    }
  ],
  education: [
    {
      school: {
        type: String,

        required: true
      },

      degree: {
        type: String,

        required: true
      },

      fieldofstudy: {
        type: String,

        required: true
      },

      from: {
        type: Date,

        required: true
      },

      to: {
        type: Date
      },

      current: {
        type: Boolean,

        default: false
      },

      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },

    twitter: {
      type: String
    },

    facebook: {
      type: String
    },

    linkedin: {
      type: String
    },

    instagram: {
      type: String
    }
  },

  date: {
    type: Date,

    default: Date.now
  }
});
