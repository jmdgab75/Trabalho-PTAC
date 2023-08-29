'use server'

const getUser = [
    {
      name: "Any",
      email: "any@email.com",
      password: "senha123",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
      name: "Iza",
      email: "iza@email.com",
      password: "senha456",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
      name: "Isabel",
      email: "isabel@email.com",
      password: "senha789",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  ];

  
const getUserAuthenticated = (userLogin) => {
   let usermach = {};

    getUser.map((user) =>{

   if(user.email === userLogin.email && user.password === userLogin.password){
   usermach = user
    } 
})
 
return usermach 
}

const getUsers = () =>{
     return getUser
}
export { getUsers, getUserAuthenticated };