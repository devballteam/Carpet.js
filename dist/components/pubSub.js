!function(){"use strict";if("object"!=typeof window.PubSub)throw new Error("pubSub component requires pubSub library included (https://github.com/mroderick/PubSubJS)");var a={beforeInit:"Carpet.beforeInit",afterInit:"Carpet.afterInit"};Carpet.init=Carpet.advice.before(Carpet.init,function(){Carpet.message=window.PubSub,Carpet.message.publish(a.beforeInitialized)}),Carpet.init=Carpet.advice.after(Carpet.init,function(){Carpet.message.publish(a.afterInitialized)})}();