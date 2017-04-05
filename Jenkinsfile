pipeline {
    agent any
    stages {
        stage ("Git Sync and Deploy:") {
            steps {
                try {
                    sh "bash deploy.sh"
                } catch(error) {
                    throw error
                }
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