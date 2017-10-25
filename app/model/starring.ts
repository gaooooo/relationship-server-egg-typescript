import { Application } from 'egg';
import { Document, Schema } from 'mongoose';

/**
 * 点赞模型
 */
export default (app: Application) => {
  const mongoose = app.mongoose;

  const starringSchema = new mongoose.Schema({
    stargazer: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    stargazerOpenId: { type: Schema.Types.String },
    stargazerRealName: { type: Schema.Types.String },
    stargazerNickName: { type: Schema.Types.String },
    stargazerAvatar: { type: Schema.Types.String },
    starred: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    starredOpenId: { type: Schema.Types.String },
    starredRealName: { type: Schema.Types.String },
    starredNickName: { type: Schema.Types.String },
    starredAvatar: { type: Schema.Types.String },
    createAt: { type: Schema.Types.Date, default: Date.now },
  });
  starringSchema.index({ stargazer: 1, starred: 1 });

  return mongoose.model<Relationship.Starring & Document>('Starring', starringSchema);
};
