pipeline {
	stages {
		stage("Stage 1") {
			steps {
				echo "Stage 1 complete"
			}
		}
		stage("Stage 2") {
			steps {
				echo "Stage 2 complete"
			}
		}
	}

	post {
		always {
			echo "I will run every time!!"
		}
	}
}