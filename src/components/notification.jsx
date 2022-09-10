import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "18tfimm6dnj6",
  accessToken: "MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4",
});

export const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, [notifications]);

  const fetchData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "notification"
      });
      setNotifications(items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {notifications.map((notification, i) => (
        <li key={i}>{notification.fields.title}</li>
      ))}
    </ul>
  );
};

export default Notification;