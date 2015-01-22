class MessageLog {
  constructor() {
    this.channelUserMessageCount = {};
  }

  logMessage(message) {
    if (!this.channelUserMessageCount[message.channel]) {
      this.channelUserMessageCount[message.channel] = {};
    }

    var userMessageCount = this.channelUserMessageCount[message.channel];

    if (!userMessageCount[message.user]) {
      userMessageCount[message.user] = 0;
    }

    userMessageCount[message.user]++;
  }

  getMessageCount(channel, user) {
    return this.channelUserMessageCount[channel][user];
  }
}

module.exports = MessageLog;
