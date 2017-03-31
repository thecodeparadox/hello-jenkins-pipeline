pipeline {
	agent any
	stages {
		stage("Mocha Unit Test") {
			steps {
				echo "Doing testing..."
				sh "npm test"
			}
		}
		stage("DONE") {
			environment {
                APP_HOST_TYPE = 'local'
            }
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