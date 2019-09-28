
# Server Routes:

/ - This is ICNST 

/api/admin/login - POST { email: string, password: string } db: admin

/api/register - POST { firstName: string, lastName: string, email: string, password: string, country: string } db: users

/api/login - POST { email: string, password: string } db: users

## Protected
/api/users - GET, POST db: users

/api/user/:id - GET, PUT, DELETE

/api/countries - GET, POST

/api/country/:id - GET, PUT, DELETE 

/api/country/:id/users - GET 

/api/country/:id/user/:id - GET, PUT, DELETE 

/api/country/:id/communities - GET, POST

/api/country/:id/community/:id - GET, PUT, DELETE

/api/country/:id/community/:id/children - GET, POST

/api/country/:id/community/:id/child/:id - GET, PUT, DELETE
