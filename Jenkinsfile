#!groovy

def application = 'qbox'
def configFile = ''

node {
  pull(application)

  docker.image('node:10-alpine').inside() {
    stage ('Build, Check and Test') {
      sh "ls -la"
    }
  }

  packageAndDeploy(application, configFile)
}
