const { test, expect } = require("@jest/globals");

const User = require("./user");
const Football = require("./football");
const Tennis = require("./tennis");
const Rugby = require("./rugby");
const typeOfPosts = require("./app")
const footballPosts = typeOfPosts.footballPosts;
const tennisPosts = typeOfPosts.tennisPosts;
const rugbyPosts = typeOfPosts.rugbyPosts;

const user = new User('dan');
const football = new Football('Football');
const tennis = new Tennis('Tennis');
const rugby = new Rugby('Rugby');

test('the forum pages properties are getting set correctly', () => {
    expect(football.title).toBe('Football');
    expect(tennis.title).toBe('Tennis');
    expect(rugby.title).toBe('Rugby');
});

test('create post function creates new post', () => {
    expect(footballPosts[0])
    .toEqual({title: 'WHU v MU', date: '20/09/21', author: 'dan', text: 'man u beat west ham'});
    expect(footballPosts[1])
    .toEqual({title: 'who is the GOAT', date: '20/09/21', author: 'dan', options: ['ronaldo', 'messi', 'pele', 'maradona']})

    expect(tennisPosts[0])
    .toEqual({title: 'US open', date: '20/09/21', author: 'dan', text: 'emma wins'});

    expect(rugbyPosts[0])
    .toEqual({title: 'Leicester v Exeter', date: '20/09/21', author: 'dan', text: 'Leicester tigers beat Exeter'});
});

test('create comment function creates new comment', () => {
    expect(footballPosts[0].createComment('20/09/21', 'dan', 'nice stuff'))
    .toEqual({date: '20/09/21', author: 'dan', text: 'nice stuff'});

    expect(tennisPosts[0].createComment('20/09/21', 'dan', 'yayyyy'))
    .toEqual({date: '20/09/21', author: 'dan', text: 'yayyyy'});

    expect(rugbyPosts[0].createComment('20/09/21', 'dan', 'cool post'))
    .toEqual({date: '20/09/21', author: 'dan', text: 'cool post'});
});

test.skip('create post function pushes new post into posts array', () => {
    
});

test.skip('create post function pushes new post into posts array', () => {
    
});

test('User username property is getting set correctly', () => {
    expect(user.username).toBe('dan');
});
