## Nginx-Https-Server
Deploy app with Docker, Nginx, and SSL.

## Websites
Main domain: https://www.tjcchen.org/posts

Sub domain: https://web.tjcchen.org/posts

## Deploy on DigitalOcean
```sh
# check ssh key( need to put your public key in VPS platform for authentication purpose )
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

# deploy and setup SSL on your vps
docker-compose up -d
docker exec -it <container_name> bash            # bash into the nginx container
certbot --nginx -d domain.com -d www.domain.com  # setup SSL certificate
certbot --nginx -d web.tjcchen.org -d www.tjcchen.org

# purchase domain in AWS
# please note that we can also add subdomain like: web.tjcchen.org at this place.
login -> aws Route 53 -> dashboard -> hosted zones -> hosted zone name -> create record / edit record

# configure your ssl with certbot inside container( certbot installation needed )
docker exec -it nginx-https-server_frontend_1 bash

certbot --nginx -d web.tjcchen.org -d www.tjcchen.org

# after taht, there will be some configs writing to nginx at:
/etc/nginx/sites-available/default
```

## Links
1. Install Docker on Ubuntu: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

2. Install Docker-Compose: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

3. DNS Lookup: https://www.nslookup.io/

4. Register domain name with AWS Route 53: https://us-east-1.console.aws.amazon.com/route53/v2/home?region=us-east-1#Dashboard


## License
This project is licensed under the terms of the MIT license.
