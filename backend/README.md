## To run the backend service forever
```sh
# install pm2
npm install pm2 -g

# start the backend service
pm2 --name node-backend-api start npm -- start

# check pm2 processes
pm2 ps
pm2 list

# stop a service
pm2 delete pid; eg: pm2 delete 0
pm2 delete name; eg: pm2 delete node-backend-api
```