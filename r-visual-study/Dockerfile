FROM centos:latest

RUN yum install -y epel-release && \
    yum install -y R && \
    yum install -y libcurl-devel && \
    yum install -y openssl-devel && \
    yum install -y libxml2-devel

RUN cd /usr/lib64/R && \
    chmod 777 library/

RUN R -e "install.packages(c('tidyverse', 'data.table', 'knitr', 'R.utils'), dependencies=TRUE, repos='https://cran.rstudio.com/')"

RUN yum install -y wget && \
    wget https://download2.rstudio.org/rstudio-server-rhel-0.99.902-x86_64.rpm && \
    yum install -y --nogpgcheck rstudio-server-rhel-0.99.902-x86_64.rpm && \
    yum install -y initscripts

RUN useradd rstudio && \
    echo 'rstudio:rstudio' |chpasswd && \
    mkdir /home/rstudio/R && \
    cd /home/rstudio/R && \
    ln -s /var/www/html winfile