pipeline {
	agent any
	stages {
		stage("Mocha Unit Test") {
			steps {
				echo "Doing testing..."
				sh "npm test"
			}
		}
		stage("Run App") {
			steps {
				echo "Restarting the App"
				sh "pm2 reload TestNodeServer"
			}
		}
		stage("DONE") {
			steps {
				echo "Seems All OKK!!"
			}
		}
	}

	post {
		always {
			echo "I will run every time!!"
		}
	}
}