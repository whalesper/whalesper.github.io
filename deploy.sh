# run this script after git pull from repo.
docker stop whalesper
docker rm whalesper
docker build -t whalesper -f Dockerfile.prod .
docker run -d --name whalesper -p 80:80 whalesper