pipeline{
    
    agent any
    
        stages{
            stage("Checkout"){
                steps{
                    checkout scm
                }
            }

            stage("Install Dependencies"){
                steps{
                    echo '📦 Installing dependencies...'
                    sh 'npm ci'
                }
            }

            stage("Build Project"){
                steps{
                    echo '⚙️ Building project...'
                    sh 'npm run build'
                }
            }

            stage("Deploy to Nginx"){
                steps{
                    echo '🚀 Deploying to Nginx...'

                    sh 'sudo rm -rf /var/www/html/dist/*'

                    sh 'sudo cp -r dist/* /var/www/html/dist'

                    echo 'Restarting Nginx...'
                    sh 'sudo systemctl restart nginx'
                }
            }
        }
        
        post{
            success{
                echo '✅ Deployment completed successfully!'
            }
            failure{
                echo '❌ Deployment failed.'
            }
        }
    }
