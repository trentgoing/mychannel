const mongoose = require('mongoose');
let mongoURI = process.env.MONGOURI || 'mongodb://localhost/mychannel';
mongoose.connect(mongoURI, {useNewUrlParser: true});

let linkSchema = mongoose.Schema({
  url: String,
  creator: String,
  note: String,
  read: { type: String, defualt: false },
  updated_at: Date,
  title: String,
  xframe: Boolean,
  content: String,
});

const Link = mongoose.model('Link', linkSchema);

let save = (linkToSave) => {
  return Link.findOneAndUpdate(
    {
      url: linkToSave.url,
      creator: linkToSave.creator,
    },
    {
      url: linkToSave.url,
      note: linkToSave.note,
      creator: linkToSave.creator || 'trentgoing',
      read: false,
      updated_at: new Date(),
      title: linkToSave.title,
      xframe: linkToSave.xframe,
      content: linkToSave.content
    },
    {
      upsert: true,
      setDefaultsOnInsert: true
    }
  ).exec();
};

let fetch = () => {
  return Link.find({ read: false })
             .sort('-updated_at')
             .exec();
};

let deleteLink = (linkToDelete) => {
  console.log('In DB: ' + JSON.stringify(linkToDelete));
  return Link.findOneAndUpdate(
    {
      _id: linkToDelete._id
    },
    {
      read: true,
      updated_at: new Date()
    },
    {
      upsert: true,
    }
  ).exec();
};

module.exports.save = save;
module.exports.fetch = fetch;
module.exports.deleteLink = deleteLink;