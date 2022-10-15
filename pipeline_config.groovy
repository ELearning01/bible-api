application_environments {
    global {
        environment {
            APP_NAME = 'app-name'
            API_PACKAGE_NAME='app-name-api.zip'
        }
    }
    dev {
        kong {
            KONG_SERVICE='app-name'
            KONG_HOST='dev01'
        }
    }
    perf {

    }
    sit {
        kong {
            KONG_SERVICE='app-name'
            KONG_HOST='stg01'
        }
    }
    stg {
        // stg is automatically deployed to before deploys to prod
    }
    prod {
        // TODO: Configure Kong before prod deployment
    }
}

libraries {
    docker
    ecs
    nodejs {
        node_image_tag = '12'
    }
    sonarqube {
        enabled = false
    }
    sonatype {
        enabled = false
        application_id = 'app-name'
    }
}
