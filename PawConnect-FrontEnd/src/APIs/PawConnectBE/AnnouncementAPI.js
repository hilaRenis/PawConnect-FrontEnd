import urls from "./Config";

async function createAnnouncement(userId, title, description, images)
{
    const token = localStorage.getItem('token');

    const url = `${urls.BaseUrl}/api/announcements`

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






const AnnouncementAPI = {

};

export default AnnouncementAPI;