pipeline {
    agent any
    stages {
        stage ("System Checking:") {
            steps {
                echo "${env}"
                sh "echo $PATH"
                sh "git --version"
                sh "node --version"
                sh "pm2 -v"
            }
        }
        stage ("Build and Deploy App:") {
            steps {
                sh "bash deploy.sh"
            }
        }
    }
    post {
        success {
            echo "Build successful. Running Build# ${env.BUILD_ID} on ${env.JENKINS_URL}."
        }
        failure {
            echo "Deployment failed"
        }
    }
}