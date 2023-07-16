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
                bat 'docker build -t chamathranaweera/crud-frontend:stg .'
            }
        }

        stage('Login') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub_cred') {
                    bat 'docker build -t chamathranaweera/crud-frontend:stg .'
                    bat 'docker push chamathranaweera/crud-frontend:stg'
                }
                }
            }
        }

        stage('Push') {
            steps {
                bat 'docker push chamathranaweera/crud-frontend:stg'
            }
        }
    }

    post {
        always {
            bat 'docker logout'
        }
    }
}