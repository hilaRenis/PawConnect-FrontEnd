import urls from "./Config";

async function createAnnouncement(userId, title, description, images) // now ony one image
{
    const token = localStorage.getItem('token');

    const url = `${urls.BaseUrl}/api/announcements`;

    const announcement = JSON.stringify({
        userId : userId,
        title : title,
        description : description
    });

    const formData = new FormData();
    formData.append('images', images)
    formData.append('announcement', announcement)

    const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      };

      try 
      {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: formData,
        });
    
        return response;
      } 
      catch (error) 
      {
        console.log('API error createAnnouncement()', error);
        
      }

}

async function getVisibleAnnouncement(userid)
{
    const url = `${urls.BaseUrl}/api/announcements`;
    const token = localStorage.getItem('token');

    const body = JSON.stringify({
        userId : userid
    });

    const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      };

      try
      {
        const response = await fetch(url,{
          method: 'GET',
          headers,
          body,
        });
        return response;
      }
      catch(error)
      {
        console.log("API error getVisibleAnnouncement()");
        
      }
    
}

async function getAnnouncementById(announcementId, userid)
{
    const url = `${urls.BaseUrl}/api/announcements/${announcementId}`;
    const token = localStorage.getItem('token');

    const body = JSON.stringify({
        userId : userid
    });

    const headers = {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      };


      try
      {
        const response = await fetch(url,{
          method: 'GET',
          headers,
          body,
        });
        return response;
      }
      catch(error)
      {
        console.log("API error getAnnouncementById()");
        
      }

}



const AnnouncementAPI = {
    createAnnouncement,
    getVisibleAnnouncement,
    getAnnouncementById

};

export default AnnouncementAPI;