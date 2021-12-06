pipeline{
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building"
                echo "Build successful"
            }
        }
        stage("Test") {
            agent {
                docker { image 'node:16.9.0' }
            }
            steps {
                echo "Testing"
                sh "node --version"
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploying"
                echo "Deployment successful"
            }
        }
    }
}