const isSignedMessage = (message) => Boolean(message) && message.signature !== undefined;

export { isSignedMessage };
