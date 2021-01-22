import snoowrap from 'snoowrap';

export async function scrapeSubreddit(ticker) {
  const r = new snoowrap({
    userAgent: 'someRandomString',
    clientId: 'IHeLMCc-X2WBKg',
    clientSecret: 'h1I5TT0Wd624og_23PJnJpGvP3-fXg',
    refreshToken: '611187528180-nTdczFkmidkKlsL0gE0dPYOngsTFuw',
  });
  
  let subreddit = await r.getSubreddit('wallstreetbets').search({query: ticker, sort: 'comments'})
  let subredditComments = subreddit.map(post => post.id)
  
  //const getCommentTree = async (comments) => {
  //  return Promise.all(comments.map(async commentId => (await r.getSubmission(commentId)).expandReplies()))
  //}
//
  //subredditComments = getCommentTree(subredditComments)

  let commentTrees = []

  for (let i = 0; i < subredditComments.length; i++) {
  let commentTree = await r.getSubmission(subredditComments[i]).expandReplies({limit: 1})
  commentTrees.push(commentTree)
  }

  return commentTrees
}

export default scrapeSubreddit