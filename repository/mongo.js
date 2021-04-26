import mongoose from 'mongoose';
import env from '../config/env.js'

const uri = env.MONGO

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

export default mongoose