pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                cp index.html /var/www/html/
                cp style.css /var/www/html/
                cp script.js /var/www/html/
                '''
            }
        }

    }
}
