module.exports = {


  friendlyName: 'View create',


  description: 'Display "Create" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/log/create'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
