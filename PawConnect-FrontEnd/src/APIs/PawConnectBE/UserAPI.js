import urls from "./Config.js";

async function signUp(username, password, fullname, email)
{
    const url = `${urls.BaseUrl}/api/users/signup`; 

    const body = JSON.stringify({ 
      username : username,
      email : email,
      password     : password,
      fullName : fullname
    });

    const headers = {
      'Content-Type': 'application/json',
    };
  
    try
    {
      const response = await fetch(url,{
        method : 'POST',
        headers : headers,
        body : body,
      });
  
      return response;
  
    }
    catch(error)
    {
      console.log("API error signIn()");
     
    }
  
}

async function login(email, password)   // just login with email
{
  const url = `${urls.BaseUrl}/api/users/login`;

  const body = JSON.stringify({
    usernameOrEmail : email,
    password : password
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  try
  {
    const response = await fetch(url,{
      method: 'POST',
      headers,
      body,
    });
    return response;
  }
  catch(error)
  {
    console.log("API error login()");
    
  }

}


const UserAPI = {
    signUp,
    login
};

export default UserAPI;