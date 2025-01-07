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

async function getUserById(id)
{
  const token = localStorage.getItem('token');
  const url = `${urls.BaseUrl}/api/users/${id}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };
  try
  {
    const response = await fetch(url, {
      method : 'GET',
      headers : headers,
    });

    return response;

  }
  catch(error)
  {
    console.log("API error getUserById()")
    
  }

}

async function updateUserById(username, email, fullname, password, userid, avatar) 
{
  const token = localStorage.getItem('token');


  const data = JSON.stringify({ 
    username : username,
    email : email,
    password     : password,
    fullName : fullname
  });



  const formData = new FormData();

  formData.append('avatar', avatar);
  formData.append('data', data);


  const url = `${urls.BaseUrl}/api/users/${userid}`;
  const headers = {
    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  };
  try 
  {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: formData,
    });

    return response;
  } 
  catch (error) 
  {
    console.log('API error updateUserById()', error);
    
  }
}



const UserAPI = {
    signUp,
    login,
    getUserById,
    updateUserById
};

export default UserAPI;