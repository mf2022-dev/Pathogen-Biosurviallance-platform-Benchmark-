module.exports = {
  apps: [{
    name: 'pathogen-site',
    script: 'server.js',
    cwd: '/home/user/pathogen-push',
    watch: false,
    instances: 1,
    exec_mode: 'fork'
  }]
}
