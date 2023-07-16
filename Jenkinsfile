pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t chamathranaweera/crud-frontend:stg .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push chamathranaweera/crud-frontend:stg'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}