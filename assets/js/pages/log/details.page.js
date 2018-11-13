parasails.registerPage('details', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    log: null,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    this.log = await fetch(`/log/${this.logId}`).then(r=>r.json());
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    logHours(log) {
      return log.entries.reduce((sum, entry) => {
        return sum + entry.hours;
      }, 0);
    },

    async submitAddEntry(event) {
      const hours = this.$find(`[name=hours]`).val();

      const response = await fetch(`/api/v1/log-entry/add`, {
        method: `POST`,
        body: JSON.stringify({
          logId: this.logId, 
          hours,
          _csrf: this._csrf
        })
      });

      this.log = await fetch(`/log/${this.logId}`).then(r=>r.json());
    }
  },

  filters: {
    date(timestamp) {
      const d = new Date(timestamp);
      return `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;
    }
  },
});
