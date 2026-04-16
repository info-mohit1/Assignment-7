export const getTimelineData = () => {
  try {
    const savedEntries = localStorage.getItem("timelineData");
    
    return savedEntries ? JSON.parse(savedEntries) : [];
  } catch (err) {
    console.error("Critical: Could not retrieve timeline data ->", err);
    return [];
  }
};

 
export const saveTimelineData = (dataPayload) => {
  try {
    const serializedData = JSON.stringify(dataPayload);
    localStorage.setItem("timelineData", serializedData);
    
     
    console.log(
      "%c ✨ Storage Updated Successfully! ",
      "background: #1e293b; color: #10b981; font-weight: bold; border-radius: 4px; padding: 2px;"
    );
  } catch (err) {
    console.error("Critical: Data persistence failed ->", err);
  }
};