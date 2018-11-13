module.exports = {


  friendlyName: 'Add',


  description: 'Add log entry.',


  inputs: {
    logId: { type: `number`, required: true },
    hours: { type: `number`, required: true },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    await LogEntry.create({
        log: inputs.logId, 
        hours: inputs.hours,
    });
    return exits.success();

  }


};
