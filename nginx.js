module.exports = {
    basic: (folder)=>{
        return`
        server {
            listen 80;
            root /var/www/${folder};
            server_name localhost;
            index index.php index.html index.htm;

            location / {
                try_files $uri $uri/ /index.php?$args;
            }

            location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/php7.4-fpm.sock;
            }
            location ~ /\.ht {
                deny all;
            }
        }`;
    }
}