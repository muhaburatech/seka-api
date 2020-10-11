module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:
          "mongodb://seka-admin:RSGY1vN4smoZRDCM@cluster0-shard-00-00.l3rvp.mongodb.net:27017,cluster0-shard-00-01.l3rvp.mongodb.net:27017,cluster0-shard-00-02.l3rvp.mongodb.net:27017/sekadb?ssl=true&replicaSet=atlas-e6whjp-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
