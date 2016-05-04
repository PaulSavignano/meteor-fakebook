Meteor.publish('postlist', function() {
  return Posts.find({'user._id': {$in: friends}}, {sort: {createdAt: -1}, limit: limit});
});
