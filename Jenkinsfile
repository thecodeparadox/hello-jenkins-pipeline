pipeline {
    agent any
    stages {
        stage ("Git Sync and Deploy:") {
            steps {
                sh "bash deploy.sh"
            }
        }
    }
    post {
        success {
            echo "Build successful. Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
        }
        failure {
            echo "Deployment failed"
        }
    }
}