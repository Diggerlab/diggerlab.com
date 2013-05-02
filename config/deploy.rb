set :application, "diggerlab_com"
set :repository,  "scm@project.diggerlab.com:diggerlab.com"
set :branch, "master"
set :user, "webuser"
set :use_sudo, false
set :scm, :git

set :deploy_to, "/home/webuser/www/diggerlab.com"
set :current_path, "#{deploy_to}/current"
set :releases_path, "#{deploy_to}/releases/"
set :shared_path, "#{deploy_to}/shared"

role :web, "diggerlab.com"                          # Your HTTP server, Apache/etc
role :app, "diggerlab.com"                          # This may be the same as your `Web` server

namespace:deploy do
    namespace:app do 
      task:start do
      end
      
      task:stop do
      end

      after "deploy:restart", :roles => :app do
        #add any tasks in here that you want to run after the project is deployed
        run "rm -rf #{release_path}.git"
        run "chmod -R 755 #{current_path}"
      end
    end

end

