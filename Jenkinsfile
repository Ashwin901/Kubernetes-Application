pipeline{
    
    agent {
        docker { 
            image 'node:16.9.0'
            args '-u 0:0' 
            }
    }

    stages {
        stage('Build') {
            steps {
                echo "Building"
                sh "npm install"
            }
        }
        stage("Test") {
            steps {
                echo "Testing"
                sh "npm test"
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