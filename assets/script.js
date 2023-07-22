var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function ListTopics()
{
    for (var i = 0; i<topics.length; i++)
    {
        console.log(topics[i]);
    }
}

function SelectTopic(topicNo)
{
    if (topicNo < topics.length && topicNo >= 0)
    {
        console.log(topics[topicNo]);
    }
        
    else{
        console.log('Please try again!');
    }
}
function RandomTopic()
{
    var randomTopic = topics[Math.floor(Math.random() * topics.length)];
    console.log("Let's study " + randomTopic);
}
console.log('Here are the topics we learned through prework:');
ListTopics();
console.log('We are choosing topic with array ID 2 here:');
SelectTopic(2);
console.log('Here is a random topic, chosen just now:');
RandomTopic();