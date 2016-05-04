Meteor.publish('comments', function() {
  return Comments.find({post: postid}, {sort: {createdOn: -1}});
});
