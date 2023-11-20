const exportedTopics = require('./exportFile');

// Print the topics
console.log('Topics:');
for (let i = 0; i < exportedTopics.length; i++) {
    console.log(i + 1, '.', exportedTopics[i]);
}
