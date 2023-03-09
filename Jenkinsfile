pipeline {
  agent any
  stages {
    stage('create log') {
      steps {
        git(url: 'https://github.com/TrippleA-Ashaba/CI_CD.git', branch: '_albert')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Unit test') {
          steps {
            sh 'npm i && npm run test'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run build:client'
      }
    }

  }
}