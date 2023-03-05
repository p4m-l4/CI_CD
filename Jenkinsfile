pipeline {
  agent any
  stages {
    stage('code checkout') {
      steps {
        git(url: 'https://github.com/TrippleA-Ashaba/CI_CD.git', branch: '_albert')
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('build image') {
      steps {
        sh 'docker build -f Dockerfile .'
      }
    }

  }
}