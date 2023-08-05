pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub_cred')
    }

    stages {
        stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/FT/add-auth-jwt']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Chamathr/typescript-crud-app-frontend.git']]])
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub_cred') {
                    bat 'docker build -t crud-frontend:stg .'
                    bat 'docker tag crud-frontend:stg chamathranaweera/crud-frontend:stg'
                    bat 'docker push chamathranaweera/crud-frontend:stg'
                }
                }
            }
        }
        
    }

    post {
        always {
            bat 'docker logout'
        }
    }
}