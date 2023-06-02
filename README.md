## nginx-https-server
Deploy app with Docker, Nginx, and SSL.

## Deploy on DigitalOcean
```sh
# check ssh key
cat ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
cat ~/.ssh/known_hosts

# if you don't have one, then generate with:
ssh-keygen

# add your public key to cloud service platform
cat ~/.ssh/id_rsa.pub

# login to your VPS
ssh root@143.198.32.239

# install docker & docker-compose on your vps

# to check whether we are on the docker group, avoid typing sudo each time
sudo usermod -aG docker ${USER}
cat /etc/group

# check group
id -nG

# copy a local directory to remote vps
scp -r frontend/build root@143.198.32.239:~/
```

## Links
1. Install Docker on Ubuntu: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

2. Install Docker-Compose: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04


## License
This project is licensed under the terms of the MIT license.