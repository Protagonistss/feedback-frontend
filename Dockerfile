FROM nginx
MAINTAINER protagonisths<protagonisths@gmail.com>
ENV MYPATH=/usr
WORKDIR ${MYPATH}
RUN rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/ 
EXPOSE 9801