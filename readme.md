
# Server Routes:

/ - This is ICNST 
/api/admin/login - POST { email: string, password: string } 
/api/register - POST { firstName: string, lastName: string, email: string, password: string, country: string } 
/api/login - POST { email: string, password: string } 

## Protected
/api/users - GET, POST 
/api/country/:id/users - GET 
/api/country/:id/user/:id - GET, PUT, DELETE 
/api/user/:id - GET, PUT, DELETE 
/api/countries - GET 
/api/country/:id - GET, PUT, DELETE 
/api/communities - GET 
/api/country/:id/communities - GET 
/api/country/:id/community/:id - GET, POST, PUT, DELETE 
