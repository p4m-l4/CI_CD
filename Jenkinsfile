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
      parallel {
        stage('Build') {
          steps {
            sh 'npm run build:client'
          }
        }

        stage('Build docker image') {
          steps {
            sh 'docker build . -t p4m3l4/calc-app:$BUILD_NUMBER'
          }
        }

      }
    }

    stage('Login to dockerhub') {
      environment {
        DOCKERHUB_USER = 'p4m3l4'
        DOCKERHUB_PASSWORD = 'PAM4dockerHUB'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKER_HUB PASSWORD'
      }
    }

  }
}