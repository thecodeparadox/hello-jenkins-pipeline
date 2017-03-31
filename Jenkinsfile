pipeline {
	agent any
	environment {
        APP_HOST_TYPE = 'local'
    }
	stages {
		stage("Mocha Unit Test") {
			environment {
                APP_HOST_TESTING = 'MOCHA_TEST'
            }
			steps {
				echo "Doing testing..."
				sh "npm test"
			}
		}
		stage("DONE") {
			steps {
				echo "Seems All OKK!!"
				echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
			}
		}
	}

	post {
		changed {
			echo "Current Build has changes."
		}
		success {
			echo "All Build and deployment succeed! :-)"
		}
		always {
			echo "I will run every time!!"
			mail to: 'dabdullahy@gmail.com',
	             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
	             body: "Something is wrong with ${env.BUILD_URL}"
		}
		failure {
	        mail to: 'dabdullahy@gmail.com',
	             subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
	             body: "Something is wrong with ${env.BUILD_URL}"
	    }
	}
}