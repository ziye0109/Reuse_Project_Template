module.exports = {
    apps: [
    {
      name: 'project-name',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};