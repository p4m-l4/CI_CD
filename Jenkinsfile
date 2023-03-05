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
        sh 'docker build . -t trippleaunit/calctest:latest'
      }
    }

    stage('log into Dockerhub') {
      environment {
        DOCKERHUB_USER = 'trippleaunit'
        DOCKERHUB_PASSWORD = 'Safari170692'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('push') {
      steps {
        sh 'docker push trippleaunit/calctest:latest'
      }
    }

    stage('run') {
      environment {
        MONGO_URI = 'mongodb+srv://coder:bbfIhQ5apCI3toD2@cluster0.cz22dwx.mongodb.net/calc_prod?retryWrites=true&w=majority'
      }
      steps {
        sh '''docker run \\
-e DB_URI="${MONGO_URI}" -e PORT=\'3000\' \\
-d -p 8000:3000 --name calctest \\
trippleaunit/calctest:latest'''
      }
    }

  }
}