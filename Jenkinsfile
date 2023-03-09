pipeline {
  agent any
  stages {
    stage('create log') {
      steps {
        git(url: 'https://github.com/TrippleA-Ashaba/CI_CD.git', branch: '_albert')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

  }
}