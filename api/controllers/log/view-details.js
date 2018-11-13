module.exports = {


  friendlyName: 'View details',


  description: 'Display "Details" page.',

  inputs: {
    id: {
      type: 'number',
      required: true,
      description: `ID of Log record`,
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/log/details'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success({logId: inputs.id});

  }


};
