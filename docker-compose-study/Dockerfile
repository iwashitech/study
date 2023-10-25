FROM centos:latest

RUN yum install -y httpd php

RUN mkdir /home/www.example.co.jp
RUN cd /home/www.example.co.jp
RUN ln -s /var/www/html/www www
RUN ln -s /var/www/html/webapp webapp

# enable service.
RUN systemctl enable httpd

# exec.
CMD ["/sbin/init"]
