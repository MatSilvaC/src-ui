#!groovy

def application = 'qbox'
def configFile = ''

node {
  pull(application)

  docker.image('node:10-alpine').inside() {
    stage ('Build, Check and Test') {
      sh "npm install"
    }
  }

  packageAndDeploy(application, configFile)
}
