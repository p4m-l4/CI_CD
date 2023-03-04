import mongoose from 'mongoose';

const calcSchema = new mongoose.Schema(
  {
    result: String,
  },
  { timestamps: true }
);

export default mongoose.model('Calc', calcSchema);
