module.exports = {


  friendlyName: 'View log index',


  description: 'Display "Log index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/log/index'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
