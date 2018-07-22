# development
- `docker build -t whalesper-dev -f Dockerfile.dev .`
- `docker run -d --name whalesper-dev -p 3000:3000 whalesper-dev:latest`
- `docker exec -it whalesper-dev /bin/bash`, use this to enter dev env, edit files and test. 

# production 
- `docker build -t whalesper -f Dockerfile.prod .`
- `docker run -d --name whalesper -p 3000:80 whalesper`

