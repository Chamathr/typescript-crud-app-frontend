pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub_cred')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/FT/add-auth-jwt']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Chamathr/typescript-crud-app-frontend.git']]])
            }
        }

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